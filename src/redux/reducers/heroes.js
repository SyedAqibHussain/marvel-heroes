import {
	GET_HEROES_REQUEST,
	GET_HEROES_ERROR,
	GET_HEROES_SUCCESS,
} from "../constants";

const initialState = {
	processing: false,
};

export const heroesListReducer = (state = initialState, action) => {
	switch (action.type) {
		case GET_HEROES_REQUEST:
			return {
				processing: true,
			};
		case GET_HEROES_SUCCESS:
			return {
				processing: false,
				heroes: action.heroes,
			};
		case GET_HEROES_ERROR:
			return {
				processing: false,
				heroes: null,
				error: action.error,
			};
		default:
			return state;
	}
};
