const add = (a, b) => a + b;
const generateGreeting = (name = "Ali") => `Hello ${name}`;

test("Add 2 numbers", () => {
	const result = add(3, 7);
	expect(result).toBe(10);
});

test("Greet by name", () => {
	const result = generateGreeting("Mehdi");
	expect(result).toBe("Hello Mehdi");
});

test("Greeting for no name", () => {
	const result = generateGreeting();
	expect(result).toBe("Hello Ali");
});
