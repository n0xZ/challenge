import React from "react";
import { Route, Switch } from "react-router";
import { Redirect } from "react-router-dom";
import CharacterList from "./components/characters/CharacterList";
import Home from "./components/home/Home";
import Login from "./components/login/Login";
import CharacterProvider from "./context/CharacterContext";

const App = () => {
  const isLogged = localStorage.getItem("token") ? true : false;

  return (
    <CharacterProvider>
      <div className="text-white" style={{ height: "100vh" }}>
        <Switch>
          <Route path="/home" component={Home} />
          <Route path="/login" component={Login} />
          <Route path ="/character-list" component={CharacterList}/>
          {isLogged ? <Redirect to="/home" /> : <Redirect to="/login" />}
        </Switch>
      </div>
    </CharacterProvider>
  );
};
export default App;
