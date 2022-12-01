/* Timing */
export function debounce(fn: Function, ms: number) {
	let timer: any;

	return () => {
		clearTimeout(timer)
		timer = setTimeout((...args) => {
			timer = null;
			fn.apply(null, args);
		}, ms);
	};
};

/* Lookup Maps */
export function createRegisteredLookupMap(dataArray: any[]) {
	// Reduce a data array into a makeshift map: O(n).
	// This makeshift map can be used for efficient lookups: O(1).
	const reducedDataArray = dataArray.reduce((acc, curr) => {
		if (!acc[curr.name]) {
			acc[curr.name] = curr;
		};
		return acc;
	}, {});
	return reducedDataArray;
};
