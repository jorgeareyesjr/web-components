import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

/* Redux */
import { setActiveTheme } from '../../../_redux/themes/operations';
import { getActiveThemeSelector, getThemesSelector } from '../../../_redux/themes/selectors';

// TODO: Add types.ts

export default function ThemesDropdownNav({ base }: any) {
	const dispatch = useDispatch();

	const allThemes = useSelector(getThemesSelector);
	const activeTheme = useSelector(getActiveThemeSelector);


	const handleThemeClick = (e: any, thisTheme: any) => {
		e.preventDefault();
		const selectedTheme = allThemes.filter((theme: any) => theme.name === thisTheme.name)
		const [ first ] = selectedTheme;
		dispatch(setActiveTheme(first));
	};

	const setClassName = ({ name }: any) => {
		return name === activeTheme.name
			? `c-list__listing u--is-active`
			: `c-list__listing`;
	};

	const buildThemesNav = () => (
		<ul className={`c-list`}>
			{
				activeTheme && allThemes
					.filter((theme: any) => theme.base === base)
					.map((theme: any, i: number) => (
						<li
							key={i}
							className={setClassName(theme)}
							onClick={(e) => handleThemeClick(e, theme)}
						>
							<p>{theme.name}</p>
						</li>
					))
			}
		</ul>
	);

	return (
		<nav className={`c-nav c-nav--secondary c-nav--themes`}>
			{ buildThemesNav() }
		</nav>
	);
};
