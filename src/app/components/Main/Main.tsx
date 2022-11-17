import React from 'react';
import { Outlet } from 'react-router-dom';

export default function Main() {
	return (
		<main className={`c-main`}>
			{/* An <Outlet> renders whatever child route is currently active,
			so you can think about this <Outlet> as a placeholder for
			the a defined child route. */}
			<Outlet />
		</main>
	);
};
