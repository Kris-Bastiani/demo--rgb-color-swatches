import brgbToRgb from './brgbToRgb';
import hslToRgb from './hslToRgb';

export default colors => colors.map(({ kind, components }) => {
	switch (kind) {
	case 'brgb':
		return brgbToRgb(components.bred, components.bgreen, components.bblue);
	case 'hsl':
		return hslToRgb(components.hue, components.saturation, components.lightness);
	default:
		return components;
	}
});
