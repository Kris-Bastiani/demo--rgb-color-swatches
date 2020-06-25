import clamp from './clamp';

export default (val, currMax, newMax) => {
	const newVal = Math.round((val / currMax) * newMax);
	return clamp(newVal, 0, newMax);
};
