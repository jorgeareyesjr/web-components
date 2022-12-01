import { combineReducers } from 'redux';
import {
	GET_ALL_THEMES_REQUEST,
	GET_ALL_THEMES_SUCCESS,
	GET_ALL_THEMES_FAILURE,
	SET_ACTIVE_THEME_REQUEST,
	SET_ACTIVE_THEME_SUCCESS,
	SET_ACTIVE_THEME_FAILURE,
} from './actionTypes';

// TODO: Add types.ts

const initialUIState: any = {
	loading: false,
};

const initialDataState: any = {
	themes: null,
	registeredThemesMap: null,
	activeTheme: null,
	error: null,
};

const initialState: any ={
	ui: initialUIState,
	data: initialDataState,
};

const uiReducer = (state = initialState.ui, action: any) => {
	switch (action.type) {
		case GET_ALL_THEMES_REQUEST:
			return {
				...state,
				loading: true,
			};
		case GET_ALL_THEMES_SUCCESS:
			return {
				...state,
				loading: false,
			};
		case GET_ALL_THEMES_FAILURE:
			return {
				...state,
				loading: false,
			};
		case SET_ACTIVE_THEME_REQUEST:
			return {
				...state,
				loading: true,
			};
		case SET_ACTIVE_THEME_SUCCESS:
			return {
				...state,
				loading: false,
			};
		case SET_ACTIVE_THEME_FAILURE:
			return {
				...state,
				loading: false,
			};
		default:
			return {
				...state,
			};
	};
};

const dataReducer = (state = initialState.data, action: any) => {
	switch (action.type) {
		case GET_ALL_THEMES_SUCCESS:
			const { themes, registeredThemesMap } = action.payload;
			return {
				...state,
				themes,
				registeredThemesMap,
				error: null,
			};
		case GET_ALL_THEMES_FAILURE:
			return {
				...state,
				themes: null,
				registeredThemesMap: null,
				error: action.payload,
			};
		case SET_ACTIVE_THEME_SUCCESS:
			const { activeTheme } = action.payload;
			return {
				...state,
				activeTheme,
				error: null,
			};
		case SET_ACTIVE_THEME_FAILURE:
			return {
				...state,
				activeTheme: null,
				error: action.payload,
			};
		default:
			return {
				...state,
			};
	};
};

const themesReducer = combineReducers({
	ui: uiReducer,
	data: dataReducer,
});

export default themesReducer;
