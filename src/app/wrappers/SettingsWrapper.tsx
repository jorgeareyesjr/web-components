import React, {
	lazy,
	Suspense,
	useEffect,
} from 'react';
import { useDispatch, useSelector } from 'react-redux';

/* Redux */
import { getAllThemes } from '../_redux/themes/operations';
import { getThemesSelector } from '../_redux/themes/selectors';
import { getAllLayouts } from '../_redux/layouts/operations';
import { getLayoutsSelector } from '../_redux/layouts/selectors';

/* Services */
import { syncLocalStorage } from '../services/ManageAppData';

/* Components */
import Spinner from '../components/Spinner/Spinner';

// Note: The redux-saga middleware will automatically synchronize and keep all of the browser's localStorage data up-to-date.
export default function SettingsWrapper({ children }: any) {
	const dispatch = useDispatch();

	const themes = useSelector(getThemesSelector);
	const layouts = useSelector(getLayoutsSelector);

	// Effect to manage the active app settings.
	useEffect(() => {
		let effectCancelled = false;

		// Clear the browser's localStorage, whenever the settings wrapper initializes.
		if (!effectCancelled) {
			syncLocalStorage();
		};

		/* Visual Settings */
		if (!effectCancelled && !themes) {
			dispatch(getAllThemes());
		};

		/* Layout Settings */
		if (!effectCancelled && !layouts) {
			dispatch(getAllLayouts());
		};

		return () => {
			effectCancelled = false;
		};
	}, [dispatch, themes, layouts]);

	// Implement nested component-based code splitting.
	// Note: Nested suspense components aren't fetched in parallel, but are instead fetched sequentially.
	// In this case, the 2nd Suspense component(s) block is deferred until after the 1st Suspense component(s) block resolves.
	const VisualSettingsWrapper = lazy(() => import('./VisualSettingsWrapper'));
	const LayoutSettingsWrapper = lazy(() => import('./LayoutSettingsWrapper'));

	return (
		<Suspense fallback={
			<Spinner message={`Connecting to database...`} />
		}>
			<VisualSettingsWrapper themes={themes}>
				<LayoutSettingsWrapper layouts={layouts}>
					<Suspense fallback={
						<Spinner message={`Applying system preferences...`} />
					}>
						{children}
					</Suspense>
				</LayoutSettingsWrapper>
			</VisualSettingsWrapper>
		</Suspense>
	);
};
