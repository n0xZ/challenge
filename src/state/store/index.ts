import { createStore } from "redux";

import  HeroesReducer  from '../reducers/HeroesReducer'

export const store = createStore(HeroesReducer);
