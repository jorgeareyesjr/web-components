import React from 'react';
import { useSelector } from 'react-redux';
import { Outlet } from 'react-router-dom';
import { getNavDisplaySizeSelector } from '../../_redux/nav/selectors';
import './Main.css';

export default function Main () {
	// Get the app's main nav size from redux store and pass it as a variable to calculate how much the Main component should transform/translate along the X and Y axis.
	const navDisplaySize = useSelector(getNavDisplaySizeSelector);
	const styles= {
		color: 'inherit',
		'--transformX': `translateX(${navDisplaySize.width}px)`,
		'--negative-transformX': `translateX(${-(navDisplaySize.width)}px)`,
		'--transformY': `translateY(${navDisplaySize.height}px)`,
		'--negative-transformY': `translateY(${-(navDisplaySize.height)}px)`,
	};

	return (
		<main className={`c-main`} style={styles}>
			{/* An <Outlet> renders whatever child route is currently active,
			so you can think about this <Outlet> as a placeholder for
			the child routes we defined above. */}
			<Outlet />
		</main>
	);
};
