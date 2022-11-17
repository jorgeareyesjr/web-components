import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { toggleNavDisplay } from '../../_redux/nav/actions';

const Links = [
	{
		id: 1,
		name: 'Landing',
		to: '/',
	},
	{
		id: 2,
		name: 'Link 1',
		to: '/1',
	},
	{
		id: 3,
		name: 'Link 2',
		to: '/2',
	},
];

export default function Header() {
	const dispatch = useDispatch();
	const toggleNav = () => dispatch(toggleNavDisplay());

	const mapLinks = () => {
		return Links.map((link, i) => (
			<li key={i} className={`c-list__listing`}>
				<Link
					to={link.to}
					className={`c-link`}
					onClick={toggleNav}
				>
					{link.name}
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
