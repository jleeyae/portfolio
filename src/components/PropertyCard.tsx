import { useMemo, useState } from "react";
import { Property } from "../types";
import { formatCurrency } from "../utils/format";
import { JasonStarBadge } from "./JasonStarBadge";
import { Roses } from "./Roses";

export function PropertyCard({ p }: { p: Property }) {
  const [open, setOpen] = useState(false);

  const monthly = useMemo(() => `${formatCurrency(p.income.monthlyLow)}–${formatCurrency(p.income.monthlyHigh)}`, [p]);
  const annual = useMemo(() => `${formatCurrency(p.income.annualLow)}–${formatCurrency(p.income.annualHigh)}`, [p]);

  const mapHref = useMemo(() => {
    const q = encodeURIComponent(`${p.addressLine}, ${p.cityStateZip}`);
    return `https://www.google.com/maps/search/?api=1&query=${q}`;
  }, [p]);

  return (
    <div className="propertyCard">
      <div className="row">
        <div>
          <a className="addr" href={mapHref} target="_blank" rel="noreferrer">
            {p.addressLine}, {p.cityStateZip}
          </a>

          <div className="meta">
            <span>🛏️ {p.beds} bd</span>
            <span>🛁 {p.baths} ba</span>
            <span>📐 {p.sqft.toLocaleString()} sqft</span>
            <span>📌 {p.status}</span>
          </div>
        </div>

        <div style={{ textAlign: "right" }}>
          <div className="price">{formatCurrency(p.price)}</div>
          <div style={{ marginTop: 8, display: "flex", justifyContent: "flex-end", gap: 10, alignItems: "center", flexWrap: "wrap" }}>
            <Roses rating={p.datingScene.roses} />
            {p.isJason ? <JasonStarBadge /> : null}
          </div>
        </div>
      </div>

      <div className="divider" />

      <div className="smallGrid">
        <div>
          <div style={{ fontWeight: 900, color: "rgba(15,23,42,.70)", letterSpacing: ".08em", textTransform: "uppercase", fontSize: 12 }}>
            Monthly Income
          </div>
          <div style={{ fontWeight: 950, fontSize: 22, marginTop: 6 }}>{monthly}</div>
        </div>

        <div>
          <div style={{ fontWeight: 900, color: "rgba(15,23,42,.70)", letterSpacing: ".08em", textTransform: "uppercase", fontSize: 12 }}>
            Annual Income
          </div>
          <div style={{ fontWeight: 950, fontSize: 22, marginTop: 6 }}>{annual}</div>
        </div>
      </div>

      <button className="detailsBtn" onClick={() => setOpen((v) => !v)}>
        {open ? "Hide details" : "Show details"}
      </button>

      {open ? (
        <div style={{ marginTop: 12 }}>
          <div className="note"><b>Calculation basis:</b> {p.basis}</div>
          <div style={{ marginTop: 10 }} className="note"><b>Demographics:</b> {p.demographics}</div>
          <div style={{ marginTop: 10 }} className="note">
            <b>Dating scene:</b> {p.datingScene.label} – {p.datingScene.description}
          </div>
          <div style={{ marginTop: 10 }} className="note"><b>Lifestyle fit:</b> {p.lifestyleFit}</div>
        </div>
      ) : null}
    </div>
  );
}
