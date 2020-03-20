import React from "react";

import { Route } from "react-router-dom";

import Home from "../../Pages/Home";
import Countries from "../../Pages/Countries";

const public_path = [
  {
    exact: true,
    path: "/",
    component: Home,
  },
  {
    exact: true,
    path: "/paises",
    component: Countries,
  },
];

const PublicRoutes = () => {
  return public_path.map((path, index) => <Route key={index + ""} {...path} />);
};

export default PublicRoutes;
