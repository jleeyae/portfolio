// src/PropertyPortfolio.jsx
import React, { useMemo, useState, useEffect } from "react";
import "./App.css";

import { portfolio } from "./data/Portfolio";
import { useFamilyNotes } from "./hooks/useFamilyNotes";
import { useConversationMode } from "./hooks/useConversationMode";
import { useFavorites } from "./hooks/useFavorites";
import { useViewer } from "./hooks/useViewer";
import { useFamilyVoting, Stars } from "./hooks/useFamilyVoting";

const money = (n) =>
  n?.toLocaleString?.(undefined, {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0,
  }) ?? "";

const fmtRange = (min, max) => `${money(min)}–${money(max)}`;

const fullAddress = (p) => `${p.address}, ${p.city}, ${p.state}`;

const areaMapsUrlFor = (group) =>
  `https://www.google.com/maps/@${group.map.lat},${group.map.lng},${group.map.zoom}z`;

const fallbackThumb = (p) =>
  `https://source.unsplash.com/640x480/?${encodeURIComponent(
    `${p.city} ${p.state} luxury home exterior`
  )}`;

const propertyThumb = (p) => {
  const first = p?.vibes?.photos?.[0]?.url;
  return first || fallbackThumb(p);
};

function RoseRow({ count }) {
  return (
    <span className="pp-roses" aria-label="rating">
      {Array.from({ length: count }).map((_, i) => (
        <span key={i}>🌹</span>
      ))}
    </span>
  );
}

/**
 * New vibes shape:
 * group.vibes = { title, subtitle, photos:[{ url, credit? }] }
 * We'll render photos as a luxe "vibe strip", each click opens area map.
 */
function VibeRow({ vibes }) {
  if (!vibes?.photos?.length) return null;

  return (
    <div className="pp-vibes">
      {vibes.photos.map((p, i) => (
        <img
          key={i}
          className="pp-vibe-img"
          src={p.url}
          alt={vibes.title}
          loading="lazy"
        />
      ))}
    </div>
  );
}

function GroupCard({ group, notesOn, convoOn, favorites, voting, viewerId }) {
  const [openCapRate, setOpenCapRate] = useState(false);

  return (
    <section className="pp-group" data-pdf-section={group.pdf?.section || ""}>
      <header className="pp-group-header">
        <div className="pp-group-titleline">
          <div className="pp-group-title">
            <span className="pp-pin">📍</span> {group.name}
          </div>
          <RoseRow count={group.roses} />
        </div>

        <div className="pp-group-sub">
          <span className="pp-chip">{group.region}</span>

          <div className="pp-group-links">
            <a
              className="pp-link"
              href={areaMapsUrlFor(group)}
              target="_blank"
              rel="noreferrer"
            >
              Open area in Maps
            </a>
          </div>
        </div>

        {/* Map preview (needs VITE_MAPBOX_TOKEN in env to be non-null in your dataset builder) */}
        {group?.map?.staticUrl ? (
          <a
            className="pp-map-preview"
            href={areaMapsUrlFor(group)}
            target="_blank"
            rel="noreferrer"
            title="Open area in Maps"
          >
            <img
              className="pp-map-img"
              src={group.map.staticUrl}
              alt={`${group.name} map preview`}
              loading="lazy"
            />
          </a>
        ) : null}

        <div className="pp-group-copy">
          <div className="pp-info">
            <div className="pp-info-label">Dating Scene</div>
            <div className="pp-info-text">{group.datingScene}</div>
          </div>
          <div className="pp-info">
            <div className="pp-info-label">Best For</div>
            <div className="pp-info-text">{group.bestFor}</div>
          </div>
        </div>

        <VibeStrip group={group} />
      </header>

      <div className="pp-group-controls">
        <button
          className="pp-btn ghost"
          type="button"
          onClick={() => setOpenCapRate((v) => !v)}
        >
          {openCapRate ? "Hide cap-rate math" : "Show cap-rate math"}
        </button>

        <div className="pp-group-controls-hint">
          Links: we open <b>Maps</b> + <b>Redfin</b> (no fragile Zillow IDs).
        </div>
      </div>

      <div className="pp-props">
        {group.properties.map((p) => {
          const sum = voting.summary(p.id);
          const fav = favorites.isFavorite(p.id);

          // Prefer dataset links. Fall back safely if missing.
          const mapsHref =
            p?.links?.maps ||
            `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
              fullAddress(p)
            )}`;

          const redfinHref =
            p?.links?.redfin ||
            `https://www.google.com/search?q=${encodeURIComponent(
              `${fullAddress(p)} site:redfin.com`
            )}`;

          return (
            <article key={p.id} className={`pp-prop ${fav ? "is-fav" : ""}`}>
              <div className="pp-prop-left">
                <img
                  className="pp-prop-img"
                  src={propertyThumb(p)}
                  alt={`${p.city} preview`}
                  loading="lazy"
                />
                <div className="pp-prop-badges">
                  {p.isJason ? <span className="pp-badge">JASON’S</span> : null}
                  {fav ? <span className="pp-badge subtle">★ Favorite</span> : null}
                </div>
              </div>

              <div className="pp-prop-main">
                <div className="pp-prop-top">
                  <div>
                    <div className="pp-prop-addr">{fullAddress(p)}</div>
                    <div className="pp-prop-meta">
                      <span>{p.beds} bd</span>
                      <span>{p.baths} ba</span>
                      <span>
                        {p.sqft?.toLocaleString?.() ?? p.sqft} sqft
                      </span>
                    </div>
                  </div>

                  <div className="pp-prop-actions">
                    <button
                      className="pp-btn"
                      type="button"
                      onClick={() => favorites.toggleFavorite(p.id)}
                    >
                      {fav ? "Unfavorite" : "Favorite"}
                    </button>

                    <a
                      className="pp-btn outline"
                      href={mapsHref}
                      target="_blank"
                      rel="noreferrer"
                    >
                      Open in Maps
                    </a>

                    <a
                      className="pp-btn outline"
                      href={redfinHref}
                      target="_blank"
                      rel="noreferrer"
                    >
                      Open in Redfin
                    </a>
                  </div>
                </div>

                <div className="pp-prop-stats">
                  <div className="pp-stat">
                    <div className="pp-stat-label">Price</div>
                    <div className="pp-stat-value">{money(p.price)}</div>
                  </div>

                  <div className="pp-stat">
                    <div className="pp-stat-label">Monthly income</div>
                    <div className="pp-stat-value">
                      {fmtRange(p.monthlyIncome.min, p.monthlyIncome.max)}
                    </div>
                  </div>

                  <div className="pp-stat">
                    <div className="pp-stat-label">Annual income</div>
                    <div className="pp-stat-value">
                      {fmtRange(p.annualIncome.min, p.annualIncome.max)}
                    </div>
                  </div>
                </div>

                <div className="pp-roi">
                  <div className="pp-roi-title">ROI notes</div>
                  <div className="pp-roi-text">{p.roiNotes}</div>
                </div>

                {openCapRate ? (
                  <div className="pp-cap">
                    <div className="pp-cap-row">
                      <div className="pp-cap-label">Estimated NOI (annual)</div>
                      <div className="pp-cap-val">{money(p.capRate.estimatedNOI)}</div>
                    </div>
                    <div className="pp-cap-row">
                      <div className="pp-cap-label">Estimated cap rate</div>
                      <div className="pp-cap-val">
                        {Number(p.capRate.estimatedCapRate || 0).toFixed(1)}%
                      </div>
                    </div>
                    <div className="pp-cap-foot">
                      Hidden by default because the first conversation is usually vibes, then math.
                    </div>
                  </div>
                ) : null}

                <div className="pp-vote">
                  <div className="pp-vote-left">
                    <div className="pp-vote-label">Family rating</div>
                    <div className="pp-vote-sub">
                      {sum.count ? `${sum.avg.toFixed(1)} avg (${sum.count} votes)` : "No votes yet"}
                    </div>
                  </div>

                  <Stars value={sum.mine} title="Your rating" onChange={(n) => voting.rate(p.id, n)} />
                </div>

                {notesOn ? (
                  <FamilyNotesBlock
                    propertyId={p.id}
                    viewerId={viewerId}
                    privateNotes={p.privateNotes}
                  />
                ) : null}

                {convoOn ? <ConversationBlock propertyId={p.id} viewerId={viewerId} /> : null}
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}

function FamilyNotesBlock({ propertyId, viewerId, privateNotes }) {
  const key = `pp.notes.${propertyId}.${viewerId}`;
  const [text, setText] = useState(() => localStorage.getItem(key) || "");

  const save = (v) => {
    setText(v);
    localStorage.setItem(key, v);
  };

  return (
    <div className="pp-notes">
      <div className="pp-notes-title">Family notes (private to you)</div>
      <textarea
        className="pp-textarea"
        value={text}
        onChange={(e) => save(e.target.value)}
        placeholder="Thoughts, concerns, pros/cons, questions for the group…"
      />

      {privateNotes?.notes?.length ? (
        <div className="pp-notes-seed">
          <div className="pp-notes-seed-title">Seed notes (from dataset)</div>
          <ul>
            {privateNotes.notes.map((n, i) => (
              <li key={i}>{n}</li>
            ))}
          </ul>
        </div>
      ) : null}
    </div>
  );
}

function ConversationBlock({ propertyId, viewerId }) {
  const key = `pp.thread.${propertyId}`;
  const [items, setItems] = useState(() => {
    try {
      return JSON.parse(localStorage.getItem(key) || "[]");
    } catch {
      return [];
    }
  });

  const [draft, setDraft] = useState("");

  const post = () => {
    const msg = draft.trim();
    if (!msg) return;
    const next = [
      ...items,
      { id: `${Date.now()}`, author: viewerId, text: msg, ts: new Date().toISOString() },
    ];
    setItems(next);
    localStorage.setItem(key, JSON.stringify(next));
    setDraft("");
  };

  return (
    <div className="pp-thread">
      <div className="pp-thread-title">Conversation mode</div>

      <div className="pp-thread-prompts">
        <span className="pp-prompt">What would we use this for most?</span>
        <span className="pp-prompt">Any dealbreakers?</span>
        <span className="pp-prompt">Is this “legacy” or “yield”?</span>
      </div>

      <div className="pp-thread-list">
        {items.length ? (
          items.map((m) => (
            <div key={m.id} className="pp-msg">
              <div className="pp-msg-meta">
                <span className="pp-msg-author">{m.author}</span>
                <span className="pp-msg-ts">{new Date(m.ts).toLocaleString()}</span>
              </div>
              <div className="pp-msg-text">{m.text}</div>
            </div>
          ))
        ) : (
          <div className="pp-thread-empty">No messages yet. Start the story ✍️</div>
        )}
      </div>

      <div className="pp-thread-compose">
        <input
          className="pp-input"
          value={draft}
          onChange={(e) => setDraft(e.target.value)}
          placeholder="Add a thought…"
        />
        <button className="pp-btn" type="button" onClick={post}>
          Post
        </button>
      </div>
    </div>
  );
}

export default function PropertyPortfolio() {
  const [dark, setDark] = useState(false);

  const { name, setName, id: viewerId } = useViewer();
  const { enabled: notesOn, toggle: toggleNotes } = useFamilyNotes();
  const { enabled: convoOn, toggle: toggleConvo } = useConversationMode();
  const favorites = useFavorites();
  const voting = useFamilyVoting(viewerId);

  const groups = useMemo(() => portfolio.groups || [], []);

  useEffect(() => {
    document.body.classList.toggle("dark", dark);
  }, [dark]);

  return (
    <div className="pp-page">
      <div className="pp-topbar">
        <div className="pp-brand">
          <div className="pp-title">Property Portfolio</div>
          <div className="pp-subtitle">A family space for vibes, math, and decisions.</div>
        </div>

        <div className="pp-controls">
          <div className="pp-viewer">
            <span className="pp-viewer-label">Viewer</span>
            <input
              className="pp-input small"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Your name"
            />
          </div>

          <button className="pp-btn outline" type="button" onClick={() => setDark((v) => !v)}>
            {dark ? "Light" : "Dark"}
          </button>

          <button className="pp-btn outline" type="button" onClick={toggleNotes}>
            {notesOn ? "Hide Notes" : "Show Notes"}
          </button>

          <button className="pp-btn outline" type="button" onClick={toggleConvo}>
            {convoOn ? "Exit Conversation" : "Conversation Mode"}
          </button>

          <button className="pp-btn" type="button" onClick={() => window.print()}>
            Print Storybook PDF
          </button>
        </div>
      </div>

      <div className="pp-shell">
        <div className="pp-kicker">
          <div className="pp-kicker-left">
            <div className="pp-kicker-big">{portfolio.generatedFor}</div>
            <div className="pp-kicker-small">
              Favorites saved: <b>{favorites.favoritesCount}</b>
              <span className="pp-dot">•</span>
              Links: <b>Maps</b> + <b>Redfin</b>
            </div>
          </div>
        </div>

        <div className="pp-groups">
          {groups.map((g) => (
            <GroupCard
              key={g.id}
              group={g}
              notesOn={notesOn}
              convoOn={convoOn}
              favorites={favorites}
              voting={voting}
              viewerId={viewerId}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
