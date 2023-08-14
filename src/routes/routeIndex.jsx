import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import DashboardPage from "../pages/dashboardPage";
import LoginPage from "../pages/loginPage";
import { useState } from "react";

function RoutesIndex(params) {
  const routeObject = [
    { name: "LoginPage", path: "/", component: <LoginPage />,params:[]},
    { name: "LoginPage", path: "/login", component: <LoginPage />,params:[]},
    { name: "DashboardPage", path: "/dashboard", component: <DashboardPage />},
   
  ];

  /**
   * `Route functionality` for route component.
   * Function for maping the route in routes.
   * Add new route object in `routesObject` variable.
   * Add the params in params array sequencially.
   * For `no params` assign `empty array` to `params` or juts ignore adding `params` key in object. 
   */
  function getRoutes() {
    return routeObject.map((item) => {
      if(!item.params?.length>0) {
        return <Route path={item.path} element={item.component} />;
      }
     
    });
  }
  return (
    <Router>
      <Routes>{getRoutes()}</Routes>
    </Router>
  );
}

export default RoutesIndex;
