import expenseReducer from "../../reducers/expenses";
import moment, { updateLocale } from "moment";

const expenses = [
	{ id: 78, title: "Hehi 1" },
	{ id: 77, title: "Hehi 8" },
];
// Test Case : Init state expenses = []
test("Should Init Expenses array [] ", () => {
	const action = { type: "@@INIT" };
	const state = expenseReducer(undefined, action);
	expect(state).toEqual([]);
});

// Test Case : Remove expense with id
test("Should remove an expense by id", () => {
	const action = { type: "REMOVE_EXPENSE", id: 78 };
	const state = expenseReducer(expenses, action);
	expect(state).toEqual([expenses[1]]);
});

// Test Case : Remove expense without existing id
test("Should remove non exsiting expense", () => {
	const action = { type: "REMOVE_EXPENSE", id: 87 };
	const state = expenseReducer(expenses, action);
	expect(state).toEqual(expenses);
});

// Test Case : Add Expense
test("Should add an expense default ", () => {
	const expense = {
		title: "Mehdi",
	};
	const action = { type: "ADD_EXPENSE", expense };
	const state = expenseReducer(expenses, action);
	expect(state).toEqual([...expenses, expense]);
});

// Test Case : Edit Expense
test("Should edit an expense with id", () => {
	const amount = 4000;
	const action = {
		type: "EDIT_EXPENSE",
		id: expenses[1].id,
		updates: {
			amount,
		},
	};
	const state = expenseReducer(expenses, action);
	expect(state[1].amount).toBe(amount);
});

// Test Case : Edit Expense with no id
test("Should edit an expense with id", () => {
	const amount = 4000;
	const action = {
		type: "EDIT_EXPENSE",
		id: -4,
		updates: {
			amount,
		},
	};
	const state = expenseReducer(expenses, action);
	expect(state).toEqual(expenses);
});
