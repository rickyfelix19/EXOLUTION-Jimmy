// 2. Code to display certain Fibonacci number.
function fibonacciLooping(n) {
	let fib = [1, 1];
	for (let i = 2; i < n; i++) {
		fib.push(fib[i - 1] + fib[i - 2]);
	}
	return fib;
}

// Example usage
let n = 6;
let fibNumbersLooping = fibonacciLooping(n);
console.log(fibNumbersLooping.join(" ")); // Output: 1 1 2 3 5 8
