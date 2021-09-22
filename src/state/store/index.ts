import { createStore } from "redux";
import { Character } from "../../types";
import  HeroesReducer  from '../reducers/HeroesReducer'

export const store = createStore(HeroesReducer);
