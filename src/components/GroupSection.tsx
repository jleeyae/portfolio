import { useMemo, useState } from "react";
import { Group, Property } from "../types";
import { formatCurrency } from "../utils/format";
import { Roses } from "./Roses";
import { PropertyCard } from "./PropertyCard";

function minMax(nums: number[]) {
  const filtered = nums.filter((n) => Number.isFinite(n));
  return { min: Math.min(...filtered), max: Math.max(...filtered) };
}

export function GroupSection({
  group,
  properties,
  defaultOpen = false,
}: {
  group: Group;
  properties: Property[];
  defaultOpen?: boolean;
}) {
  const [open, setOpen] = useState(defaultOpen);

  const summaries = useMemo(() => {
    const prices = properties.map((p) => p.price);
    const mLow = properties.map((p) => p.income.monthlyLow);
    const mHigh = properties.map((p) => p.income.monthlyHigh);

    const priceMM = minMax(prices);
    const mLowMM = minMax(mLow);
    const mHighMM = minMax(mHigh);

    return {
      propertyCount: properties.length,
      priceRange: `${formatCurrency(priceMM.min)}–${formatCurrency(priceMM.max)}`,
      monthlyRange: `${formatCurrency(mLowMM.min)}–${formatCurrency(mHighMM.max)}`,
    };
  }, [properties]);

  return (
    <div>
      <div className="groupHeader" onClick={() => setOpen((v) => !v)}>
        <div>
          <div style={{ display: "flex", alignItems: "center", gap: 12, flexWrap: "wrap" }}>
            <h2 className="title" style={{ margin: 0 }}>{group.title}</h2>
            <Roses rating={group.roses} />
          </div>
          <div className="kicker">{group.regionLabel}</div>

          <div className="pillRow">
            <span className="pill">{summaries.propertyCount} Properties</span>
            <span className="pill">Price range: {summaries.priceRange}</span>
            <span className="pill">Monthly range: {summaries.monthlyRange}</span>
          </div>
        </div>

        <div className="right">
          <div style={{ fontSize: 14, opacity: 0.9 }}>{open ? "Collapse" : "Expand"}</div>
          <div style={{ fontSize: 22, marginTop: 4 }}>{open ? "▴" : "▾"}</div>
        </div>
      </div>

      {open ? (
        <div className="groupBody">
          <div className="panel pink">
            <div className="label">Dating Scene</div>
            <div className="value">{group.datingSummary}</div>
          </div>

          <div className="panel blue" style={{ marginTop: 12 }}>
            <div className="label">Best For</div>
            <div className="value">{group.bestFor}</div>
          </div>

          <div className="propertyList">
            {properties.map((p) => (
              <PropertyCard key={p.id} p={p} />
            ))}
          </div>
        </div>
      ) : null}
    </div>
  );
}
