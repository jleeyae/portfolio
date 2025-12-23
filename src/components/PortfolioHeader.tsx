export default function PortfolioHeader() {
  return (
    <section className="portfolioHeader">
      <div className="headerLeft">
        <h1>Premium Property Portfolio</h1>
        <p className="subtitle">
          33 Luxury Properties Across Texas & Colorado
        </p>

        <ul className="disclaimer">
          <li>Individually owned luxury residences</li>
          <li>Income estimates shown per property</li>
          <li>No aggregated portfolio valuation</li>
        </ul>
      </div>

      <button className="downloadBtn">
        ⬇ Download PDF
      </button>
    </section>
  );
}
