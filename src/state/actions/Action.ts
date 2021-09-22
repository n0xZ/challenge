import { Character } from "../../types";
export enum ActionType {
  ADD_HERO = "ADD_HERO",
  DELETE_HERO = "DELETE_HEROE",
  GET_HEROES = "GET_HEROES",
}
export interface AddHeroAction {
  type: ActionType.ADD_HERO;
  payload: void;
}
interface DeleteHeroAction {
  type: ActionType.DELETE_HERO;
  payload: Character[];
}
interface GetHeroesAction {
  type: ActionType.GET_HEROES;
  payload: Character[];
}

export type Action = AddHeroAction | DeleteHeroAction | GetHeroesAction;
