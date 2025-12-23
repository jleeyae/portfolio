import { portfolio } from "../data/Portfolio";

export default function MapView() {
  return (
    <div className="mapGrid">
      {portfolio.groups.map(group => (
        <div key={group.id} className="mapOnlyCard">
          <img src={group.map.staticUrl} alt={group.name} />
          <h3>{group.name}</h3>
          <span>{group.properties.length} homes</span>
        </div>
      ))}
    </div>
  );
}
