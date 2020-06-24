import React, { useEffect, useState } from 'react';

import { API_BASE_URL } from '../../constants';
import getData from '../../helpers/getData';
import Button from '../../atoms/Button';

const updateColors = setColors => getData(`${API_BASE_URL}/list`).then(setColors);

const App = () => {
	const [colors, setColors] = useState([]);

	useEffect(() => updateColors(setColors), []);

	return (
		<div className='App'>
			<Button label='Refresh' onClick={() => updateColors(setColors)} />
			{colors.map((color, index) => `${index} - ${color.kind}`)}
		</div>
	);
};

export default App;
