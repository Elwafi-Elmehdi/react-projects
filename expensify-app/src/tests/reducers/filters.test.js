import filersReducer from "../../reducers/filters";
import moment from "moment";

// Test Case : Default filer values
test("Should generate default values for filter", () => {
	const action = { type: "SORT_BY_DATE" };
	const state = filersReducer(undefined, action);
	expect(state).toEqual({
		text: "",
		sortBy: "date",
		startDate: moment().startOf("month"),
		endDate: moment().endOf("month"),
	});
});

// Test Case : Action sort by date
test("Should set sortBy to date", () => {
	const action = { type: "SORT_BY_DATE" };
	const initState = {
		text: "",
		sortBy: "amount",
		startDate: undefined,
		endDate: undefined,
	};
	const state = filersReducer(initState, action);
	expect(state.sortBy).toBe("date");
});

// Test Case : Set text filter
test("Should set text filter", () => {
	const action = { type: "SET_TEXT_FILTER", text: "bill" };
	const state = filersReducer(undefined, action);
	expect(state.text).toBe("bill");
});

// Test Case : set Start date filter
test("Should set start date filter", () => {
	const action = { type: "SET_START_DATE", date: moment().startOf("month") };
	const state = filersReducer(undefined, action);
	expect(state.startDate).toEqual(moment().startOf("month"));
});
