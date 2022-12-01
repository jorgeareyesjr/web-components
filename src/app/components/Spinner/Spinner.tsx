import React from 'react';
import './Spinner.css';

// The Spinner's `message` prop is optional.
export default function Spinner({ message = null }: any) {
	const buildSpinnerMessage = () => (
		message && <p className={`c-spinner__message`}>{message}</p>
	);

	return (
		<div className={`c-spinner`}>
			<>
				<div className={`c-spinner__animation`}></div>
				{ buildSpinnerMessage ()}
			</>
		</div>
	);
};
