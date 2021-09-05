import selectExpenses from "../../selectors/showExpenses";

const expenses = [
	{
		id: 1,
		title: "Hego",
		amount: 45.0,
		note: "Testing is awesome",
		createdAt: 7854,
	},
	{
		id: 2,
		title: "Car Payment",
		amount: 3000,
		note: "",
		createdAt: -7854,
	},
	{
		id: 3,
		amount: 700,
		title: "Real-state taxes",
		note: "",
		createdAt: 45,
	},
];

test("Shoud filter by text value", () => {
	const filters = {
		text: "a",
		sortBy: "date",
		startDate: 0,
		endDate: 0,
	};
	const action = selectExpenses(expenses, filters);
	expect(action).toEqual([
		{
			id: 3,
			amount: 700,
			title: "Real-state taxes",
			note: "",
			createdAt: 45,
		},
		{
			id: 2,
			title: "Car Payment",
			amount: 3000,
			note: "",
			createdAt: -7854,
		},
	]);
});
