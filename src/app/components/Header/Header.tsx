import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { toggleNavDisplay } from '../../_redux/nav/actions';
import { AppRoutes } from '../Router/Routes';

export default function Header() {
	const dispatch = useDispatch();
	const toggleNav = () => dispatch(toggleNavDisplay());

	const mapLinks = () => {
		return AppRoutes.map((route, i) => (
			<li key={i} className={`c-list__listing`}>
				<Link
					to={route.path}
					className={`c-link`}
					onClick={toggleNav}
				>
					{route.name}
				</Link>
			</li>
		));
	};

	return (
		<header className={`c-header`}>
			<button className={`c-button`} onClick={toggleNav}>
				Toggle Nav
			</button>
			<nav className={`c-nav c-nav--primary`}>
				<ul className={`c-list`}>
					{ mapLinks()}
				</ul>
			</nav>
		</header>
	);
};
