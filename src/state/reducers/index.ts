import { Action } from "../actions";
import { Character } from "../../types";
import { ActionTypeI } from "../actions";
import { combineReducers } from "redux";
export type CharacterState = {
  characters: Character[];
};
const INITIAL_STATE = { characters: [] };
const HeroesReducer = (
  state: CharacterState = INITIAL_STATE,
  action: Action
): CharacterState => {
  switch (action.type) {
    case ActionTypeI.ADD_HERO: {
      return {
        ...state,
        characters: [...state.characters, action.payload],
      };
    }
    case ActionTypeI.DELETE_HERO:
      let heroesFiltered = state.characters.filter(
        (character) => character.id !== action.payload
      );
      return {
        ...state,
        characters: heroesFiltered,
      };

    case ActionTypeI.GET_HEROES:
      return { ...state };


    default:
      return { ...state };
  }
};
const reducers = combineReducers({
  hero: HeroesReducer,
});
export default reducers;
export type State = ReturnType<typeof reducers>;
