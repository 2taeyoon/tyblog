import React, { lazy } from "react";
import ReactDOM from "react-dom/client";
import RouteApp from "./pages/RouteApp";
import reportWebVitals from "./reportWebVitals";

const Home = lazy(() => import("./pages/home/Home"));
const CodePortfolio = lazy(() => import("./pages/portfolio/CodePortfolio"));
const CodePrortfolioContent = lazy(() => import("./pages/portfolio/CodePrortfolioContent"));
const DesignPortfolio = lazy(() => import("./pages/portfolio/DesignPortfolio"));
const DesignPortfolioContent = lazy(() => import("./pages/portfolio/DesignPortfolioContent"));
const CodeStudy = lazy(() => import("./pages/study/CodeStudy"));
const CodeStudyContent = lazy(() => import("./pages/study/CodeStudyContent"));
const DesignStudy = lazy(() => import("./pages/study/DesignStudy"));
const DesignStudyContent = lazy(() => import("./pages/study/DesignStudyContent"));
const EtcStudy = lazy(() => import("./pages/study/EtcStudy"));
const EtcStudyContent = lazy(() => import("./pages/study/EtcStudyContent"));
const NotFound = lazy(() => import("./pages/NotFound"));

//import { BrowserRouter as Router } from "react-router-dom";

import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/react";
//import * as serviceWorkerRegistration from "./serviceWorkerRegistration";
import { HelmetProvider } from "react-helmet-async";
import { /*Route,*/ RouterProvider, createBrowserRouter } from "react-router-dom";


const router = createBrowserRouter([
	{
			path: '/',
			element: <RouteApp/>,
			errorElement: <NotFound/>,
			children:[
				{ index: true, path: "/", element: <Home /> },
				{ path: "/codeportfolio", element: <CodePortfolio /> },
				{ path: "/codeportfolio/:id", element: <CodePrortfolioContent /> },
				{ path: "/designportfolio", element: <DesignPortfolio /> },
				{ path: "/designportfolio/:id", element: <DesignPortfolioContent /> },
				{ path: "/codestudy", element: <CodeStudy /> },
				{ path: "/codestudy/:id", element: <CodeStudyContent /> },
				{ path: "/designstudy", element: <DesignStudy /> },
				{ path: "/designstudy/:id", element: <DesignStudyContent /> },
				{ path: "/etcstudy", element: <EtcStudy /> },
				{ path: "/etcstudy/:id", element: <EtcStudyContent /> }
			]
	}
]);

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
  // <Router>
  //   <HelmetProvider>
  //     <RouteApp />
  //   </HelmetProvider>
  //   <Analytics />
  //   <SpeedInsights />
  // </Router>

root.render(
	<React.StrictMode>
		<HelmetProvider>
			<RouterProvider router={router}/>
		</HelmetProvider>
    <Analytics />
    <SpeedInsights />
	</React.StrictMode>
);

//serviceWorkerRegistration.register();

reportWebVitals();
