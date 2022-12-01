import React from 'react';
import './Arrow.css';

export default function Arrow ({ direction }: any) {
	const setClassName = () => `c-arrow c-arrow--${direction}`;
	return (
		<i className={setClassName()}></i>
	);
};
