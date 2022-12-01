import React, { lazy, Suspense } from 'react';

/* Components */
import Spinner from './app/components/Spinner/Spinner';
import './app/styles/index.css';

// Note: React's lazy and Suspense components are used to support code splitting techniques, in an effort to control resource load prioritization and improve overall load performance.
export default function App() {
	// Implement component-based code splitting.
	const SettingsWrapper = lazy(() => import('./app/wrappers/SettingsWrapper'));
	const Router = lazy(() => import('./app/components/Router/Router'));
	return (
		<Suspense fallback={<Spinner message={`Initializing app...`} />}>
			<SettingsWrapper>
				<Router />
			</SettingsWrapper>
		</Suspense>
	);
};
