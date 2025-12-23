import { useState } from "react";
import { portfolio } from "./data/Portfolio";

import GroupSection from "./components/GroupSection";
import MapView from "./pages/MapView";

import { useFamilyNotes } from "./hooks/useFamilyNotes";
import { useConversationMode } from "./hooks/useConversationMode";

import "./App.css";

export default function App() {
  // View state
  const [mapOnly, setMapOnly] = useState(false);

  // Toggles
  const { enabled: notesOn, toggle: toggleNotes } = useFamilyNotes();
  const { enabled: convoOn, toggle: toggleConvo } = useConversationMode();

  return (
    <main className="app">
      {/* =====================
          TOP CONTROLS
         ===================== */}
      <div className="controls">
        <button onClick={() => setMapOnly(!mapOnly)}>
          {mapOnly ? "Back to List" : "Map View"}
        </button>

        <button
          onClick={() => document.body.classList.toggle("dark")}
        >
          Toggle Dark Mode
        </button>

        <button onClick={toggleNotes}>
          {notesOn ? "Hide Family Notes" : "Show Family Notes"}
        </button>

        <button onClick={toggleConvo}>
          {convoOn ? "Exit Conversation Mode" : "Conversation Mode"}
        </button>

        <button onClick={() => window.print()}>
          Download PDY
        </button>
      </div>

      {/* =====================
          MAIN CONTENT
         ===================== */}
      {mapOnly ? (
        <MapView />
      ) : (
        portfolio.groups.map((group) => (
          <GroupSection key={group.id} group={group} />
        ))
      )}
    </main>
  );
}
