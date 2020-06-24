export default (hue, s, l) => {
	const saturation = s / 100;
	const lightness = l / 100;

	const chroma = (1 - Math.abs((2 * lightness) - 1)) * saturation;
	// eslint-disable-next-line no-mixed-operators
	const x = chroma * (1 - Math.abs((hue / 60) % 2 - 1));
	const lightnessAdjustment = lightness - (chroma / 2);

	let red;
	let green;
	let blue;

	if (hue >= 0 && hue < 60) {
		red = chroma;
		green = x;
		blue = 0;
	} else if (hue >= 60 && hue < 120) {
		red = x;
		green = chroma;
		blue = 0;
	} else if (hue >= 120 && hue < 180) {
		red = 0;
		green = chroma;
		blue = x;
	} else if (hue >= 180 && hue < 240) {
		red = 0;
		green = x;
		blue = chroma;
	} else if (hue >= 240 && hue < 300) {
		red = x;
		green = 0;
		blue = chroma;
	} else if (hue >= 300 && hue < 360) {
		red = chroma;
		green = 0;
		blue = x;
	}

	return {
		red: Math.round((red + lightnessAdjustment) * 255),
		green: Math.round((green + lightnessAdjustment) * 255),
		blue: Math.round((blue + lightnessAdjustment) * 255),
	};
};
