import moment from "moment";

// Filter function
export default (expenses, { text, sortBy, startDate, endDate }) => {
	return expenses
		.filter((expense) => {
			const startMoment = moment(startDate);
			const endMoment = moment(endDate);
			const title = expense.title.toLowerCase();
			const textMatch = title.includes(text.toLowerCase());
			const startDateMatch = startDate
				? startMoment.isSameOrBefore(expense.createdAt)
				: true;
			const endDateMatch = endMoment
				? endMoment.isSameOrAfter(expense.createdAt)
				: true;

			return textMatch && startDateMatch && endDateMatch;
		})
		.sort((a, b) => {
			if (sortBy === "date") {
				return a.createdAt < b.createdAt ? 1 : -1;
			} else if (sortBy === "amount") {
				return a.amount < b.amount ? 1 : -1;
			}
		});
};
