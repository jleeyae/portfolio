import { Group, RosesRating } from "../types";

export type SortKey =
  | "price_desc"
  | "price_asc"
  | "income_desc"
  | "income_asc"
  | "roses_desc";

export type ControlsState = {
  search: string;
  stateFilter: "ALL" | "TX" | "CO";
  groupFilter: "ALL" | string;
  rosesFilter: "ALL" | RosesRating;
  jasonOnly: boolean;
  sort: SortKey;
};

export function ControlsBar({
  groups,
  state,
  onChange,
}: {
  groups: Group[];
  state: ControlsState;
  onChange: (next: ControlsState) => void;
}) {
  return (
    <div className="controls" style={{ marginTop: 16 }}>
      <input
        className="input"
        value={state.search}
        placeholder="Search address, city, or zip…"
        onChange={(e) => onChange({ ...state, search: e.target.value })}
      />

      <select
        className="select"
        value={state.stateFilter}
        onChange={(e) => onChange({ ...state, stateFilter: e.target.value as any })}
      >
        <option value="ALL">All States</option>
        <option value="TX">Texas</option>
        <option value="CO">Colorado</option>
      </select>

      <select
        className="select"
        value={state.groupFilter}
        onChange={(e) => onChange({ ...state, groupFilter: e.target.value })}
      >
        <option value="ALL">All Groups</option>
        {groups.map((g) => (
          <option key={g.id} value={g.id}>
            {g.title}
          </option>
        ))}
      </select>

      <select
        className="select"
        value={state.rosesFilter}
        onChange={(e) => onChange({ ...state, rosesFilter: e.target.value === "ALL" ? "ALL" : (Number(e.target.value) as any) })}
      >
        <option value="ALL">All Ratings</option>
        <option value="4">🌹🌹🌹🌹</option>
        <option value="3">🌹🌹🌹</option>
        <option value="2">🌹🌹</option>
        <option value="1">🌹</option>
      </select>

      <div className="toggle">
        <span>Jason only</span>
        <input
          type="checkbox"
          checked={state.jasonOnly}
          onChange={(e) => onChange({ ...state, jasonOnly: e.target.checked })}
        />
      </div>

      <select
        className="select"
        value={state.sort}
        onChange={(e) => onChange({ ...state, sort: e.target.value as any })}
      >
        <option value="roses_desc">Sort: Roses (high)</option>
        <option value="price_desc">Sort: Price (high)</option>
        <option value="price_asc">Sort: Price (low)</option>
        <option value="income_desc">Sort: Monthly income (high)</option>
        <option value="income_asc">Sort: Monthly income (low)</option>
      </select>
    </div>
  );
}
