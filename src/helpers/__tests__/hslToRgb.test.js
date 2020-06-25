import hslToRgb from '../hslToRgb';

describe('HSL to RGB', () => {
	it('takes HSl values as arguments and returns an object with correct RGB values', () => {
		expect(hslToRgb(147, 50, 47)).toEqual({
			red: 60,
			green: 180,
			blue: 114,
		});
	});
});
