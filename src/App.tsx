import { Route, Switch } from "react-router-dom";

import Login from "./components/login/Login";
import PrivateRoutes from "./routes/PrivateRoutes";
import Home from "./components/home/Home";
import CharacterDetails from "./components/characters/characterDetails";
import CharacterForm from "./components/characters/CharacterForm";
import CharacterSearch from "./components/characters/CharacterSearch";

const App: React.FC = () => {
  return (
    <div className="bg-dark  text-white" style={{ height: "100vh" }}>
      <Switch>
        <Route exact path="/login" component={Login} />
        <PrivateRoutes exact path="/" component={Home} />
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
