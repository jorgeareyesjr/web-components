import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

/* Redux */
import { setActiveLayout } from '../../../_redux/layouts/operations';
import { getActiveLayoutSelector, getLayoutsSelector } from '../../../_redux/layouts/selectors';

// TODO: Add types.ts

export default function AppLayoutsDropdownNav() {
	const dispatch = useDispatch();

	const layouts = useSelector(getLayoutsSelector);
	const activeLayout = useSelector(getActiveLayoutSelector);

	const handleLayoutClick = (e: any, thisLayout: any) => {
		e.preventDefault();
		const selectedLayout = layouts.filter((layout: any) => layout.name === thisLayout.name )
		const [ first ] = selectedLayout;
		dispatch(setActiveLayout(first));
	};

	const setClassName = ({ name }: any) => {
		return name === activeLayout.name
			? `c-list__listing u--is-active`
			: `c-list__listing`;
	};

	const buildLayoutsNav = () => (
		<ul className={`c-list`}>
			{
				activeLayout && layouts.map((layout: any, i: number) => (
					<li
						key={i}
						className={setClassName(layout)}
						onClick={(e) => handleLayoutClick(e, layout)}
					>
						<p>{layout.name}</p>
					</li>
				))
			}
		</ul>
	);

	return (
		<nav className={`c-nav c-nav--secondary c-nav--layouts`}>
			{ buildLayoutsNav() }
		</nav>
	);
};
