import React, { Suspense, lazy, useState } from "react";
import { Route, Routes } from "react-router-dom";

import "../styles/css/pretendard.css";
import "../styles/css/TTTtangsbudaejjigae.css";
import "../styles/css/Maplestory.css";
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
  // const location = useLocation();
  // const [showAsideHeader, setShowAsideHeader] = useState(true);

	// useEffect(() => {
	// 	// 현재 경로가 '/designportfolio/:title' 또는 '/publishingportfolio/:title'와 일치하는지 확인
	// 	const isPortfolioContent = location.pathname.startsWith("/designportfolio/") || location.pathname.startsWith("/publishingportfolio/");
		
	// 	// 기존의 pathMatch 로직에 isPortfolioContent 조건을 추가하여 최종적으로 헤더와 사이드바를 보여줄지 결정
	// 	const pathMatch = routes.some(route => 
	// 		location.pathname === route.path || location.pathname.startsWith(route.path + "/")
	// 	) && !isPortfolioContent;

	// 	setShowAsideHeader(pathMatch);
	// }, [location]);

  const [isActive, setIsActive] = useState<boolean>(false);

  const trueActive = () => {
    setIsActive(true);
  };
	const falseActive = () => {
    setIsActive(false);
  };

  return (
    <div className="RouteApp">
			<div className={`${ isActive ? 'side_active' : '' }`}>
				<Header trueActive={trueActive}/>
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
				<div className="bg_active" onClick={falseActive}></div>
			</div>
    </div>
  );
}
