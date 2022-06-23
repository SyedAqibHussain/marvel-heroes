import {
	GET_HEROES_ERROR,
	GET_HEROES_REQUEST,
	GET_HEROES_SUCCESS,
} from "../constants";

import { getHeroesService } from "../../service/heroes";

// get heroes action
export const getHeroesAction = (params) => {
	return (dispatch) => {
		dispatch(getHeroesRequest());
		getHeroesService(params)
			.then((res) => {
				if (res.status === 400) {
					dispatch(getHeroesError(res));
				} else {
					dispatch(getHeroesSuccess(res));
				}
			})
			.catch((error) => {
				dispatch(getHeroesError(error));
			});
	};
};

export const getHeroesRequest = () => ({
	type: GET_HEROES_REQUEST,
});

export const getHeroesSuccess = (heroes) => ({
	type: GET_HEROES_SUCCESS,
	heroes,
});

export const getHeroesError = (error) => ({
	type: GET_HEROES_ERROR,
	error: error,
});
