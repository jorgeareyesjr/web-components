import {
	GET_ALL_LAYOUTS_REQUEST,
	GET_ALL_LAYOUTS_SUCCESS,
	GET_ALL_LAYOUTS_FAILURE,
	SET_ACTIVE_LAYOUT_REQUEST,
	SET_ACTIVE_LAYOUT_SUCCESS,
	SET_ACTIVE_LAYOUT_FAILURE,
} from './actionTypes';

// TODO: Add types.ts

export const getAllLayoutsRequest = (): any => ({
	type: GET_ALL_LAYOUTS_REQUEST,
});

export const getAllLayoutsSuccess = (payload: any): any => ({
	type: GET_ALL_LAYOUTS_SUCCESS,
	payload,
});

export const getAllLayoutsFailure = (payload: any): any => ({
	type: GET_ALL_LAYOUTS_FAILURE,
	payload,
});

export const setActiveLayoutRequest = (payload: any) => ({
	type: SET_ACTIVE_LAYOUT_REQUEST,
	payload,
});

export const setActiveLayoutSuccess = (payload: any) => ({
	type: SET_ACTIVE_LAYOUT_SUCCESS,
	payload,
});

export const setActiveLayoutFailure = (payload: any) => ({
	type: SET_ACTIVE_LAYOUT_FAILURE,
	payload,
});
