import React, { lazy, Suspense } from 'react';
import Spinner from '../Spinner/Spinner';

// Implement page-based code splitting.
const Landing = lazy(() => import('../../pages/Landing/Landing'));
const lazyLoadLanding = () => (
	<Suspense fallback={<Spinner />}>
		<Landing />
	</Suspense>
);

const Overview = lazy(() => import('../../pages/Overview/Overview'));
const lazyLoadOverview = () => (
	<Suspense fallback={<Spinner />}>
		<Overview />
	</Suspense>
);


const AppRoutes = [
	{
		id: 1,
		name: 'Landing',
		path: '/web-components',
		element: lazyLoadLanding(),
	},
	{
		id: 2,
		name: 'Overview',
		path: '/overview',
		element: lazyLoadOverview(),
	},
	{
		id: 3,
		name: 'Test Component 1',
		path: '/web-components/1',
		element: <>Test Component 1</>,
	},
];

export { AppRoutes };
