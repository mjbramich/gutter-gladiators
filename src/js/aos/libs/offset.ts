/**
 * Get offset of DOM element
 * like there were no transforms applied on it
 *
 * @param  {Node} el [DOM element]
 * @return {Object} [top and left offset]
 */
const offset = (el: HTMLElement) => {
	let x = 0;
	let y = 0;

	while (el && !Number.isNaN(el.offsetLeft) && !Number.isNaN(el.offsetTop)) {
		x += el.offsetLeft - (el.tagName !== 'BODY' ? el.scrollLeft : 0);
		y += el.offsetTop - (el.tagName !== 'BODY' ? el.scrollTop : 0);
		// eslint-disable-next-line no-param-reassign
		el = el.offsetParent as HTMLElement;
	}

	return {
		top: y,
		left: x
	};
};

export default offset;
