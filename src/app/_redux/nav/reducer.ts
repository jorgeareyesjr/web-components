import {
	TOGGLE_NAV_DISPLAY,
	CLOSE_NAV_DISPLAY,
} from './actionTypes';
import { combineReducers } from 'redux';

const initialUIState = {
	navIsOpen: false,
};

const initialState ={
	ui: initialUIState,
};

const uiReducer = (state = initialState.ui, action: { type: any; }) => {
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
	}
};

const themesReducer = combineReducers({ ui: uiReducer });

export default themesReducer;
