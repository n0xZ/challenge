import { Route, Switch } from "react-router";

import Login from "./components/login/Login";
import PrivateRoutes from "./routes/PrivateRoutes";
import Home from "./components/home/Home";
import CharactersList from "./components/characters/List/CharactersList";
import CharacterDetails from "./components/characters/Details/characterDetails";
import CharacterForm from "./components/characters/Form/CharacterForm";
import CharacterSearch from "./components/characters/Search/CharacterSearch";


const App:React.FC= () => {
  return (
    <div className="bg-black text-white" style={{ height: "100vh" }}>
      <Switch>
        <Route exact path="login" component={Login} />
        <PrivateRoutes exact path="/" component={Home} />
        <PrivateRoutes path="/characterList" component={CharactersList} />
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
