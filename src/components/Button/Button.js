import React from 'react';

import './Button.scss';

export default function Button(props) {
	return (
		<a href={props.link} className="btn" target="_blank" rel="noreferrer">
			{props.children}
		</a>
	);
}
