import { useEffect, useMemo, useState } from "react";

type VoteStore = Record<string, Record<string, number>>;
// propertyId -> viewerId -> rating(1..5)

const KEY = "pp.votes";

export function useFamilyVoting(viewerId: string) {
  const [store, setStore] = useState<VoteStore>(() => {
    try {
      const raw = localStorage.getItem(KEY);
      return raw ? (JSON.parse(raw) as VoteStore) : {};
    } catch {
      return {};
    }
  });

  useEffect(() => {
    localStorage.setItem(KEY, JSON.stringify(store));
  }, [store]);

  const rate = (propertyId: string, rating: number) => {
    const r = Math.max(1, Math.min(5, rating));
    setStore((prev) => {
      const next = { ...prev };
      next[propertyId] = { ...(next[propertyId] || {}) };
      next[propertyId][viewerId] = r;
      return next;
    });
  };

  const clear = (propertyId: string) => {
    setStore((prev) => {
      const next = { ...prev };
      if (!next[propertyId]) return next;
      const inner = { ...next[propertyId] };
      delete inner[viewerId];
      next[propertyId] = inner;
      return next;
    });
  };

  const summary = (propertyId: string) => {
    const votes = store[propertyId] ? Object.values(store[propertyId]) : [];
    const count = votes.length;
    const avg = count ? votes.reduce((a, b) => a + b, 0) / count : 0;
    return { avg, count, mine: store[propertyId]?.[viewerId] ?? 0 };
  };

  return { rate, clear, summary };
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
    <div className="pp-stars" title={title}>
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
    </div>
  );
}
