export function useFavorites() {
  const key = "favorite-properties";
  const stored = JSON.parse(localStorage.getItem(key) || "[]");

  const toggle = (id: string) => {
    const next = stored.includes(id)
      ? stored.filter((x: string) => x !== id)
      : [...stored, id];

    localStorage.setItem(key, JSON.stringify(next));
    window.location.reload();
  };

  return { favorites: stored, toggle };
}
