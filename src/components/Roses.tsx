import { RosesRating } from "../types";

export function Roses({ rating }: { rating: RosesRating }) {
  const roses = "🌹".repeat(rating);
  return <span aria-label={`${rating} roses`}>{roses}</span>;
}
