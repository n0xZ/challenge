import { Action } from "../actions/Action";
import { Character } from "../../types";
import { ActionType } from "../actions/Action";
type CharacterState = {
  characters: Character[];
};
const INITIAL_STATE: CharacterState = { characters: [] };
const HeroesReducer = (
  state: CharacterState = INITIAL_STATE,
  action: Action
) => {
  switch (action.type) {
    case ActionType.ADD_HERO: {
      return state;

      break;
    }
    case ActionType.DELETE_HERO:
      return state;
      break;
    case ActionType.GET_HEROES:
      return state;
      break;
    default:
      return state;
  }
};
export default HeroesReducer;
