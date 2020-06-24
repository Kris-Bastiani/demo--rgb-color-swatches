import React from 'react';
import { render } from '@testing-library/react';

import Button from '.';

describe('Component: Button', () => {
	it('should match snapshot when no props are passed', () => {
		const { container } = render(<Button />);
		expect(container).toMatchSnapshot();
	});

	it('should match snapshot when props are passed', () => {
		const { container } = render(<Button label='foobar' onClick={() => {}} />);
		expect(container).toMatchSnapshot();
	});
});
