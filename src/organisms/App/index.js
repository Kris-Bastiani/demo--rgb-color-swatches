import React, { useEffect, useState } from 'react';

import { API_BASE_URL } from '../../constants';
import getData from '../../helpers/getData';
import Button from '../../atoms/Button';
import Swatch from '../../atoms/Swatch';

const updateColors = async setColors => {
	const response = await getData(`${API_BASE_URL}/list`);
	return setColors(response);
};

const App = () => {
	const [colors, setColors] = useState([]);

	useEffect(() => { updateColors(setColors); }, []);

	return (
		<div className='App'>
			<Button label='Refresh' onClick={() => updateColors(setColors)} />
			<br />
			{colors.map((color, index) => {
				const { red, green, blue } = color.components;
				return <Swatch key={index} red={red} green={green} blue={blue} />;
			})}
		</div>
	);
};

export default App;
