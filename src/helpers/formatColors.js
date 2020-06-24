import hslToRgb from './hslToRgb';

export default colors => colors.map(({ kind, components }) => {
	switch (kind) {
	case 'hsl':
		return hslToRgb(components.hue, components.saturation, components.lightness);
	default:
		return components;
	}
});
