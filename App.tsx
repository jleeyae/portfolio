import { useMemo, useState } from "react";
import { groups, properties } from "./data/portfolio";
import { Group, Property } from "./types";
import { PortfolioHeader } from "./components/PortfolioHeader";
import { ControlsBar, ControlsState, SortKey } from "./components/ControlsBar";
import { GroupSection } from "./components/GroupSection";

function getStateFromGroupTitle(groupTitle: string): "TX" | "CO" | "OTHER" {
  if (groupTitle.includes("TX")) return "TX";
  if (groupTitle.includes("CO")) return "CO";
  return "OTHER";
}

function matchesSearch(p: Property, q: string): boolean {
  if (!q.trim()) return true;
  const hay = `${p.addressLine} ${p.cityStateZip}`.toLowerCase();
  return hay.includes(q.trim().toLowerCase());
}

function monthlyMid(p: Property): number {
  return (p.income.monthlyLow + p.income.monthlyHigh) / 2;
}

export default function App() {
  const [controls, setControls] = useState<ControlsState>({
    search: "",
    stateFilter: "ALL",
    groupFilter: "ALL",
    rosesFilter: "ALL",
    jasonOnly: false,
    sort: "roses_desc",
  });

  const visibleGroups: Group[] = useMemo(() => {
    // Groups remain, filtering happens in per-group properties pass
    return groups;
  }, []);

  const filteredProperties: Property[] = useMemo(() => {
    return properties
      .filter((p) => matchesSearch(p, controls.search))
      .filter((p) => !controls.jasonOnly || p.isJason === true)
      .filter((p) => controls.rosesFilter === "ALL" || p.datingScene.roses === controls.rosesFilter)
      .filter((p) => controls.groupFilter === "ALL" || p.groupId === controls.groupFilter)
      .filter((p) => {
        if (controls.stateFilter === "ALL") return true;
        const g = groups.find((gg) => gg.id === p.groupId);
        if (!g) return true;
        return getStateFromGroupTitle(g.title) === controls.stateFilter;
      });
  }, [controls]);

  const grouped = useMemo(() => {
    const byGroup = new Map<string, Property[]>();
    for (const p of filteredProperties) {
      const arr = byGroup.get(p.groupId) ?? [];
      arr.push(p);
      byGroup.set(p.groupId, arr);
    }

    const sortKey: SortKey = controls.sort;

    for (const [, arr] of byGroup) {
      arr.sort((a, b) => {
        if (sortKey === "price_desc") return b.price - a.price;
        if (sortKey === "price_asc") return a.price - b.price;
        if (sortKey === "income_desc") return monthlyMid(b) - monthlyMid(a);
        if (sortKey === "income_asc") return monthlyMid(a) - monthlyMid(b);
        // default: inside group, Jason first then price
        if (a.isJason && !b.isJason) return -1;
        if (!a.isJason && b.isJason) return 1;
        return b.price - a.price;
      });
    }

    // Sort groups by roses (then by group title)
    const groupOrder = [...visibleGroups].sort((a, b) => {
      if (controls.sort === "roses_desc") return b.roses - a.roses;
      return b.roses - a.roses;
    });

    return { byGroup, groupOrder };
  }, [filteredProperties, controls.sort, visibleGroups]);

  return (
    <div className="container">
      <PortfolioHeader />

      <ControlsBar groups={groups} state={controls} onChange={setControls} />

      <div className="groupWrap">
        {grouped.groupOrder.map((g) => {
          const props = grouped.byGroup.get(g.id) ?? [];
          if (props.length === 0) return null;

          return (
            <GroupSection
              key={g.id}
              group={g}
              properties={props}
              defaultOpen={false}
            />
          );
        })}
      </div>
    </div>
  );
}
