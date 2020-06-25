import RESPONSE from '../../__mocks__/list.json';
import EXPECTED from '../../__mocks__/list__formatted.json';
import RESPONSE_EXT from '../../__mocks__/list-extended.json';
import EXPECTED_EXT from '../../__mocks__/list-extended__formatted.json';

import formatColors from '../formatColors';

describe('formatColors', () => {
	it('converts all colors from the `list` endpoint to RGB objects', () => {
		expect(formatColors(RESPONSE)).toEqual(EXPECTED);
	});

	it('converts all colors from the `list-extended` endpoint to RGB objects', () => {
		expect(formatColors(RESPONSE_EXT)).toEqual(EXPECTED_EXT);
	});
});
