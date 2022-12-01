import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

/* Redux */
import { getActiveLayoutSelector, getRegisteredLayoutsMapSelector } from '../_redux/layouts/selectors';
import { setActiveLayout } from '../_redux/layouts/operations';
import { getNavIsOpenSelector } from '../_redux/nav/selectors';

// TODO: Add types.ts

/* Services */
import {
	savedLayoutKey,
	validatedSavedLayoutKey,
	getDefaultLayout,
} from '../services/ManageAppData';

/* Components */
import Spinner from '../components/Spinner/Spinner';

// Note: The redux-saga middleware will automatically synchronize and keep all of the browser's localStorage data up-to-date.
export default function LayoutSettingsWrapper({ layouts, children }: any) {
	const dispatch = useDispatch();

	// Layout.
	const registeredLayoutsMap = useSelector(getRegisteredLayoutsMapSelector);
	const activeLayout = useSelector(getActiveLayoutSelector);
	const defaultLayout: any = getDefaultLayout(layouts);
	
	// Nav State.
	const navIsOpen = useSelector(getNavIsOpenSelector);

	// Effect to manage the app's active layout.
	useEffect(() => {
		let effectCancelled = false;

		const checkSavedLayout = (key: string) => {
			const { name } = JSON.parse(key);
			// If the saved layout isn't registered within the layoutsMap, set the provided default layout as the active layout. If the saved layout is supported, set it as the active layout.
			return !registeredLayoutsMap[name]
				? dispatch(setActiveLayout(defaultLayout))
				: dispatch(setActiveLayout(JSON.parse(key)))
		};

		if (!effectCancelled && !activeLayout) {
			// Check the browser's localStorage for a valid saved layout key. If it doesn't exist, set the provided default layout as the active layout. If it exists, check it against the layoutsMap to ensure it's a supported layout.
			!validatedSavedLayoutKey
				? dispatch(setActiveLayout(defaultLayout))
				: checkSavedLayout(savedLayoutKey);
		};

		return () => {
			effectCancelled = false;
		};
	}, [
		dispatch,
		registeredLayoutsMap,
		activeLayout,
		defaultLayout,
	]);

	// Set component classnames.
	const setLayoutClassName = () => (
		`l-layout l-layout--${activeLayout?.name}`
	);

	const setNavStateClassName = () => !navIsOpen
		? `l-layout--nav-is-closed`
		: `l-layout--nav-is-open`;

	const setLayoutSettingsWrapperClassName = () => (
		`${setLayoutClassName()} ${setNavStateClassName()}`
	);

	/* Views */
	if (!layouts) {
		return <Spinner message={`Loading layout settings...`} />;
	};

	return (
		<div className={setLayoutSettingsWrapperClassName()}>
			{ children }
		</div>
	);
};
