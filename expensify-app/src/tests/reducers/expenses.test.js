import expenseReducer from "../../reducers/expenses";
import moment from "moment";

const expenses = [
	{ id: 78, title: "Hehi 1" },
	{ id: 77, title: "Hehi 8" },
];

// Test Case : Remove expense
test("Should remove an expense by id", () => {
	const action = { type: "REMOVE_EXPENSE", id: 78 };
	const state = expenseReducer(expenses, action);
	expect(state).toEqual([expenses[1]]);
});
