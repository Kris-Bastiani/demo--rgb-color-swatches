import convertIntScale from '../convertIntScale';

describe('convertIntScale', () => {
	it('converts an int from one number scale to the nearest int in another', () => {
		expect(convertIntScale(3000, 10000, 255)).toEqual(77);
	});
});
