import React from "react";
import { Redirect } from "react-router-dom";
import { Route } from "react-router-dom";

import { isUserLogged } from "../auth/isUserLogged";
import { RouteProps } from "react-router-dom";
interface RoutesProps extends RouteProps {}

const PrivateRoutes: React.FC<RoutesProps> = ({ ...rest }) => {
  if (isUserLogged) {
    return <Route {...rest} />;
  } else {
    return <Redirect to="/login" />;
  }
};

export default PrivateRoutes;
