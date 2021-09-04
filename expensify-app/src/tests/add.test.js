const add = (a, b) => a + b;

test("Add 2 numbers", () => {
	const result = add(3, 7);
	if (result !== 10) {
		throw new Error(`Expected 10 got ${result}`);
	}
});
