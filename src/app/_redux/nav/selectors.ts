import { createSelector } from 'reselect';
import { AppState } from '../rootReducer';

const navIsOpen = (state: AppState) => state.nav.ui.navIsOpen;

export const getNavIsOpenSelector = createSelector(
	navIsOpen,
	(nav) => nav,
);
