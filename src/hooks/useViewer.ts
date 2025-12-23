// src/hooks/useViewer.ts
import { useEffect, useMemo, useState } from "react";

const NAME_KEY = "pp.viewer.name";
const ID_KEY = "pp.viewer.id";

const canUseStorage = () =>
  typeof window !== "undefined" && typeof window.localStorage !== "undefined";

const makeId = () => {
  // stable enough for local-only identity
  const rand =
    typeof crypto !== "undefined" && "randomUUID" in crypto
      ? crypto.randomUUID()
      : `v_${Math.random().toString(36).slice(2)}_${Date.now().toString(36)}`;
  return rand;
};

export function useViewer() {
  const [name, setName] = useState<string>(() => {
    if (!canUseStorage()) return "Guest";
    return window.localStorage.getItem(NAME_KEY) || "Guest";
  });

  const [id] = useState<string>(() => {
    if (!canUseStorage()) return "guest";
    const existing = window.localStorage.getItem(ID_KEY);
    if (existing) return existing;
    const created = makeId();
    window.localStorage.setItem(ID_KEY, created);
    return created;
  });

  useEffect(() => {
    if (!canUseStorage()) return;
    window.localStorage.setItem(NAME_KEY, name);
  }, [name]);

  const displayName = useMemo(() => name.trim() || "Guest", [name]);

  return { name: displayName, setName, id };
}
