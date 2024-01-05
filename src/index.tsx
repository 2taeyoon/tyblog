import React from "react";
import ReactDOM from "react-dom/client";
import RouteApp from "./pages/RouteApp";
import reportWebVitals from "./reportWebVitals";

import { Analytics } from "@vercel/analytics/react"
import { SpeedInsights } from "@vercel/speed-insights/react";
import * as serviceWorkerRegistration from "./serviceWorkerRegistration";
import { HelmetProvider } from "react-helmet-async";
import { BrowserRouter as Router } from "react-router-dom";

if ('serviceWorker' in navigator) {
	window.addEventListener('load', () => {
		navigator.serviceWorker.register('/service-worker.ts').then(registration => {
			console.log('SW registered: ', registration);
		}).catch(registrationError => {
			console.log('SW registration failed: ', registrationError);
		});
	});
}

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
	<Router>
    <HelmetProvider>
      <RouteApp />
    </HelmetProvider>
    <Analytics />
    <SpeedInsights />
  </Router>
);

serviceWorkerRegistration.register();

reportWebVitals();
