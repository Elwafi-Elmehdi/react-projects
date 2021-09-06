import showExpenses from "../../selectors/showExpenses";
import selectExpenses from "../../selectors/showExpenses";
import moment from "moment";

const expenses = [
	{
		id: 1,
		title: "Hego",
		amount: 45.0,
		note: "Testing is awesome",
		createdAt: 78542,
	},
	{
		id: 2,
		title: "Car Payment",
		amount: 3000,
		note: "",
		createdAt: moment(0).subtract(4, "day").valueOf(),
	},
	{
		id: 3,
		amount: 700,
		title: "Real-state taxes",
		note: "",
		createdAt: moment(0).add(7, "days").valueOf(),
	},
];

// Test Case : Filter by text
test("Shoud filter by text value", () => {
	const filters = {
		text: "a",
		sortBy: "date",
		startDate: 0,
		endDate: 0,
	};
	const action = selectExpenses(expenses, filters);
	expect(action).toEqual([expenses[2], expenses[1]]);
});

// Test Case : Filter by startDate
test("Should filter by start date", () => {
	const filters = {
		text: "",
		sortBy: "amount",
		startDate: moment(0),
		endDate: 0,
	};
	const result = showExpenses(expenses, filters);
	expect(result).toEqual([expenses[2], expenses[0]]);
});

// Test Case : Filter by endDate
test("Should filter by end date", () => {
	const filters = {
		text: "",
		sortBy: "date",
		startDate: 0,
		endDate: moment(0).add(1, "day"),
	};
	const result = showExpenses(expenses, filters);
	expect(result).toEqual([expenses[0], expenses[1]]);
});
// Test Case : filter by date
test("Should filter by start date", () => {
	const filters = {
		text: "",
		sortBy: "date",
		startDate: 0,
		endDate: 0,
	};
	const result = showExpenses(expenses, filters);
	expect(result).toEqual([expenses[2], expenses[0], expenses[1]]);
});
