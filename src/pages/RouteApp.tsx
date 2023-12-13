import React, { Suspense, lazy } from "react";
import { Route, Routes } from "react-router-dom";

const Home = lazy(() => import("./home/Home"));
const Blog = lazy(() => import("./blog/Blog"));
const CodePortfolio = lazy(() => import("./portfolio/CodePortfolio"));
const DesignPortfolio = lazy(() => import("./portfolio/DesignPortfolio"));
const CodeStudy = lazy(() => import("./study/CodeStudy"));
const DesignStudy = lazy(() => import("./study/DesignStudy"));
const NotFound = lazy(() => import("./NotFound"));

const routes = [
  { path: "/", element: <Home /> },
  { path: "/blog", element: <Blog /> },
	{ path: "/codeportfolio", element: <CodePortfolio /> },
	{ path: "/designportfolio", element: <DesignPortfolio /> },
	{ path: "/codestudy", element: <CodeStudy /> },
	{ path: "/designstudy", element: <DesignStudy /> }
];

const RouteApp = () => {
  return (
    <div className="RouteApp">
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
					<Route path='*' element={ <NotFound/> }/>
        </Routes>
      </Suspense>
    </div>
  );
};

export default RouteApp;
