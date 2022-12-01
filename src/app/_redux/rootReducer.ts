import { combineReducers } from 'redux';
import themesReducer from './themes/reducer';
import layoutsReducer from './layouts/reducer';
import navReducer from './nav/reducer';

const rootReducer = combineReducers({
	themes: themesReducer,
	layouts: layoutsReducer,
	nav: navReducer,
});

export type AppState = ReturnType<typeof rootReducer>;

export default rootReducer;
