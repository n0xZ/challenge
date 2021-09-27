import { Route, Switch } from "react-router-dom";

import Login from "./containers/login/Login";
import PrivateRoutes from "./routes/PrivateRoutes";
import Home from "./containers/home/Home";
import CharacterDetails from "./containers/characters/characterDetailsList";
import CharacterForm from "./containers/characters/CharacterForm";
import CharacterSearch from "./containers/characters/CharacterSearch";
import PublicRoutes from "./routes/PublicRoutes";

const App: React.FC = () => {
  return (
    <div className="bg-dark  text-white vh-100" >
      <Switch>
        <PublicRoutes exact path="/login" component={Login} />
        <PrivateRoutes  exact path="/" component={Home} />
        <PrivateRoutes
          path="/characters/details/:id"
          component={CharacterDetails}
        />
        <PrivateRoutes exact path="/search" component={CharacterForm} />
        <PrivateRoutes
          path="/search/results/:name"
          component={CharacterSearch}
        />
      </Switch>
    </div>
  );
};
export default App;
