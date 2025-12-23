import React from "react";
import ReactDOM from "react-dom/client";

// ✅ Global luxury design system (loaded ONCE)
import "./App.css";

// ✅ Root app component
import PropertyPortfolio from "./PropertyPortfolio.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <PropertyPortfolio />
  </React.StrictMode>
);
