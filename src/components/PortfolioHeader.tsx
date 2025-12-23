export function PortfolioHeader() {
  return (
    <div className="card">
      <div className="section">
        <div style={{ display: "flex", justifyContent: "space-between", gap: 16, alignItems: "flex-start", flexWrap: "wrap" }}>
          <div>
            <h1 className="h1">Premium Property Portfolio</h1>
            <p className="sub">33 Luxury Properties Across Texas & Colorado</p>
          </div>

          <button className="btn" onClick={() => alert("Hook this up to your PDF generator/download route.")}>
            <span style={{ fontSize: 18 }}>⬇️</span>
            Download PDF
          </button>
        </div>
      </div>
    </div>
  );
}
