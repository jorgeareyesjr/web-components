import {
	all,
	put,
	takeLatest,
} from 'redux-saga/effects';

/* Redux */
import {
	GET_ALL_THEMES_REQUEST,
	SET_ACTIVE_THEME_REQUEST,
} from './actionTypes';
import {
	getAllThemesSuccess,
	getAllThemesFailure,
	setActiveThemeSuccess,
	setActiveThemeFailure,
} from './actions';

/* Services */
import { data } from '../../services/data';
import { setLocalStorageKey } from '../../services/ManageAppData';

/* Utilities */
import {
	APP_THEME_KEY,
	APP_THEMES_URL,
} from '../../utilities/Constants';
import { createRegisteredLookupMap } from '../../utilities/Utilities';

function* getAllThemesSaga() {
	try {
		const themes = data[APP_THEMES_URL];
		const registeredThemesMap = createRegisteredLookupMap(themes)

		yield put(
			getAllThemesSuccess({
				themes,
				registeredThemesMap,
			}),
		);
	} catch (e: any) {
		yield put(
			getAllThemesFailure({
				error: e.message,
			}),
		);
	};
};

function* setActiveThemeSaga(action: any) {
	try {
		const activeTheme = action?.payload;

		setLocalStorageKey(APP_THEME_KEY, activeTheme);

		yield put(
			setActiveThemeSuccess({
				activeTheme,
			}),
		);
	} catch (e: any) {
		yield put(
			setActiveThemeFailure({
				error: e.message,
			}),
		);
	};
};

function* themesSaga() {
	yield all([
		takeLatest(GET_ALL_THEMES_REQUEST, getAllThemesSaga),
		takeLatest(SET_ACTIVE_THEME_REQUEST, setActiveThemeSaga),
	]);
};

export default themesSaga;
