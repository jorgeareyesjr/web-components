import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import { AppRoutes } from './Routes';
import Layout from '../../layouts/default/Layout';

// A catch-all for URLs that don't have explicit routes defined.
function NoMatch() {
	return (
		<>
			<h2>Oops, this page URL is not supported.</h2>
			<Link to="/">Go to the home page</Link>
		</>
	);
};

export default function Router() {
	const mapRoutes = () => (
		AppRoutes.map((route, i) => (
			<Route
				key={i}
				index={route.path === '/' ? true : false}
				path={route.path}
				element={route.element}
			/>
		))
	);

	return (
		<Routes>
			{/* All routes are wrapped within Layout */}
			<Route path="/" element={<Layout />}>
				{ mapRoutes() }
				{/* The NoMatch component is a catch-all for any URLs that don't have explicit routes defined. */}
				<Route path="*" element={<NoMatch />} />
			</Route>
		</Routes>
	);
};
