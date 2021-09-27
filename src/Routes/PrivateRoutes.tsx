import { useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import { Route } from "react-router-dom";
import { RouteProps } from "react-router-dom";


import { State } from "../state/reducers";
interface RoutesProps extends RouteProps{}

const PrivateRoutes: React.FC<RoutesProps> = ({...rest}) => {

  let sesionToken = useSelector((state: State) => state.sesion.isAuth);

  if (sesionToken) {
    return <Route {...rest} />;
  } else {
    return <Redirect to={{ pathname: "/login" }} />;
  }
};

export default PrivateRoutes;
