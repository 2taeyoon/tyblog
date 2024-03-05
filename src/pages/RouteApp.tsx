import React, { Suspense, lazy, useEffect, useState } from "react";
import { Route, Routes, useLocation } from "react-router-dom";

import "../styles/css/pretendard.css";
import "../styles/css/TTTtangsbudaejjigae.css";
import "../styles/css/MaplestoryOTFBold.css";
import "../styles/css/global.css";
import "../styles/scss/style.scss";

import "../styles/css/markdown.scss";
import "../styles/css/markdownAtom.css";

import Aside from "../components/layout/Aside";

const Home = lazy(() => import("./home/Home"));
const PublishingPortfolio = lazy(() => import("./portfolio/PublishingPortfolio"));
const PublishingPortfolioContent = lazy(() => import("./portfolio/PublishingPortfolioContent"));
const DesignPortfolio = lazy(() => import("./portfolio/DesignPortfolio"));
const DesignPortfolioContent = lazy(() => import("./portfolio/DesignPortfolioContent"));
const DesignStudy = lazy(() => import("./study/DesignStudy"));
const DesignStudyContent = lazy(() => import("./study/DesignStudyContent"));
const PublishingStudy = lazy(() => import("./study/PublishingStudy"));
const PublishingStudyContent = lazy(() => import("./study/PublishingStudyContent"));
const EtcStudy = lazy(() => import("./study/EtcStudy"));
const EtcStudyContent = lazy(() => import("./study/EtcStudyContent"));
const NotFound = lazy(() => import("./NotFound"));

const routes = [
  { path: "/", element: <Home /> },
  { path: "/designportfolio", element: <DesignPortfolio /> },
  { path: "/designportfolio/:title", element: <DesignPortfolioContent /> },
	{ path: "/publishingportfolio", element: <PublishingPortfolio /> },
  { path: "/publishingportfolio/:title", element: <PublishingPortfolioContent /> },
	{ path: "/designstudy", element: <DesignStudy /> },
  { path: "/designstudy/:title", element: <DesignStudyContent /> },
  { path: "/publishingstudy", element: <PublishingStudy /> },
  { path: "/publishingstudy/:title", element: <PublishingStudyContent /> },
  { path: "/etcstudy", element: <EtcStudy /> },
  { path: "/etcstudy/:title", element: <EtcStudyContent /> }
];

export default function RouteApp() {
  const location = useLocation();
  const [showAside, setShowAside] = useState(true);

	useEffect(() => {
    // 현재 경로가 /designportfolio/:title 또는 /publishingportfolio/:title 인지 확인
    const hideAsideForPaths = ['/designportfolio/', '/publishingportfolio/'];
    const shouldHideAside = hideAsideForPaths.some(path => location.pathname.includes(path));
    setShowAside(!shouldHideAside);
  }, [location]);

  return (
    <div className="RouteApp">
      {showAside && <Aside />}
      <Suspense fallback={<div>Loading...</div> /* 로딩 이미지 */}>
        <Routes>
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
        </Routes>
      </Suspense>
    </div>
  );
}
