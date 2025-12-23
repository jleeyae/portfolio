export default function ControlsBar({
  query,
  setQuery,
  jasonOnly,
  setJasonOnly,
}: any) {
  return (
    <div className="controls">
      <input
        className="search"
        placeholder="Search by city, address, or region…"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />

      <label className="toggle">
        <input
          type="checkbox"
          checked={jasonOnly}
          onChange={() => setJasonOnly(!jasonOnly)}
        />
        Jason’s Only
      </label>
    </div>
  );
}
