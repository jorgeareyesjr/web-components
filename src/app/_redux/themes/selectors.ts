import { createSelector } from 'reselect';
import { AppState } from '../rootReducer';

const getLoading = (state: AppState) => state.themes.ui.loading;
const getError = (state: AppState) => state.themes.data.error;
const getThemes = (state: AppState) => state.themes.data.themes;
const getRegisteredThemesMap = (state: AppState) => state.themes.data.registeredThemesMap;
const getActiveTheme = (state: AppState) => state.themes.data.activeTheme;

export const getThemesLoadingSelector = createSelector(
	getLoading,
	(loading) => loading,
);

export const getThemesErrorSelector = createSelector(
	getError,
	(error) => error,
);

export const getThemesSelector = createSelector(
	getThemes,
	(themes) => themes,
);

export const getRegisteredThemesMapSelector = createSelector(
	getRegisteredThemesMap,
	(themesMap) => themesMap,
);

export const getActiveThemeSelector = createSelector(
	getActiveTheme,
	(activeTheme) => activeTheme,
);
