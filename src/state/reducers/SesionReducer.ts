import { ActionTypeI } from "../actions";
import { Action } from "../actions";
interface SesionStateI {
  token: string | undefined;
}
const INITIAL_STATE = { token: undefined };
export const SesionReducer = (
  state = INITIAL_STATE,
  action: Action
): SesionStateI => {
  switch (action.type) {
    case ActionTypeI.LOGIN_USER:
      return {
        ...state,
      };

    default:
      return { ...state };
  }
};
