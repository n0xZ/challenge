import { Character } from "../../types";
export enum ActionType {
  ADD_HERO = "ADD_HERO",
  DELETE_HERO = "DELETE_HEROE",
  GET_HEROES = "GET_HEROES",
}
export interface AddHeroAction {
  type: ActionType.ADD_HERO;

}
interface DeleteHeroAction {
  type: ActionType.DELETE_HERO;
}
interface GetHeroesAction {
  type: ActionType.GET_HEROES;
  payload: Character[];
}
export const addHero = () =>{
  
}
export type Action = AddHeroAction | DeleteHeroAction | GetHeroesAction;
