// src/PropertyPortfolio.jsx
import React, { useMemo, useState } from "react";
import "./App.css";
import { portfolio } from "./data/Portfolio";

/**
 * PropertyPortfolio.jsx
 * - Reads ALL data from src/data/Portfolio.ts
 * - No totals are calculated or displayed (each home is for someone else)
 * - Tasteful search + filters
 * - Favorites/voting (localStorage)
 * - Family notes toggle (viewer-controlled)
 * - Conversation mode (adds prompts + “talk about it” UI)
 * - Print/PDF button (window.print) + uses your print.css if you have it linked in index.html
 */

/* -----------------------------
   Helpers
----------------------------- */
const money = (n) =>
  typeof n === "number"
    ? n.toLocaleString("en-US", { style: "currency", currency: "USD", maximumFractionDigits: 0 })
    : "";

const fmtRange = (min, max) => `${money(min)} – ${money(max)}`;

const clamp = (v, a, b) => Math.max(a, Math.min(b, v));

const roseLabel = (count) => {
  const c = clamp(Number(count || 0), 0, 4);
  return "🌹".repeat(c);
};

// localStorage helpers
const LS_KEYS = {
  dark: "ppp.dark",
  favorites: "ppp.favorites",
  votes: "ppp.votes",
  notesOn: "ppp.notesOn",
  convoOn: "ppp.convoOn",
  filters: "ppp.filters",
};

function readJSON(key, fallback) {
  try {
    const v = localStorage.getItem(key);
    return v ? JSON.parse(v) : fallback;
  } catch {
    return fallback;
  }
}

function writeJSON(key, value) {
  try {
    localStorage.setItem(key, JSON.stringify(value));
  } catch {
    // ignore
  }
}

/* -----------------------------
   UI bits
----------------------------- */
function Chip({ children, tone = "neutral" }) {
  return <span className={`ppp-chip ppp-chip--${tone}`}>{children}</span>;
}

function IconButton({ onClick, children, title, pressed, className = "" }) {
  return (
    <button
      className={`ppp-icon-btn ${pressed ? "is-pressed" : ""} ${className}`}
      onClick={onClick}
      title={title}
      type="button"
    >
      {children}
    </button>
  );
}

function StatPill({ label, value, tone = "neutral" }) {
  return (
    <div className={`ppp-pill ppp-pill--${tone}`}>
      <div className="ppp-pill__label">{label}</div>
      <div className="ppp-pill__value">{value}</div>
    </div>
  );
}

function Collapsible({ title, defaultOpen = false, children }) {
  const [open, setOpen] = useState(defaultOpen);
  return (
    <div className={`ppp-accordion ${open ? "is-open" : ""}`}>
      <button className="ppp-accordion__btn" type="button" onClick={() => setOpen(!open)}>
        <span className="ppp-accordion__title">{title}</span>
        <span className="ppp-accordion__chev" aria-hidden>
          ▾
        </span>
      </button>
      <div className="ppp-accordion__panel">{open ? children : null}</div>
    </div>
  );
}

/* -----------------------------
   Main component
----------------------------- */
export default function PropertyPortfolio() {
  // persisted UI prefs
  const [darkMode, setDarkMode] = useState(() => readJSON(LS_KEYS.dark, false));
  const [notesOn, setNotesOn] = useState(() => readJSON(LS_KEYS.notesOn, false));
  const [convoOn, setConvoOn] = useState(() => readJSON(LS_KEYS.convoOn, false));

  const [favorites, setFavorites] = useState(() => new Set(readJSON(LS_KEYS.favorites, [])));
  const [votes, setVotes] = useState(() => readJSON(LS_KEYS.votes, {})); // { [propertyId]: { up: number, down: number } }

  // Filters
  const initialFilters = readJSON(LS_KEYS.filters, {
    query: "",
    onlyJason: false,
    groupId: "all",
    minRoses: 0,
    sort: "default", // default | price_desc | price_asc | income_desc | income_asc
    mapOnly: false,
    favoritesOnly: false,
  });

  const [query, setQuery] = useState(initialFilters.query);
  const [onlyJason, setOnlyJason] = useState(initialFilters.onlyJason);
  const [favoritesOnly, setFavoritesOnly] = useState(initialFilters.favoritesOnly);
  const [groupId, setGroupId] = useState(initialFilters.groupId);
  const [minRoses, setMinRoses] = useState(initialFilters.minRoses);
  const [sort, setSort] = useState(initialFilters.sort);
  const [mapOnly, setMapOnly] = useState(initialFilters.mapOnly);

  // Apply dark mode class to body
  React.useEffect(() => {
    document.body.classList.toggle("dark", !!darkMode);
    writeJSON(LS_KEYS.dark, !!darkMode);
  }, [darkMode]);

  React.useEffect(() => {
    writeJSON(LS_KEYS.notesOn, !!notesOn);
  }, [notesOn]);

  React.useEffect(() => {
    writeJSON(LS_KEYS.convoOn, !!convoOn);
  }, [convoOn]);

  React.useEffect(() => {
    writeJSON(LS_KEYS.favorites, Array.from(favorites));
  }, [favorites]);

  React.useEffect(() => {
    writeJSON(LS_KEYS.votes, votes);
  }, [votes]);

  React.useEffect(() => {
    writeJSON(LS_KEYS.filters, {
      query,
      onlyJason,
      favoritesOnly,
      groupId,
      minRoses,
      sort,
      mapOnly,
    });
  }, [query, onlyJason, favoritesOnly, groupId, minRoses, sort, mapOnly]);

  const groups = portfolio?.groups || [];

  // Flatten list for search & map-only view
  const allProps = useMemo(() => {
    const out = [];
    for (const g of groups) {
      for (const p of g.properties || []) {
        out.push({ group: g, property: p });
      }
    }
    return out;
  }, [groups]);

  const filtered = useMemo(() => {
    const q = (query || "").trim().toLowerCase();

    let list = allProps.filter(({ group, property }) => {
      if (groupId !== "all" && group.id !== groupId) return false;
      if ((group.roses || 0) < (minRoses || 0)) return false;

      if (onlyJason && !property.isJason) return false;
      if (favoritesOnly && !favorites.has(property.id)) return false;

      if (!q) return true;
      const hay = [
        property.address,
        property.city,
        property.state,
        group.name,
        group.region,
        property.roiNotes,
      ]
        .filter(Boolean)
        .join(" | ")
        .toLowerCase();

      return hay.includes(q);
    });

    // sorting
    const getIncomeMid = (p) => {
      const mi = p.monthlyIncome?.min ?? 0;
      const mx = p.monthlyIncome?.max ?? 0;
      return (mi + mx) / 2;
    };

    if (sort === "price_desc") list.sort((a, b) => (b.property.price || 0) - (a.property.price || 0));
    if (sort === "price_asc") list.sort((a, b) => (a.property.price || 0) - (b.property.price || 0));
    if (sort === "income_desc") list.sort((a, b) => getIncomeMid(b.property) - getIncomeMid(a.property));
    if (sort === "income_asc") list.sort((a, b) => getIncomeMid(a.property) - getIncomeMid(b.property));

    return list;
  }, [allProps, query, groupId, minRoses, onlyJason, favoritesOnly, sort, favorites]);

  // Group back for list view
  const groupedForList = useMemo(() => {
    const map = new Map(); // groupId -> { group, items: Property[] }
    for (const { group, property } of filtered) {
      if (!map.has(group.id)) map.set(group.id, { group, props: [] });
      map.get(group.id).props.push(property);
    }
    return Array.from(map.values());
  }, [filtered]);

  const toggleFavorite = (propertyId) => {
    setFavorites((prev) => {
      const next = new Set(prev);
      if (next.has(propertyId)) next.delete(propertyId);
      else next.add(propertyId);
      return next;
    });
  };

  const vote = (propertyId, dir) => {
    setVotes((prev) => {
      const next = { ...prev };
      const cur = next[propertyId] || { up: 0, down: 0 };
      next[propertyId] = {
        up: cur.up + (dir === "up" ? 1 : 0),
        down: cur.down + (dir === "down" ? 1 : 0),
      };
      return next;
    });
  };

  const scoreFor = (propertyId) => {
    const v = votes[propertyId] || { up: 0, down: 0 };
    return (v.up || 0) - (v.down || 0);
  };

  const totalShown = filtered.length;

  return (
    <div className="ppp-page">
      <div className="ppp-shell">
        {/* -----------------------------
            Header
        ----------------------------- */}
        <header className="ppp-header">
          <div className="ppp-header__left">
            <div className="ppp-kicker">Family Property Companion</div>
            <h1 className="ppp-title">Property Portfolio</h1>
            <p className="ppp-subtitle">
              {portfolio?.generatedFor || "A shared view of our properties"}
              <span className="ppp-dot">•</span>
              <span className="ppp-muted">{groups.length} groups</span>
              <span className="ppp-dot">•</span>
              <span className="ppp-muted">{totalShown} homes shown</span>
            </p>
          </div>

          <div className="ppp-header__right">
            <div className="ppp-actions">
              <button className="ppp-btn" type="button" onClick={() => window.print()}>
                Download PDF
              </button>

              <IconButton
                title="Toggle dark mode"
                onClick={() => setDarkMode((v) => !v)}
                pressed={darkMode}
              >
                {darkMode ? "☾" : "☀︎"}
              </IconButton>

              <IconButton
                title="Toggle family notes"
                onClick={() => setNotesOn((v) => !v)}
                pressed={notesOn}
              >
                📝
              </IconButton>

              <IconButton
                title="Conversation mode"
                onClick={() => setConvoOn((v) => !v)}
                pressed={convoOn}
              >
                💬
              </IconButton>

              <IconButton title="Map-only view" onClick={() => setMapOnly((v) => !v)} pressed={mapOnly}>
                🗺️
              </IconButton>
            </div>
          </div>
        </header>

        {/* -----------------------------
            Filters
        ----------------------------- */}
        <section className="ppp-toolbar">
          <div className="ppp-toolbar__row">
            <div className="ppp-search">
              <input
                className="ppp-input"
                placeholder="Search address, city, region, ROI notes…"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                aria-label="Search properties"
              />
            </div>

            <div className="ppp-filter">
              <label className="ppp-label">Group</label>
              <select className="ppp-select" value={groupId} onChange={(e) => setGroupId(e.target.value)}>
                <option value="all">All groups</option>
                {groups.map((g) => (
                  <option key={g.id} value={g.id}>
                    {g.name}
                  </option>
                ))}
              </select>
            </div>

            <div className="ppp-filter">
              <label className="ppp-label">Min roses</label>
              <select
                className="ppp-select"
                value={minRoses}
                onChange={(e) => setMinRoses(Number(e.target.value))}
              >
                <option value={0}>Any</option>
                <option value={1}>🌹+</option>
                <option value={2}>🌹🌹+</option>
                <option value={3}>🌹🌹🌹+</option>
                <option value={4}>🌹🌹🌹🌹</option>
              </select>
            </div>

            <div className="ppp-filter">
              <label className="ppp-label">Sort</label>
              <select className="ppp-select" value={sort} onChange={(e) => setSort(e.target.value)}>
                <option value="default">Default</option>
                <option value="price_desc">Price (high → low)</option>
                <option value="price_asc">Price (low → high)</option>
                <option value="income_desc">Monthly income (high → low)</option>
                <option value="income_asc">Monthly income (low → high)</option>
              </select>
            </div>
          </div>

          <div className="ppp-toolbar__row ppp-toolbar__row--toggles">
            <label className="ppp-toggle">
              <input type="checkbox" checked={onlyJason} onChange={(e) => setOnlyJason(e.target.checked)} />
              <span>Only Jason’s ⭐</span>
            </label>

            <label className="ppp-toggle">
              <input
                type="checkbox"
                checked={favoritesOnly}
                onChange={(e) => setFavoritesOnly(e.target.checked)}
              />
              <span>Favorites only</span>
            </label>

            {convoOn ? (
              <div className="ppp-convo-hint">
                💬 Conversation mode is on: each property includes prompts to help you discuss pros/cons.
              </div>
            ) : null}
          </div>
        </section>

        {/* -----------------------------
            Map-only view (grid of group maps + property pins)
        ----------------------------- */}
        {mapOnly ? (
          <section className="ppp-map-only">
            <div className="ppp-mapgrid">
              {groups
                .filter((g) => (groupId === "all" ? true : g.id === groupId))
                .filter((g) => (g.roses || 0) >= (minRoses || 0))
                .map((g) => (
                  <div className="ppp-mapcard" key={g.id}>
                    <div className="ppp-mapcard__top">
                      <div className="ppp-mapcard__title">
                        <span>{g.name}</span>
                        <span className="ppp-roses">{roseLabel(g.roses)}</span>
                      </div>
                      <div className="ppp-mapcard__tag">{g.region}</div>
                    </div>

                    {g.map?.staticUrl ? (
                      <img className="ppp-mapimg" src={g.map.staticUrl} alt={`Map preview for ${g.name}`} />
                    ) : (
                      <div className="ppp-mapimg ppp-mapimg--empty">No map preview</div>
                    )}

                    <div className="ppp-mapcard__list">
                      {(g.properties || [])
                        .filter((p) => (onlyJason ? !!p.isJason : true))
                        .filter((p) => (favoritesOnly ? favorites.has(p.id) : true))
                        .filter((p) => {
                          const q = (query || "").trim().toLowerCase();
                          if (!q) return true;
                          const hay = [p.address, p.city, p.state, p.roiNotes].filter(Boolean).join(" ").toLowerCase();
                          return hay.includes(q);
                        })
                        .map((p) => (
                          <div className="ppp-minirow" key={p.id}>
                            <div className="ppp-minirow__left">
                              <div className="ppp-minirow__addr">
                                {p.isJason ? <span className="ppp-jstar" title="Jason">⭐ J</span> : null}
                                <span>{p.address}</span>
                              </div>
                              <div className="ppp-minirow__meta">
                                {p.city}, {p.state} • {p.beds} bd • {p.baths} ba • {p.sqft.toLocaleString()} sqft
                              </div>
                            </div>

                            <div className="ppp-minirow__right">
                              <IconButton
                                title={favorites.has(p.id) ? "Unfavorite" : "Favorite"}
                                onClick={() => toggleFavorite(p.id)}
                                pressed={favorites.has(p.id)}
                                className="ppp-minirow__fav"
                              >
                                {favorites.has(p.id) ? "★" : "☆"}
                              </IconButton>
                              <a className="ppp-minirow__link" href={p.zillowUrl} target="_blank" rel="noreferrer">
                                Zillow ↗
                              </a>
                            </div>
                          </div>
                        ))}
                    </div>
                  </div>
                ))}
            </div>
          </section>
        ) : (
          /* -----------------------------
              Normal list view (Group sections)
          ----------------------------- */
          <div className="ppp-market-list">
            {groupedForList.map(({ group: g, props }) => (
              <section className="market-card" key={g.id} data-pdf-section={g.pdf?.section || ""}>
                {/* Group Header */}
                <header className="market-header">
                  <div className="ppp-grouphead">
                    <div className="ppp-grouphead__title">
                      <div className="ppp-grouphead__name">{g.name}</div>
                      <div className="ppp-grouphead__meta">
                        <Chip tone="lux">{g.region}</Chip>
                        <span className="ppp-roses">{roseLabel(g.roses)}</span>
                      </div>
                    </div>

                    <div className="ppp-grouphead__right">
                      <div className="ppp-grouphead__small">Map Preview</div>
                      {g.map?.staticUrl ? (
                        <a className="ppp-maplink" href={g.map.staticUrl} target="_blank" rel="noreferrer">
                          Open ↗
                        </a>
                      ) : (
                        <span className="ppp-muted">None</span>
                      )}
                    </div>
                  </div>

                  {g.map?.staticUrl ? (
                    <img className="ppp-groupmap" src={g.map.staticUrl} alt={`Map preview for ${g.name}`} />
                  ) : null}
                </header>

                {/* Group Body */}
                <div className="ppp-market-body">
                  <div className="metric-row">
                    <div className="metric-box">
                      <div className="metric-label">Dating Scene</div>
                      <div className="metric-value">{g.datingScene}</div>
                    </div>
                    <div className="metric-box">
                      <div className="metric-label">Best For</div>
                      <div className="metric-value">{g.bestFor}</div>
                    </div>
                  </div>

                  {/* Properties */}
                  <div className="property-list">
                    {props.map((p) => (
                      <PropertyCard
                        key={p.id}
                        p={p}
                        group={g}
                        favorites={favorites}
                        toggleFavorite={toggleFavorite}
                        vote={vote}
                        score={scoreFor(p.id)}
                        notesOn={notesOn}
                        convoOn={convoOn}
                      />
                    ))}
                  </div>
                </div>
              </section>
            ))}

            {groupedForList.length === 0 ? (
              <div className="ppp-empty">
                <div className="ppp-empty__title">No matches</div>
                <div className="ppp-empty__sub">Try clearing filters or searching something broader.</div>
              </div>
            ) : null}
          </div>
        )}

        <footer className="ppp-footer">
          <div className="ppp-footer__left">
            <span className="ppp-muted">Version</span> <span className="ppp-mono">{portfolio?.version || "—"}</span>
          </div>
          <div className="ppp-footer__right ppp-muted">
            Tip: Use “Download PDF” for the storybook print view.
          </div>
        </footer>
      </div>
    </div>
  );
}

/* -----------------------------
   Property Card
----------------------------- */
function PropertyCard({ p, group, favorites, toggleFavorite, vote, score, notesOn, convoOn }) {
  const [capOpen, setCapOpen] = useState(false);

  const monthly = fmtRange(p.monthlyIncome?.min ?? 0, p.monthlyIncome?.max ?? 0);
  const annual = fmtRange(p.annualIncome?.min ?? 0, p.annualIncome?.max ?? 0);

  const showCap = !!p.capRate?.enabled || capOpen;

  const jStar = p.isJason ? (
    <span className="ppp-jstar" title="Jason’s desired property">
      ⭐ J
    </span>
  ) : null;

  return (
    <article className="property-card" data-property-id={p.id}>
      <div className="ppp-prop-top">
        <div className="ppp-prop-title">
          <div className="property-title">
            {jStar} {p.address}
          </div>
          <div className="property-meta">
            <span>
              {p.city}, {p.state}
            </span>
            <span>•</span>
            <span>
              {p.beds} bd
            </span>
            <span>
              {p.baths} ba
            </span>
            <span>
              {Number(p.sqft || 0).toLocaleString()} sqft
            </span>
          </div>
        </div>

        <div className="ppp-prop-actions">
          <IconButton
            title={favorites.has(p.id) ? "Unfavorite" : "Favorite"}
            onClick={() => toggleFavorite(p.id)}
            pressed={favorites.has(p.id)}
          >
            {favorites.has(p.id) ? "★" : "☆"}
          </IconButton>

          <IconButton title="Vote up" onClick={() => vote(p.id, "up")}>
            👍
          </IconButton>
          <IconButton title="Vote down" onClick={() => vote(p.id, "down")}>
            👎
          </IconButton>

          <div className="ppp-score" title="Score (upvotes - downvotes)">
            {score >= 0 ? `+${score}` : score}
          </div>

          <a className="ppp-zillow" href={p.zillowUrl} target="_blank" rel="noreferrer">
            Zillow ↗
          </a>
        </div>
      </div>

      <div className="property-income">
        <div>
          <div className="metric-label">Price</div>
          <div className="metric-value">{money(p.price || 0)}</div>
        </div>

        <div>
          <div className="metric-label">Monthly income</div>
          <div className="metric-value monthly">{monthly}</div>
        </div>

        <div>
          <div className="metric-label">Annual income</div>
          <div className="metric-value annual">{annual}</div>
        </div>
      </div>

      <div className="ppp-roi">
        <div className="ppp-roi__label">ROI Notes</div>
        <div className="ppp-roi__text">{p.roiNotes}</div>
      </div>

      {/* Cap rate math (hidden by default) */}
      <div className="ppp-cap">
        <button className="ppp-cap__toggle" type="button" onClick={() => setCapOpen((v) => !v)}>
          {showCap ? "Hide cap-rate math" : "Show cap-rate math"}
        </button>

        {showCap ? (
          <div className="ppp-cap__grid">
            <StatPill tone="neutral" label="Estimated NOI (annual)" value={money(p.capRate?.estimatedNOI || 0)} />
            <StatPill
              tone="lux"
              label="Estimated cap rate"
              value={`${Number(p.capRate?.estimatedCapRate || 0).toFixed(1)}%`}
            />
            <div className="ppp-cap__fine">
              Note: This is an estimate for discussion only, not investment advice.
            </div>
          </div>
        ) : null}
      </div>

      {/* Private/family notes (viewer toggled) */}
      {notesOn ? (
        <Collapsible title="Family notes" defaultOpen={false}>
          {p.privateNotes?.notes?.length ? (
            <ul className="ppp-notes">
              {p.privateNotes.notes.map((n, idx) => (
                <li key={idx}>{n}</li>
              ))}
            </ul>
          ) : (
            <div className="ppp-muted">No notes yet.</div>
          )}
        </Collapsible>
      ) : null}

      {/* Conversation mode */}
      {convoOn ? (
        <div className="ppp-convo">
          <div className="ppp-convo__title">Conversation prompts</div>
          <div className="ppp-convo__grid">
            <div className="ppp-convo__card">
              <div className="ppp-convo__q">What do we love most here?</div>
              <div className="ppp-convo__a ppp-muted">Views, layout, location, “feels like home” factor…</div>
            </div>
            <div className="ppp-convo__card">
              <div className="ppp-convo__q">What’s the main tradeoff?</div>
              <div className="ppp-convo__a ppp-muted">Maintenance, access, seasonality, price vs. utility…</div>
            </div>
            <div className="ppp-convo__card">
              <div className="ppp-convo__q">Best use-case for our family?</div>
              <div className="ppp-convo__a ppp-muted">Holidays, hosting, quiet weekends, long stays…</div>
            </div>
          </div>
        </div>
      ) : null}

      {/* PDF hint section tags (for your print CSS if you want) */}
      <div className="ppp-print-meta" aria-hidden>
        <span className="ppp-print-chip">{group?.pdf?.section || ""}</span>
        {group?.pdf?.avoidPageBreak ? <span className="ppp-print-chip">AvoidBreak</span> : null}
      </div>
    </article>
  );
}
