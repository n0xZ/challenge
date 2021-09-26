import React from "react";
import { Redirect } from "react-router-dom";
import { Route } from "react-router-dom";
import { RouteProps } from "react-router-dom";
import { isUserLogged } from "../auth/isUserLogged";
interface RoutesProps extends RouteProps {}

const PrivateRoutes: React.FC<RoutesProps> = ({ ...rest }) => {
  if (isUserLogged) {
    console.log("Ruta funcionando");
    return <Route {...rest} />;
  } else {
    console.log("Ruta redireccionada");
    return <Redirect to="/login" />;
  }
};

export default PrivateRoutes;
