import { useEffect, useMemo, useState } from "react";

const KEY = "pp.favorites";

export function useFavorites() {
  const [set, setSet] = useState<Set<string>>(() => {
    try {
      const raw = localStorage.getItem(KEY);
      const arr: string[] = raw ? JSON.parse(raw) : [];
      return new Set(arr);
    } catch {
      return new Set();
    }
  });

  useEffect(() => {
    localStorage.setItem(KEY, JSON.stringify(Array.from(set)));
  }, [set]);

  const toggleFavorite = (propertyId: string) => {
    setSet((prev) => {
      const next = new Set(prev);
      if (next.has(propertyId)) next.delete(propertyId);
      else next.add(propertyId);
      return next;
    });
  };

  const isFavorite = (propertyId: string) => set.has(propertyId);

  const count = useMemo(() => set.size, [set]);

  return { isFavorite, toggleFavorite, favoritesCount: count };
}
