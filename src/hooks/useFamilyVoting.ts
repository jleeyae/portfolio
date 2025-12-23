// src/hooks/useFamilyVoting.ts
import { useCallback, useEffect, useMemo, useState } from "react";

type VoteStore = Record<string, Record<string, number>>;
// propertyId -> viewerId -> rating(1..5)

const KEY = "pp.votes";

const clamp = (n: number, min: number, max: number) =>
  Math.max(min, Math.min(max, n));

const safeParse = (raw: string | null): VoteStore => {
  if (!raw) return {};
  try {
    const parsed = JSON.parse(raw) as unknown;
    if (!parsed || typeof parsed !== "object") return {};
    return parsed as VoteStore;
  } catch {
    return {};
  }
};

const canUseStorage = () =>
  typeof window !== "undefined" && typeof window.localStorage !== "undefined";

export function useFamilyVoting(viewerId: string) {
  const [store, setStore] = useState<VoteStore>(() => {
    if (!canUseStorage()) return {};
    return safeParse(window.localStorage.getItem(KEY));
  });

  // Persist
  useEffect(() => {
    if (!canUseStorage()) return;
    window.localStorage.setItem(KEY, JSON.stringify(store));
  }, [store]);

  // Keep multiple tabs in sync (optional but nice)
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
      // rating 0 => clear
      if (!viewerId) return;

      const r = Number.isFinite(rating) ? Math.round(rating) : 0;
      if (r <= 0) {
        setStore((prev) => {
          if (!prev[propertyId] || !prev[propertyId][viewerId]) return prev;
          const next = { ...prev };
          const inner = { ...next[propertyId] };
          delete inner[viewerId];
          next[propertyId] = inner;
          return next;
        });
        return;
      }

      const clamped = clamp(r, 1, 5);

      setStore((prev) => {
        const next = { ...prev };
        const inner = { ...(next[propertyId] || {}) };
        inner[viewerId] = clamped;
        next[propertyId] = inner;
        return next;
      });
    },
    [viewerId]
  );

  const clear = useCallback(
    (propertyId: string) => {
      if (!viewerId) return;
      rate(propertyId, 0);
    },
    [rate, viewerId]
  );

  const summary = useCallback(
    (propertyId: string) => {
      const map = store[propertyId] || {};
      const votes = Object.values(map).filter((v) => Number.isFinite(v) && v >= 1 && v <= 5);
      const count = votes.length;
      const avg = count ? votes.reduce((a, b) => a + b, 0) / count : 0;
      const mineRaw = map[viewerId];
      const mine =
        Number.isFinite(mineRaw) && mineRaw >= 1 && mineRaw <= 5 ? mineRaw : 0;

      return { avg, count, mine };
    },
    [store, viewerId]
  );

  // Optional: precompute summaries for faster list rendering
  const summaries = useMemo(() => {
    const out: Record<string, { avg: number; count: number; mine: number }> = {};
    for (const propertyId of Object.keys(store)) {
      out[propertyId] = summary(propertyId);
    }
    return out;
  }, [store, summary]);

  return { rate, clear, summary, summaries };
}

export function Stars({
  value,
  onChange,
  title,
}: {
  value: number; // 0..5
  onChange: (n: number) => void;
  title?: string;
}) {
  return (
    <div className="pp-stars" title={title} role="radiogroup" aria-label={title || "Rating"}>
      {[1, 2, 3, 4, 5].map((n) => (
        <button
          key={n}
          className={`pp-star ${value >= n ? "is-on" : ""}`}
          onClick={() => onChange(n)}
          type="button"
          aria-label={`Rate ${n} of 5`}
          aria-checked={value === n}
          role="radio"
        >
          ★
        </button>
      ))}

      {/* Optional clear button (tiny but useful). Remove if you don’t want it. */}
      <button
        className="pp-star pp-star-clear"
        onClick={() => onChange(0)}
        type="button"
        aria-label="Clear rating"
        title="Clear"
      >
        ✕
      </button>
    </div>
  );
}
