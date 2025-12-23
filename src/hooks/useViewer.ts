import { useEffect, useMemo, useState } from "react";

const KEY = "pp.viewer";

export function useViewer() {
  const [name, setName] = useState<string>(() => localStorage.getItem(KEY) || "Guest");

  useEffect(() => {
    localStorage.setItem(KEY, name);
  }, [name]);

  const id = useMemo(() => name.trim().toLowerCase().replace(/\s+/g, "-") || "guest", [name]);

  return { name, setName, id };
}
