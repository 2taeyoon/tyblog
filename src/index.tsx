import React from "react";
import ReactDOM from "react-dom/client";
import RouteApp from "./pages/RouteApp";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter as Router } from "react-router-dom";
import "./styles/pretendard.css";
import "./styles/global.css";
import "./styles/style.scss";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <Router>
    <RouteApp />
  </Router>
);

reportWebVitals();
