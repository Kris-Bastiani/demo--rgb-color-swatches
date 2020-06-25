import React, { useEffect, useState } from 'react';

import { API_BASE_URL } from '../../constants';
import formatColors from '../../helpers/formatColors';
import getData from '../../helpers/getData';
import Button from '../../atoms/Button';
import Swatch from '../../atoms/Swatch';

const updateColors = async (setColors, setSelected) => {
	const response = await getData(`${API_BASE_URL}/list-extended`);
	setColors(formatColors(response));
	setSelected('none');
};

const App = () => {
	const [colors, setColors] = useState([]);
	const [selected, setSelected] = useState('none');

	useEffect(() => { updateColors(setColors, setSelected); }, []);

	return (
		<div className='App'>
			<Button label='Refresh' onClick={() => updateColors(setColors, setSelected)} />
			<p>Selected: {selected}</p>
			{colors.map((color, index) => {
				const { red, green, blue } = color;
				return <Swatch key={index} red={red} green={green} blue={blue} setSelected={setSelected} />;
			})}
		</div>
	);
};

export default App;
