import moment from "moment";
import {
	addTextFilter,
	setEndDate,
	setStartDate,
	sortByAmount,
	sortByDate,
} from "../../actions/filters";

// Test Case : START DATE FILTER

test("Should set start date filter", () => {
	const action = setStartDate(moment(0));
	expect(action).toEqual({
		type: "SET_START_DATE",
		date: moment(0),
	});
});
// Test Case : END DATE FILTER

test("Should set end date filter", () => {
	const action = setEndDate(moment(0));
	expect(action).toEqual({
		type: "SET_END_DATE",
		date: moment(0),
	});
});

// Test Case : TEXT FILTER
test("Should set a text filter ", () => {
	const action = addTextFilter("Bill");
	expect(action).toEqual({
		type: "SET_TEXT_FILTER",
		text: "Bill",
	});
});

// Test Case : TEXT FILTER DEFAULT
test("Should set a text filter ", () => {
	const action = addTextFilter();
	expect(action).toEqual({
		type: "SET_TEXT_FILTER",
		text: "",
	});
});

// Test Case : SORT BY AMOUNT
test("Should set  sortBy to amount", () => {
	const action = sortByAmount();
	expect(action).toEqual({
		type: "SORT_BY_AMOUNT",
	});
});

// Test Case : SORT BY DATE
test("Should set sortBy to date", () => {
	const action = sortByDate();
	expect(action).toEqual({
		type: "SORT_BY_DATE",
	});
});
