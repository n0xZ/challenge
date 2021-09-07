import React from "react";
import { Redirect } from "react-router";
import { Route } from "react-router";

import { isUserLogged } from "../auth/isUserLogged";
import { RouteProps } from "react-router-dom";
interface RoutesProps extends RouteProps {}

const PrivateRoutes: React.FC<RoutesProps> = ({ ...rest }) => {
  if (!isUserLogged) {
    return <Redirect to="/login" />;
  } else {
    return <Route {...rest} />;
  }
};

export default PrivateRoutes;
