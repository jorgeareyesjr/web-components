import { combineReducers } from 'redux';
import navReducer from './nav/reducer';

const rootReducer = combineReducers({
	nav: navReducer,
});

export type AppState = ReturnType<typeof rootReducer>;

export default rootReducer;
