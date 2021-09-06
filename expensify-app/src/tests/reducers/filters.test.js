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
