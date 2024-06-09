function printPyramid(height) {
	for (let i = 0; i < height; i++) {
		let row = "";

		// Add spaces before symbols
		for (let j = 0; j < height - i - 1; j++) {
			row += " ";
		}

		// Add symbols
		if (i % 2 === 0) {
			for (let k = 0; k < 2 * i + 1; k++) {
				row += "+";
			}
		} else {
			for (let k = 0; k < 2 * i + 1; k++) {
				row += "*";
			}
		}

		console.log(row);
	}
}

// Example usage
let height = 5;
printPyramid(height);
