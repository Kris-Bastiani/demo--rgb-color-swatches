import convertIntScale from './convertIntScale';

const BRGB_MAX = 10000;
const RGB_MAX = 255;

export default (br, bg, bb) => ({
	red: convertIntScale(br, BRGB_MAX, RGB_MAX),
	green: convertIntScale(bg, BRGB_MAX, RGB_MAX),
	blue: convertIntScale(bb, BRGB_MAX, RGB_MAX),
});
