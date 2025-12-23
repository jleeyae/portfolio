// src/PropertyPortfolio.jsx
import React, { useEffect, useMemo, useState } from "react";
import "./App.css";
import { portfolio } from "./data/Portfolio";

/**
 * Lux “Open in Maps” + “Open in Redfin”
 * - Maps: Google Maps search URL
 * - Redfin: Redfin search URL (reliable even if listing IDs change)
 * - Photo preview: Google Street View Static (optional key)
 */

const formatMoney = (n) =>
  new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0,
  }).format(n);

const rangeMoney = (min, max) => `${formatMoney(min)} – ${formatMoney(max)}`;

const roses = (count) => "🌹".repeat(Math.max(0, count));

const fullAddress = (p) => `${p.address}, ${p.city}, ${p.state}`;

const mapsUrl = (p) =>
  `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
    fullAddress(p)
  )}`;

const redfinUrl = (p) =>
  `https://www.redfin.com/search?query=${encodeURIComponent(fullAddress(p))}`;

/**
 * Street View preview (not scraping). Requires a Maps key, but can be restricted by referrer.
 * Set in .env: VITE_GOOGLE_MAPS_KEY=xxxx
 */
const streetViewUrl = (p) => {
  const key = import.meta.env.VITE_GOOGLE_MAPS_KEY;
  if (!key) return "";
  const size = "320x220";
  const location = encodeURIComponent(fullAddress(p));
  return `https://maps.googleapis.com/maps/api/streetview?size=${size}&location=${location}&fov=70&pitch=10&source=outdoor&key=${key}`;
};

const StatCard = ({ icon, label, value, gradient }) => (
  <div className="ppp-stat-card" style={{ background: gradient }}>
    <div className="ppp-stat-label">
      {icon && <span className="ppp-stat-icon">{icon}</span>}
      <span>{label}</span>
    </div>
    <div className="ppp-stat-value">{value}</div>
  </div>
);

const Pill = ({ children, onClick, href, target }) => {
  if (href) {
    return (
      <a className="ppp-pill" href={href} target={target || "_blank"} rel="noreferrer">
        {children}
      </a>
    );
  }
  return (
    <button className="ppp-pill" type="button" onClick={onClick}>
      {children}
    </button>
  );
};

function PropertyCard({ p, showJasonOnly }) {
  if (showJasonOnly && !p.isJason) return null;

  const img = streetViewUrl(p);

  return (
    <article className={`ppp-property-card ${p.isJason ? "is-jason" : ""}`}>
      <div className="ppp-property-left">
        {img ? (
          <img className="ppp-property-img" src={img} alt={`Preview: ${fullAddress(p)}`} loading="lazy" />
        ) : (
          <div className="ppp-property-img ppp-img-fallback">
            <div className="ppp-img-fallback-title">Preview</div>
            <div className="ppp-img-fallback-sub">
              Add <code>VITE_GOOGLE_MAPS_KEY</code> for Street View
            </div>
          </div>
        )}
      </div>

      <div className="ppp-property-right">
        <div className="ppp-property-top">
          <div className="ppp-property-address">
            {fullAddress(p)}
            {p.isJason && <span className="ppp-jason-badge" title="Jason’s desired properties">★ J</span>}
          </div>

          <div className="ppp-property-meta">
            <span>{p.beds} bd</span>
            <span>{p.baths} ba</span>
            <span>{p.sqft.toLocaleString()} sqft</span>
          </div>
        </div>

        <div className="ppp-property-grid">
          <div className="ppp-metric">
            <div className="ppp-metric-label">Price</div>
            <div className="ppp-metric-value">{formatMoney(p.price)}</div>
          </div>

          <div className="ppp-metric">
            <div className="ppp-metric-label">Monthly Income</div>
            <div className="ppp-metric-value ppp-income-monthly">
              {rangeMoney(p.monthlyIncome.min, p.monthlyIncome.max)}
            </div>
          </div>

          <div className="ppp-metric">
            <div className="ppp-metric-label">Annual Income</div>
            <div className="ppp-metric-value ppp-income-annual">
              {rangeMoney(p.annualIncome.min, p.annualIncome.max)}
            </div>
          </div>
        </div>

        <div className="ppp-roi">
          <div className="ppp-roi-label">ROI notes</div>
          <div className="ppp-roi-text">{p.roiNotes}</div>
        </div>

        <div className="ppp-actions">
          <Pill href={mapsUrl(p)}>Open in Maps</Pill>
          <Pill href={redfinUrl(p)}>Open in Redfin</Pill>
        </div>
      </div>
    </article>
  );
}

function MarketCard({ market, showJasonOnly }) {
  const [expanded, setExpanded] = useState(true);

  return (
    <section className="ppp-market">
      <header className="ppp-market-header">
        <div className="ppp-market-header-left">
          <div className="ppp-market-title">
            <span className="ppp-market-pin">📍</span>
            <span>{market.name}</span>
            <span className="ppp-market-roses">{roses(market.roses)}</span>
          </div>
          <div className="ppp-market-tag">{market.region}</div>
        </div>

        <div className="ppp-market-header-right">
          <button
            className="ppp-collapse"
            type="button"
            onClick={() => setExpanded((v) => !v)}
            aria-expanded={expanded}
          >
            {expanded ? "Collapse" : "Expand"}
          </button>
        </div>
      </header>

      {/* Group map preview */}
      {market.map?.staticUrl && (
        <div className="ppp-market-map">
          <img
            src={market.map.staticUrl}
            alt={`Map preview: ${market.name}`}
            loading="lazy"
          />
        </div>
      )}

      {expanded && (
        <div className="ppp-market-body">
          <div className="ppp-info-card ppp-dating">
            <div className="ppp-info-label">
              <span>♡</span>
              <span>Dating / Vibe</span>
            </div>
            <p>{market.datingScene}</p>
          </div>

          <div className="ppp-info-card">
            <div className="ppp-info-label">Best For</div>
            <p>{market.bestFor}</p>
          </div>

          {/* IMPORTANT: we do NOT total numbers together anymore.
              Each property stays independent (each house is for someone else). */}
          <div className="ppp-properties">
            {market.properties.map((p) => (
              <PropertyCard key={p.id} p={p} showJasonOnly={showJasonOnly} />
            ))}
          </div>
        </div>
      )}
    </section>
  );
}

export default function PropertyPortfolio() {
  const [query, setQuery] = useState("");
  const [jasonOnly, setJasonOnly] = useState(false);

  const groups = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return portfolio.groups;

    return portfolio.groups
      .map((g) => {
        const props = g.properties.filter((p) => {
          const hay = `${p.address} ${p.city} ${p.state}`.toLowerCase();
          return hay.includes(q);
        });
        return { ...g, properties: props };
      })
      .filter((g) => g.properties.length > 0);
  }, [query]);

  // Print action (storybook-style print CSS can be added later; this keeps it simple)
  const onPrint = () => window.print();

  // Nice: remember toggles
  useEffect(() => {
    const saved = localStorage.getItem("ppp_jason_only");
    if (saved === "1") setJasonOnly(true);
  }, []);
  useEffect(() => {
    localStorage.setItem("ppp_jason_only", jasonOnly ? "1" : "0");
  }, [jasonOnly]);

  return (
    <div className="ppp-page">
      <div className="ppp-shell">
        <header className="ppp-header">
          <div>
            <h1 className="ppp-title">Family Property Portfolio</h1>
            <p className="ppp-subtitle">Luxury-focused, conversation-friendly, and link-correct ✅</p>
          </div>

          <div className="ppp-header-actions">
            <button className="ppp-download-btn" type="button" onClick={onPrint}>
              <span className="ppp-download-icon">⬇️</span>
              Download PDF
            </button>
          </div>
        </header>

        <div className="ppp-toolbar">
          <div className="ppp-search">
            <input
              className="ppp-search-input"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search by address, city, state…"
              aria-label="Search properties"
            />
          </div>

          <label className="ppp-toggle">
            <input
              type="checkbox"
              checked={jasonOnly}
              onChange={(e) => setJasonOnly(e.target.checked)}
            />
            <span>Jason’s picks only (★ J)</span>
          </label>
        </div>

        <div className="ppp-market-list">
          {groups.map((m) => (
            <MarketCard key={m.id} market={m} showJasonOnly={jasonOnly} />
          ))}
        </div>
      </div>
    </div>
  );
}
