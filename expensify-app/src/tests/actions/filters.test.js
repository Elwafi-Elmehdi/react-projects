import moment from "moment";
import {
	addTextFilter,
	setEndDate,
	setStartDate,
	sortByAmount,
	sortByDate,
} from "../../actions/filters";

test("Should set start end filter", () => {
	const action = setStartDate(moment(0));
	expect(action).toEqual({
		type: "SET_START_DATE",
		date: moment(0),
	});
});
