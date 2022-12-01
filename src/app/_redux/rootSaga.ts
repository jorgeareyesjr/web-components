import { all, fork } from 'redux-saga/effects';
import themesSaga from './themes/sagas';
import layoutsSaga from './layouts/sagas';

export function* rootSaga() {
	yield all([
		fork(themesSaga),
		fork(layoutsSaga),
	]);
};
