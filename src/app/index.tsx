import React from 'react';
import { useSelector } from 'react-redux';
import Router from './components/Router/Router';
import { getNavIsOpenSelector } from './_redux/nav/selectors';

function App() {
	const navIsOpen = useSelector(getNavIsOpenSelector);
	const setClassName = () => !navIsOpen
		? `o-app o-app--closed-nav`
		: `o-app o-app--open-nav`;

	return (
		<div className={setClassName()}>
			<Router />
		</div>
	);
};

export default App;
