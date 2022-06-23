import { combineReducers } from "redux";
import { heroesListReducer } from "./heroes.js";

const reducers = combineReducers({
	heroesList: heroesListReducer,
});

export default reducers;
