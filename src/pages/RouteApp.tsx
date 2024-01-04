import React, { Suspense, lazy } from "react";
import { Route, Routes } from "react-router-dom";

import "../styles/css/pretendard.css";
import "../styles/css/TTTtangsbudaejjigae.css";
import "../styles/css/global.css";
import "../styles/scss/style.scss";

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
  { path: "/codeportfolio", element: <PublishingPortfolio /> },
  { path: "/codeportfolio/:title", element: <PublishingPortfolioContent /> },
  { path: "/designportfolio", element: <DesignPortfolio /> },
  { path: "/designportfolio/:title", element: <DesignPortfolioContent /> },
  { path: "/codestudy", element: <PublishingStudy /> },
  { path: "/codestudy/:title", element: <PublishingStudyContent /> },
  { path: "/designstudy", element: <DesignStudy /> },
  { path: "/designstudy/:title", element: <DesignStudyContent /> },
  { path: "/etcstudy", element: <EtcStudy /> },
  { path: "/etcstudy/:title", element: <EtcStudyContent /> }
];

export default function RouteApp() {
  return (
    <div className="RouteApp">
      <Aside />
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
