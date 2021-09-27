import React, { useEffect, useState } from "react";
import { Redirect } from "react-router-dom";
import { Route } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { RouteProps } from "react-router-dom";
import { useSelector } from "react-redux";
import { State } from "../state/reducers";
interface RoutesProps extends RouteProps {}
const PublicRoutes: React.FC<RoutesProps> = ({ ...rest }) => {
  let sesionToken = useSelector((state: State) => state.sesion.isAuth);
  const location = useLocation();
  if (sesionToken) {
    return <Redirect to={{ pathname: "/" }} from={location.pathname} />;
  } else {
    return <Route {...rest} />;
  }
};

export default PublicRoutes;
