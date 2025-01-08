import React, { Suspense, lazy, useState } from "react";
import { Route, Routes, useLocation } from "react-router-dom";

import "../styles/css/pretendard.css";
import "../styles/css/TTTtangsbudaejjigae.css";
import "../styles/css/global.css";
import "../styles/scss/style.scss";

import "../styles/css/markdown.scss";
import "../styles/css/markdownAtom.css";

import Aside from "../components/layout/Aside";
import Header from "../components/layout/Header";

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

const Posting = lazy(() => import("./Posting"));

const routes = [
  { path: "/", element: <Home /> },
  { path: "/dp", element: <DesignPortfolio /> },
  { path: "/dp/:title", element: <DesignPortfolioContent /> },
	{ path: "/pp", element: <PublishingPortfolio /> },
  { path: "/pp/:title", element: <PublishingPortfolioContent /> },
	{ path: "/ds", element: <DesignStudy /> },
  { path: "/ds/:title", element: <DesignStudyContent /> },
  { path: "/ps", element: <PublishingStudy /> },
  { path: "/ps/:title", element: <PublishingStudyContent /> },
  { path: "/es", element: <EtcStudy /> },
  { path: "/es/:title", element: <EtcStudyContent /> },
  { path: "/post", element: <Posting /> }
];

export default function RouteApp() {
  const [isActive, setIsActive] = useState<boolean>(false);
	const location = useLocation(); // 현재 경로 가져오기

  const trueActive = () => {
    setIsActive(true);
  };
	const falseActive = () => {
    setIsActive(false);
  };

	// 특정 경로에서 Aside와 Header 숨기기
	const hideAsideAndHeader = ["/post"].includes(location.pathname);

  return (
    <div className="RouteApp">
			<div className={`${ isActive ? 'side_active' : '' }`}>
				{!hideAsideAndHeader && <Header trueActive={trueActive}/>}
				{!hideAsideAndHeader && <Aside falseActive={falseActive}/>}
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
				<div className="bg_active" onClick={falseActive}></div>
			</div>
    </div>
  );
}