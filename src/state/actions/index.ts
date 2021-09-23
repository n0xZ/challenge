import { Character } from "../../types";
export enum ActionTypeI {
  ADD_HERO = "add_hero",
  DELETE_HERO = "delete_hero",
  GET_HEROES = "get_heroes",
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

export type Action = AddHeroActionI | DeleteHeroActionI | GetHeroesActionI;
