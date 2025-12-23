export function formatCurrency(n: number): string {
  return n.toLocaleString("en-US", { style: "currency", currency: "USD", maximumFractionDigits: 0 });
}

export function formatCompactCurrency(n: number): string {
  // For small ranges we keep full currency, for bigger we compact
  if (n >= 1_000_000) {
    return (n / 1_000_000).toFixed(n % 1_000_000 === 0 ? 0 : 1) + "M";
  }
  if (n >= 1_000) {
    return (n / 1_000).toFixed(n % 1_000 === 0 ? 0 : 1) + "K";
  }
  return String(n);
}

export function formatRange(low: number, high: number, currency = true): string {
  if (currency) return `${formatCurrency(low)}–${formatCurrency(high)}`;
  return `${low}–${high}`;
}

export function clampRoses(n: number): 1 | 2 | 3 | 4 {
  if (n <= 1) return 1;
  if (n === 2) return 2;
  if (n === 3) return 3;
  return 4;
}
