import { ActionTypeI } from "../actions";
import { Action } from "../actions";

interface SesionStateI {
  isAuth: boolean;
}
const INITIAL_STATE = { isAuth: localStorage.getItem("token") ? true : false };
export const SesionReducer = (
  state = INITIAL_STATE,
  action: Action
): SesionStateI => {
  switch (action.type) {
    case ActionTypeI.LOGIN_USER:
      return {
        ...state,
        isAuth: action.payload,
      };

    default:
      return { ...state };
  }
};
