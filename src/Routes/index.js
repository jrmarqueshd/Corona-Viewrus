import React from "react";

import { BrowserRouter as Router, Switch } from "react-router-dom";

import PublicRoutes from "./Public";
import AuthRoutes from "./Auth";

const Routes = () => {
  const token = "";

  return (
    <Router>
      <Switch>{token ? <AuthRoutes /> : <PublicRoutes />}</Switch>
    </Router>
  );
};

export default Routes;
