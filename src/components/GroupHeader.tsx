import "./GroupHeader.css";

export default function GroupHeader({ group }: any) {
  return (
    <section className="groupHeader">
      <div className="groupHeaderText">
        <span className="region">{group.region}</span>
        <h2>{group.name}</h2>

        <p className="dating">
          {"🌹".repeat(group.roses)} {group.datingScene}
        </p>

        <p className="bestFor">{group.bestFor}</p>
      </div>

      <div className="groupMap">
        <img
          src={group.map.staticUrl}
          alt={`Map of ${group.name}`}
          loading="lazy"
        />
      </div>
    </section>
  );
}
