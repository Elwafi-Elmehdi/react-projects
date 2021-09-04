import moment from "moment";

// Filter function
export default (expenses, { text, sortBy, startDate, endDate }) => {
	return expenses
		.filter((expense) => {
			const createdAt = moment(expense.createdAt);
			const title = expense.title.toLowerCase();
			const textMatch = title.includes(text.toLowerCase());
			const startDateMatch = startDate
				? startDate.isSameOrBefore(createdAt)
				: true;
			const endDateMatch = endDate
				? endDate.isSameOrAfter(createdAt)
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
