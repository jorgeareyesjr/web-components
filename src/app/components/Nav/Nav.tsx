import React, { useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';

/* Redux */
import { getActiveLayoutSelector } from '../../_redux/layouts/selectors';
import { getNavDisplaySizeSelector } from '../../_redux/nav/selectors';
import { setNavDisplaySize } from '../../_redux/nav/actions';

/* Utilities */
import { debounce } from '../../utilities/Utilities';

/* Components */
import Dropdown from '../../components/Dropdown/Dropdown';
import RoutesSecondaryNav from './components/RoutesSecondaryNav';
import ThemesSecondaryNav from './components/ThemesSecondaryNav';
import LayoutsSecondaryNav from './components/LayoutsSecondaryNav';
import './Nav.css';

export default function Nav() {
	const dispatch = useDispatch();

	const navGridListRef = useRef<any>(null);
	
	const navDisplaySize = useSelector(getNavDisplaySizeSelector)
	const activeLayout = useSelector(getActiveLayoutSelector);

	const setClassName = () => (
		`c-nav c-nav--primary c-nav--${activeLayout && (activeLayout.name || 'default')} ${navDisplaySize.height}`
	);

	// Effect to check the nav grid list height, whenever the browser window resizes.
	useEffect(() => {
		let effectCancelled = false;

		const handleResize = () => {
			if (navGridListRef && navGridListRef.current) {
				const { offsetWidth, offsetHeight } = navGridListRef.current;
				dispatch(
					setNavDisplaySize({
						width: offsetWidth,
						height: offsetHeight,
					})
				);
			};
		};

		const debouncedHandleResize = debounce(() => {
			handleResize();
		}, 250);

		if (!effectCancelled) {
			// On init, call the debounced handle resize function to define the carousel's initial size.
			debouncedHandleResize();
			window.addEventListener('resize', debouncedHandleResize);
			window.addEventListener('click', handleResize);
		};

		return () => {
			effectCancelled = false;
			window.removeEventListener('resize', debouncedHandleResize);
			window.removeEventListener('click', handleResize);
		};
	}, [dispatch, navGridListRef]);

	const buildDropdownNavGridList = () => {
		const navList = [
			{
				title: `Navigation`,
				component: <RoutesSecondaryNav />,
				isOpenByDefault: true,
			},
			{
				title: `Dark Themes`,
				component: <ThemesSecondaryNav base={`dark`} />,
				isOpenByDefault: true,
			},
			{
				title: 'Light Themes',
				component: <ThemesSecondaryNav base={`light`} />,
				isOpenByDefault: true,
			},
			{
				title: 'Layouts',
				component: <LayoutsSecondaryNav />,
				isOpenByDefault: false,
			},
		];

		return (
			<ul className={`c-grid-list`} ref={navGridListRef}>
				{
					navDisplaySize && navList.map((nav, i) => (
						<li key={i} className={`c-grid-list__listing`}>
							<Dropdown
								title={nav.title}
								content={nav.component}
								initialIsOpenState={nav.isOpenByDefault}
								onClick={() => console.log(navDisplaySize)}
							/>
						</li>
					))
				}
			</ul>
		);
	};

	return (
		<nav className={setClassName()}>
			{ buildDropdownNavGridList() }
		</nav>
	);
};
