// src/hooks/useFamilyVoting.tsx
import { useCallback, useEffect, useState } from "react";

type VoteStore = Record<string, Record<string, number>>;
// propertyId -> viewerId -> rating(1..5)

const KEY = "pp.votes";

const clamp = (n: number, min: number, max: number) =>
  Math.max(min, Math.min(max, n));

const canUseStorage = () => {
  try {
    return typeof window !== "undefined" && !!window.localStorage;
  } catch {
    return false;
  }
};

const safeParse = (raw: string | null): VoteStore => {
  if (!raw) return {};
  try {
    const parsed = JSON.parse(raw);
    if (!parsed || typeof parsed !== "object") return {};
    return parsed as VoteStore;
  } catch {
    return {};
  }
};

export function useFamilyVoting(viewerId: string) {
  const [store, setStore] = useState<VoteStore>(() => {
    if (!canUseStorage()) return {};
    return safeParse(window.localStorage.getItem(KEY));
  });

  // Persist to localStorage
  useEffect(() => {
    if (!canUseStorage()) return;
    window.localStorage.setItem(KEY, JSON.stringify(store));
  }, [store]);

  // Sync across tabs/windows
  useEffect(() => {
    if (!canUseStorage()) return;

    const onStorage = (e: StorageEvent) => {
      if (e.key !== KEY) return;
      setStore(safeParse(e.newValue));
    };

    window.addEventListener("storage", onStorage);
    return () => window.removeEventListener("storage", onStorage);
  }, []);

  const rate = useCallback(
    (propertyId: string, rating: number) => {
      if (!viewerId || !propertyId) return;

      const r = Number.isFinite(rating) ? Math.round(rating) : 0;

      // rating 0 = clear
      if (r <= 0) {
        setStore((prev) => {
          const bucket = prev[propertyId];
          if (!bucket || bucket[viewerId] == null) return prev;

          const next: VoteStore = { ...prev };
          const inner = { ...bucket };
          delete inner[viewerId];

          // remove empty bucket to prevent ghost keys
          if (Object.keys(inner).length === 0) {
            delete next[propertyId];
          } else {
            next[propertyId] = inner;
          }

          return next;
        });
        return;
      }

      const clamped = clamp(r, 1, 5);

      setStore((prev) => {
        const next: VoteStore = { ...prev };
        next[propertyId] = { ...(next[propertyId] || {}), [viewerId]: clamped };
        return next;
      });
    },
    [viewerId]
  );

  const clear = useCallback((propertyId: string) => rate(propertyId, 0), [rate]);

  const summary = useCallback(
    (propertyId: string) => {
      const bucket = store[propertyId] || {};
      const votes = Object.values(bucket).filter(
        (v) => Number.isFinite(v) && v >= 1 && v <= 5
      );

      const count = votes.length;
      const avg = count ? votes.reduce((a, b) => a + b, 0) / count : 0;

      const mineRaw = bucket[viewerId];
      const mine =
        Number.isFinite(mineRaw) && mineRaw >= 1 && mineRaw <= 5 ? mineRaw : 0;

      return { avg, count, mine };
    },
    [store, viewerId]
  );

  return { rate, clear, summary };
}

/**
 * Stars UI
 * - Visual fill uses value >= n (a "fill bar" of stars)
 * - Clear button sets 0
 */
export function Stars({
  value,
  onChange,
  title,
  showClear = true,
}: {
  value: number; // 0..5
  onChange: (n: number) => void;
  title?: string;
  showClear?: boolean;
}) {
  return (
    <div className="pp-stars" title={title} aria-label={title || "Rating"}>
      {[1, 2, 3, 4, 5].map((n) => (
        <button
          key={n}
          className={`pp-star ${value >= n ? "is-on" : ""}`}
          onClick={() => onChange(n)}
          type="button"
          aria-label={`Rate ${n} of 5`}
        >
          ★
        </button>
      ))}

      {showClear ? (
        <button
          className="pp-star pp-star-clear"
          onClick={() => onChange(0)}
          type="button"
          aria-label="Clear rating"
          title="Clear"
        >
          ✕
        </button>
      ) : null}
    </div>
  );
}
