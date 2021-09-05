import moment from "moment";
import {
	addTextFilter,
	setEndDate,
	setStartDate,
	sortByAmount,
	sortByDate,
} from "../../actions/filters";

test("Should set start date filter", () => {
	const action = setStartDate(moment(0));
	expect(action).toEqual({
		type: "SET_START_DATE",
		date: moment(0),
	});
});

test("Should set end date filter", () => {
	const action = setEndDate(moment(0));
	expect(action).toEqual({
		type: "SET_END_DATE",
		date: moment(0),
	});
});

test("Should set a text filter ", () => {
	const action = addTextFilter("Bill");
	expect(action).toEqual({
		type: "SET_TEXT_FILTER",
		text: "Bill",
	});
});
