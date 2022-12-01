import React, { useState } from 'react';
import Arrow from '../Arrow/Arrow';
import './Dropdown.css';

export default function Dropdown({
	title=null, // optional title prop.
	content,
	initialIsOpenState = false,
	onClick=null,
}: any) {
	const [isOpen, setIsOpen] = useState(initialIsOpenState);

	const buildDropdownArrow = (isOpen: boolean) => isOpen
		? <Arrow direction={'up'} />
		: <Arrow direction={'down'} />
		
	const buildDefaultTitle = () => (
		isOpen ? <p>Show Less</p> : <p>Show More</p> 
	);

	const buildDropdownTitle = () => {
		return (
			<h2 className={`c-dropdown__title`} onClick={() => {
				setIsOpen(!isOpen);
				onClick();
			}}>
				{ title === null ? buildDefaultTitle() : <p>{ title }</p> }
				{ buildDropdownArrow(isOpen) }
			</h2>
		);
	};

	const buildDropdownContent = () => {
		return (
			isOpen && (
				<div className={`c-dropdown__content`}>
					{content}
				</div>
			)
		);
	};

	return (
		<details className={`c-dropdown`} open={initialIsOpenState}>
			<summary className={`c-dropdown__summary`}>
				<>
					{ buildDropdownTitle() }
					{ buildDropdownContent() }
				</>
			</summary>
		</details>
	);
};
