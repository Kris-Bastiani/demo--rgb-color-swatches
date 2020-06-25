import brgbToRgb from '../brgbToRgb';

describe('BRGB to RGB', () => {
	it('takes BRGB values as arguments and returns an object with correct RGB values', () => {
		expect(brgbToRgb(3000, 3000, 3000)).toEqual({
			red: 77,
			green: 77,
			blue: 77,
		});
	});
});
