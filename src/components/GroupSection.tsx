import PropertyCard from "./PropertyCard";
import Roses from "./Roses";

export default function GroupSection({ group }: any) {
  return (
    <section className="groupSection">
      <div className="groupHeader">
        <div>
          <h2>
            📍 {group.name} <Roses count={group.roses} />
          </h2>
          <span className="region">{group.region}</span>
        </div>

        <div className="groupMeta">
          {group.properties.length} Properties
        </div>
      </div>

      <div className="groupBody">
        <div className="infoCard dating">
          <strong>♡ Dating Scene</strong>
          <p>{group.datingScene}</p>
        </div>

        <div className="infoCard bestFor">
          <strong>Best For</strong>
          <p>{group.bestFor}</p>
        </div>

        <div className="properties">
          {group.properties.map((p: any) => (
            <PropertyCard key={p.id} property={p} />
          ))}
        </div>
      </div>
    </section>
  );
}
