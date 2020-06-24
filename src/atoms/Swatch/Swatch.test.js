import React from 'react';
import { render } from '@testing-library/react';

import Swatch from '.';

describe('Component: Swatch', () => {
	it('should match snapshot', () => {
		const { container } = render(<Swatch red={0} green={0} blue={0} setSelected={() => {}} />);
		expect(container).toMatchSnapshot();
	});
});
