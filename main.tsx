import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

// 🔑 THIS IS THE FIX
// Load your actual luxury design system
import "./App.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

