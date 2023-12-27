import React, { Suspense/*, lazy*/ } from "react";
import { Outlet/*, Route, Routes*/ } from "react-router-dom";

import "../styles/css/pretendard.css";
import "../styles/css/global.css";
import "../styles/scss/style.scss";

import Aside from "../components/layout/Aside";

// const Home = lazy(() => import("./home/Home"));
// const CodePortfolio = lazy(() => import("./portfolio/CodePortfolio"));
// const CodePrortfolioContent = lazy(() => import("./portfolio/CodePrortfolioContent"));
// const DesignPortfolio = lazy(() => import("./portfolio/DesignPortfolio"));
// const DesignPortfolioContent = lazy(() => import("./portfolio/DesignPortfolioContent"));
// const CodeStudy = lazy(() => import("./study/CodeStudy"));
// const CodeStudyContent = lazy(() => import("./study/CodeStudyContent"));
// const DesignStudy = lazy(() => import("./study/DesignStudy"));
// const DesignStudyContent = lazy(() => import("./study/DesignStudyContent"));
// const EtcStudy = lazy(() => import("./study/EtcStudy"));
// const EtcStudyContent = lazy(() => import("./study/EtcStudyContent"));
// const NotFound = lazy(() => import("./NotFound"));

// const routes = [
//   { path: "/", element: <Home /> },
//   { path: "/codeportfolio", element: <CodePortfolio /> },
//   { path: "/codeportfolio/:url", element: <CodePrortfolioContent /> },
//   { path: "/designportfolio", element: <DesignPortfolio /> },
//   { path: "/designportfolio/:url", element: <DesignPortfolioContent /> },
//   { path: "/codestudy", element: <CodeStudy /> },
//   { path: "/codestudy/:url", element: <CodeStudyContent /> },
//   { path: "/designstudy", element: <DesignStudy /> },
//   { path: "/designstudy/:url", element: <DesignStudyContent /> },
//   { path: "/etcstudy", element: <EtcStudy /> },
//   { path: "/etcstudy/:url", element: <EtcStudyContent /> }
// ];

export default function RouteApp() {
  return (
    <div className="RouteApp">
      <Aside />
      <Suspense fallback={<div>Loading...</div> /* 로딩 이미지 */}>
				<Outlet/>
        {/* <Routes>
          {routes.map((route, index) => {
            return (
              <Route
                key={index}
                path={route.path}
                element={route.element}
              />
            );
          })}
          <Route
            path="*"
            element={<NotFound />}
          />
        </Routes> */}
      </Suspense>
    </div>
  );
}
