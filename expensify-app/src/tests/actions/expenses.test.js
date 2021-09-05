import { addExpense, editExpense, removeExpense } from "../../actions/expenses";

// Test Case For Remove Expense Action
test("Should set up remove expense action object", () => {
	const action = removeExpense({ id: "123abc" });
	expect(action).toEqual({
		type: "REMOVE_EXPENSE",
		id: "123abc",
	});
});

// Test Case For Edit Expense Action

test("Should set up edit expense action object", () => {
	const action = editExpense("456def", { amount: 1000 });
	expect(action).toEqual({
		type: "EDIT_EXPENSE",
		id: "456def",
		updates: { amount: 1000 },
	});
});

// Test Case For Default Values for Add Expense action
test("Should set up default values for add expense", () => {
	const action = addExpense();
	const expense = {
		id: expect.any(String),
		title: "no title",
		note: "",
		amount: 0.0,
		createdAt: 0,
	};
	expect(action).toEqual({
		type: "ADD_EXPENSE",
		expense,
	});
});

test("Should add expense", () => {
	const expense = {
		id: expect.any(String),
		title: "Hello Jest",
		note: "Test Test",
		amount: 1000.0,
		createdAt: moment("2010-10-20"),
	};
});
