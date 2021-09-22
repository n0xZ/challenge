import { Action } from "../actions/Action";
import { Character } from "../../types";
import { ActionType } from "../actions/Action";
import { configureStore } from "@reduxjs/toolkit";
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
      return {
        state,
      };
    }
    case ActionType.DELETE_HERO:
      return {
        ...state,
        action,
      };

    case ActionType.GET_HEROES:
      return state;

    default:
      return state;
  }
};
export default HeroesReducer;
