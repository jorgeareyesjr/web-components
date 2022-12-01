
import { createSelector } from 'reselect';
import { AppState } from '../rootReducer';

const getLoading = (state: AppState) => state.layouts.ui.loading;
const getError = (state: AppState) => state.layouts.data.error;
const getLayouts = (state: AppState) => state.layouts.data.layouts;
const getRegisteredLayoutsMap = (state: AppState) => state.layouts.data.registeredLayoutsMap;
const getActiveLayout = (state: AppState) => state.layouts.data.activeLayout;

export const getLayoutsLoadingSelector = createSelector(
	getLoading,
	(loading) => loading,
);

export const getLayoutsErrorSelector = createSelector(
	getError,
	(error) => error,
);

export const getLayoutsSelector = createSelector(
	getLayouts,
	(layouts) => layouts,
);

export const getRegisteredLayoutsMapSelector = createSelector(
	getRegisteredLayoutsMap,
	(layoutsMap) => layoutsMap,
);

export const getActiveLayoutSelector = createSelector(
	getActiveLayout,
	(activeLayout) => activeLayout,
);
