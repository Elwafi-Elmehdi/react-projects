import { v4 as uuidv4 } from "uuid";

// Actions for Expensify

// ADD_EXPENSE
export const addExpense = ({
	title = "no title",
	note = "",
	amount = 0.0,
	createdAt = 0,
} = {}) => ({
	type: "ADD_EXPENSE",
	expense: {
		id: uuidv4(),
		title,
		note,
		amount,
		createdAt,
	},
});

// REMOVE_EXPENSE
export const removeExpense = ({ id } = {}) => ({
	type: "REMOVE_EXPENSE",
	id,
});
// EDIT_EXPENSE
export const editExpense = (id, updates) => ({
	type: "EDIT_EXPENSE",
	id,
	updates,
});
