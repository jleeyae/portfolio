import { useFamilyNotes } from "../hooks/useFamilyNotes";
import { useConversationMode } from "../hooks/useConversationMode";
import { useFavorites } from "../hooks/useFavorites";

export default function PropertyCard({ property }: any) {
  const { enabled: showNotes } = useFamilyNotes();
  const { enabled: conversation } = useConversationMode();
  const { favorites, toggle } = useFavorites();

  const isFav = favorites.includes(property.id);

  return (
    <div className="propertyCard">
      <h3>{property.address}</h3>

      {!conversation && (
        <div className="financials">
          <strong>${property.price.toLocaleString()}</strong>
          <div>
            ${property.monthlyIncome.min.toLocaleString()}–
            ${property.monthlyIncome.max.toLocaleString()}/mo
          </div>
        </div>
      )}

      <a href={property.zillowUrl} target="_blank">
        View on Zillow
      </a>

      <button onClick={() => toggle(property.id)}>
        {isFav ? "★ Favorited" : "☆ Favorite"}
      </button>

      {showNotes && property.privateNotes?.enabled && (
        <div className="privateNotes">
          <strong>Family Notes</strong>
          <ul>
            {property.privateNotes.notes.map((n: string, i: number) => (
              <li key={i}>{n}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
