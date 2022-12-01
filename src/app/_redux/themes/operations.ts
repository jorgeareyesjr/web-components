import {
	getAllThemesRequest,
	setActiveThemeRequest,
} from './actions';

// TODO: Add types.ts

const getAllThemes = () => getAllThemesRequest();
const setActiveTheme = (theme: any) => setActiveThemeRequest(theme);

export {
	getAllThemes,
	setActiveTheme,
};
