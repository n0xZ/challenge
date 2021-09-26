import { Character } from "../../types";
export enum ActionTypeI {
  ADD_HERO = "add_hero",
  DELETE_HERO = "delete_hero",
  GET_HEROES = "get_heroes",
  LOGIN_USER = "login_user",
}
export interface AddHeroActionI {
  type: ActionTypeI.ADD_HERO;
  payload: Character;
}
interface DeleteHeroActionI {
  type: ActionTypeI.DELETE_HERO;
  payload: string;
}
interface GetHeroesActionI {
  type: ActionTypeI.GET_HEROES;
  payload: Character[];
}

interface LoginUserActionI {
  type: ActionTypeI.LOGIN_USER;
  payload: boolean;
}

export type Action =
  | AddHeroActionI
  | DeleteHeroActionI
  | GetHeroesActionI
  | LoginUserActionI;
