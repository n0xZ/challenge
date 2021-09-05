import axios from "axios";

import { User } from "../types";

export const getSesionToken = (user: User):boolean => {
  let isLogged = false;
  const response = axios
    .post("http://challenge-react.alkemy.org/", {
      email: user.email,
      password: user.pass,
    })
    .then((res) => {
      window.localStorage.setItem("token", JSON.stringify(res.data));
      isLogged=true;
    })
    .catch((error) => {
      console.log(error);
    });
    return isLogged;
};
