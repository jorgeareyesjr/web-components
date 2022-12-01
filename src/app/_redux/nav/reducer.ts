import { combineReducers } from 'redux';
import {
	TOGGLE_NAV_DISPLAY,
	CLOSE_NAV_DISPLAY,
	SET_NAV_DISPLAY_SIZE,
} from './actionTypes';

// TODO: Add types.ts

const initialUIState: any = {
	navIsOpen: false,
};

const initialDataState: any = {
	navDisplaySize: {
		width: undefined,
		height: undefined,
	},
};

const initialState: any = {
	ui: initialUIState,
	data: initialDataState,
};

const uiReducer = (state = initialState.ui, action: any) => {
	switch (action.type) {
		case TOGGLE_NAV_DISPLAY:
			return {
				...state,
				navIsOpen: !state.navIsOpen,
			};
		case CLOSE_NAV_DISPLAY:
			return {
				...state,
				navIsOpen: false,
			};
		default:
			return {
				...state,
			};
	};
};

const dataReducer = (state = initialState.data, action: any) => {
	switch (action.type) {
		case SET_NAV_DISPLAY_SIZE:
			return {
				...state,
				navDisplaySize: action.payload,
			};
		default:
			return {
				...state,
			};
	};
};

const navReducer = combineReducers({
	ui: uiReducer,
	data: dataReducer,
});

export default navReducer;
