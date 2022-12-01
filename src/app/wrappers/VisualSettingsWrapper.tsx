import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

/* Redux */
import { getActiveThemeSelector, getRegisteredThemesMapSelector } from '../_redux/themes/selectors';
import { setActiveTheme } from '../_redux/themes/operations';

// TODO: Add types.ts

/* Services */
import {
	savedThemeKey,
	validatedSavedThemeKey,
	getDefaultTheme,
} from '../services/ManageAppData';

/* Components */
import Spinner from '../components/Spinner/Spinner';

// Note: The redux-saga middleware will automatically synchronize and keep all of the browser's localStorage data up-to-date.
export default function VisualSettingsWrapper({ themes, children }: any) {
	const dispatch = useDispatch();

	// Theme.
	const registeredThemesMap = useSelector(getRegisteredThemesMapSelector);
	const activeTheme = useSelector(getActiveThemeSelector);
	const defaultTheme: any = getDefaultTheme(themes);

	// Effect to manage the app's active theme.
	useEffect(() => {
		let effectCancelled = false;

		const checkSavedTheme = (key: string) => {
			const { name } = JSON.parse(key);
			// If the saved theme isn't registered within the themesMap, set the provided default theme as the active theme. If the saved theme is supported, set it as the active theme.
			return !registeredThemesMap[name]
				? dispatch(setActiveTheme(defaultTheme))
				: dispatch(setActiveTheme(JSON.parse(key)))
		};

		if (!effectCancelled && !activeTheme) {
			// Check the browser's localStorage for a valid saved theme key. If it doesn't exist, set the provided default theme as the active theme. If it exists, check it against the themesMap to ensure it's a supported theme.
			!validatedSavedThemeKey
				? dispatch(setActiveTheme(defaultTheme))
				: checkSavedTheme(savedThemeKey);
		};

		return () => {
			effectCancelled = false;
		};
	}, [
		dispatch,
		registeredThemesMap,
		activeTheme,
		defaultTheme,
	]);

	// Set component classnames.
	const setThemeBaseClassName = () => (
		`t-theme t-theme--${activeTheme?.base}`
	);

	const setThemModifierClassName = () => (
		`t-theme--${activeTheme?.name}`
	);

	const setVisualSettingsWrapperClassName = () => (
		`${setThemeBaseClassName()} ${setThemModifierClassName()}`
	);

	/* Views */
	if (!themes) {
		return <Spinner message={`Loading visual settings...`} />;
	};

	return (
		<div className={setVisualSettingsWrapperClassName()}>
			{children}
		</div>
	);
};
