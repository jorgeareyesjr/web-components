/**
 * 
 * Client-side storage option: LocalStorage
 * SEE: https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Client-side_web_APIs/Client-side_storage
 * SEE: https://developer.mozilla.org/en-US/docs/Web/API/Web_Storage_API
 * 
*/

/* Redux */
// TODO: Add types.ts

/* Utilities */
import {
	APP_LAST_UPDATE_KEY,
	APP_THEME_KEY,
	APP_LAYOUT_KEY,
} from '../utilities/Constants';

const getDefault = (data: any[]) => {
	const defaultDatum = data.filter((datum: any) => datum.isDefault);
	const [first] = defaultDatum;
	return first;
};

// LocalStorage
export const getLocalStorageKey = (key: string) => localStorage
	.getItem(key) || 'null';

// Save the text size to the browser's localStorage.
export const setLocalStorageKey = (key: string, value: any) => localStorage.setItem(
	key,
	JSON.stringify(value),
);

export const clearLocalStorage = () => {
	localStorage.clear();
}

// JSON
export const loadLocalJSON = ({ path }: any) => {
	try {
		const json = require(`${path}`);
		return json;
	} catch(error) {
		console.error("Unable to load json:", error);
	};
};

export const valueIsValidJSON = (value: any) => {
	if (typeof value !== 'string') {
		return false;
	};
	try {
		const result = JSON.parse(value);
		const type = Object.prototype.toString.call(result);
		return type === '[object Object]' || type === '[object Array]';
	} catch (error) {
		return false;
	};
};

// Last Update (synchronizer)
export const savedLastUpdateKey = getLocalStorageKey(APP_LAST_UPDATE_KEY);

const checkLastUpdateKey = (key: string) => {
	// CURRENT TODO
	const today = new Date();
	const now = today.getTime();
	console.log('??? checkLastUpdateKey - checkUpdateKey', now);
};

export const syncLocalStorage = () => {
	// Check the browser's localStorage for a valid saved update key. If it doesn't exist, set clear the local storage, otherwise, check the saved last update key.
	!savedLastUpdateKey
		? clearLocalStorage()
		: checkLastUpdateKey(savedLastUpdateKey);
};

// Themes
export const savedThemeKey = getLocalStorageKey(APP_THEME_KEY);

export const validatedSavedThemeKey = savedThemeKey && valueIsValidJSON(savedThemeKey); 

export const getDefaultTheme = (themes: any) => getDefault(themes);

// Layouts
export const savedLayoutKey = getLocalStorageKey(APP_LAYOUT_KEY);

export const validatedSavedLayoutKey = savedLayoutKey && valueIsValidJSON(savedLayoutKey);

export const getDefaultLayout = (layouts: any) => getDefault(layouts);
