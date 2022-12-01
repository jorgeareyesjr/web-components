import React from 'react';
import { useDispatch } from 'react-redux';

/* Redux */
import { toggleNavDisplay } from '../../_redux/nav/operations';

/* Components */
import Nav from '../Nav/Nav';
import './Header.css';

export default function Header() {
	const dispatch = useDispatch();
	const toggleNav = () => dispatch(toggleNavDisplay());
	return (
		<header className={`c-header`}>
			<button className={`c-button`} onClick={toggleNav}>
				<span className={`c-button__span`}></span>
				<span className={`c-button__span`}></span>
				<span className={`c-button__span`}></span>
			</button>
			<Nav />
		</header>
	);
};
