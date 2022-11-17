import {
	TOGGLE_NAV_DISPLAY,
	CLOSE_NAV_DISPLAY,
} from './actionTypes';

const toggleNavDisplay = () => ({
	type: TOGGLE_NAV_DISPLAY,
});
const closeNavDisplay = () => ({
	type: CLOSE_NAV_DISPLAY,
});

export {
	toggleNavDisplay,
	closeNavDisplay,
}
