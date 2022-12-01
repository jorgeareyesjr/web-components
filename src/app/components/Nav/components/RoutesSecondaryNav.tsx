import React from 'react';
import { useDispatch } from 'react-redux';
import { Link, useLocation } from 'react-router-dom';

/* Redux */
import { toggleNavDisplay } from '../../../_redux/nav/operations';

// TODO: Add types.ts

import { AppRoutes } from '../../Router/Routes';

export default function RoutesDropdownNav() {
	let location = useLocation();

	const dispatch = useDispatch();

	const togglePushNav = () => {
		dispatch(toggleNavDisplay());
	};

	const setClassName = ({ path }: any) => {
		return path === location.pathname
			? `c-list__listing u--is-active`
			: `c-list__listing`;
	};

	const buildRoutesNav = () => (
		<ul className={`c-list`}>
			{
				AppRoutes.map((route, i) => {
					return (
						<li key={i} className={setClassName(route)}>
							<Link
								key={i}
								to={route.path}
								className={`c-link`}
								onClick={togglePushNav}
							>
								{route.name}
							</Link>
						</li>
					);
				})
			}
		</ul>
	);

	return (
		<nav className={`c-nav c-nav--secondary c-nav--routes`}>
			{ buildRoutesNav() }
		</nav>
	);
};
