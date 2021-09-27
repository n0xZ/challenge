import { Dispatch } from "redux";
import { Character } from "../../types";
import { Action, ActionTypeI } from "../actions";

export const addHero = (hero: Character) => {
  return (dispatch: Dispatch<Action>) => {
    dispatch({ type: ActionTypeI.ADD_HERO, payload: hero });
  };
};
export const deleteHero = (heroID: string) => {
  return (dispatch: Dispatch<Action>) => {
    dispatch({
      type: ActionTypeI.DELETE_HERO,
      payload: heroID,
    });
  };
};

export const setLogin =  (setAuth: boolean) => {
  
  return (dispatch: Dispatch<Action>) => {
    dispatch({
      type: ActionTypeI.LOGIN_USER,
      payload: setAuth,
    });
  };
};
