import React from 'react';

import './Swatch.scss';

const Swatch = ({ red, green, blue }) => {
	const rgb = `rgb(${red}, ${green}, ${blue})`;

	return (
		<button className='swatch'>
			<div className='swatch__color' style={{ backgroundColor: rgb }}></div>
			<p className='swatch__label'>{rgb}</p>
		</button>
	);
};

export default Swatch;
