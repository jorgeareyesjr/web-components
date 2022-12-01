import {
	GET_ALL_THEMES_REQUEST,
	GET_ALL_THEMES_SUCCESS,
	GET_ALL_THEMES_FAILURE,
	SET_ACTIVE_THEME_REQUEST,
	SET_ACTIVE_THEME_SUCCESS,
	SET_ACTIVE_THEME_FAILURE,
} from './actionTypes';

// TODO: Add types.ts

export const getAllThemesRequest = (): any => ({
	type: GET_ALL_THEMES_REQUEST,
});

export const getAllThemesSuccess = (payload: any): any => ({
	type: GET_ALL_THEMES_SUCCESS,
	payload,
});

export const getAllThemesFailure = (payload: any): any => ({
	type: GET_ALL_THEMES_FAILURE,
	payload,
});

export const setActiveThemeRequest = (payload: any) => ({
	type: SET_ACTIVE_THEME_REQUEST,
	payload,
});

export const setActiveThemeSuccess = (payload: any) => ({
	type: SET_ACTIVE_THEME_SUCCESS,
	payload,
});

export const setActiveThemeFailure = (payload: any) => ({
	type: SET_ACTIVE_THEME_FAILURE,
	payload,
});
