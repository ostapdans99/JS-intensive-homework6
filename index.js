function calcSumFromFibonacci(from, to) {
	if (Number.isNaN(from) || Number.isNaN(to) || from < 0 || to < from) {
		return null;
	}
	let fib = [0, 1];
	for (let i = 2; i <= 20; i++) {
		fib[i] = fib[i - 2] + fib[i - 1];
	}
	return fib
		.filter((element) => element >= from && element <= to)
		.reduce((accum, currValue) => accum + currValue, 0);
}

function calcSum(a) {
	let result = 0;
	if (typeof a === "number" && !Number.isNaN(a)) {
		result = a;
	}
	function inFunc(b) {
		if (typeof b === "number" && !Number.isNaN(b)) {
			result += b;
		}
		return inFunc;
	}
	inFunc.toString = function () {
		return result;
	};
	return inFunc;
}
