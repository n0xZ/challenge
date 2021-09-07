import React from "react";
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import CharacterProvider from "./context/CharacterContext";

ReactDOM.render(
  <BrowserRouter>
    <React.StrictMode>
      <CharacterProvider>
        <App />
      </CharacterProvider>
    </React.StrictMode>
  </BrowserRouter>,

  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
