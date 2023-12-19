import React from "react";
import ReactDOM from "react-dom/client";
import RouteApp from "./pages/RouteApp";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter as Router } from "react-router-dom";
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from "@vercel/speed-insights/react"
import * as serviceWorkerRegistration from './serviceWorkerRegistration';
import { HelmetProvider } from 'react-helmet-async';


const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <Router>
    <HelmetProvider>
			<RouteApp />
		</HelmetProvider>
		<Analytics/>
		<SpeedInsights/>
  </Router>
);

serviceWorkerRegistration.register();

reportWebVitals();
