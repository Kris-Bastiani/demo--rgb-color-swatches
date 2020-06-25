import clamp from '../clamp';

describe('clamp', () => {
	it('returns value if within acceptable range', () => {
		expect(clamp(5, 0, 10)).toEqual(5);
	});

	it('returns max if value is higher', () => {
		expect(clamp(15, 0, 10)).toEqual(10);
	});

	it('returns min if value is lower', () => {
		expect(clamp(2, 5, 15)).toEqual(5);
	});
});
