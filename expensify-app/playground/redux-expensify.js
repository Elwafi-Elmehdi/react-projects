import { createStore, combineReducers } from "redux";
import { v4 as uuidv4 } from "uuid";

// Exemple of  the expensify app initial state

const initState = {
	expenses: [
		{
			id: "wsedtghj",
			title: "Abonnement",
			note: "khalass abo :D",
			amount: 450,
			createdAt: 0,
		},
	],
	filters: {
		text: "Abonnement",
		sortBy: "amount", // date,amount
		startDate: undefined,
		endDate: undefined,
	},
};

// Actions for Expensify

// ADD_EXPENSE
const addExpense = ({
	title = "no title",
	note = "",
	amount = 0,
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
const removeExpense = ({ id } = {}) => ({
	type: "REMOVE_EXPENSE",
	id,
});
// EDIT_EXPENSE
const editExpense = (id, updates) => ({
	type: "EDIT_EXPENSE",
	id,
	updates,
});
// SET_TEXT_FILTER
const addTextFilter = (text = "") => ({
	type: "SET_TEXT_FILTER",
	text,
});
// SORT_BY_DATE
const sortByDate = () => ({
	type: "SORT_BY_DATE",
});
// SORT_BY_AMOUNT
const sortByAmount = () => ({
	type: "SORT_BY_AMOUNT",
});
// SET_START_DATE
const setStartDate = (date = undefined) => ({
	type: "SET_START_DATE",
	date,
});
// SET_END_DATE
const setEndDate = (date = undefined) => ({
	type: "SET_END_DATE",
	date,
});

// Reducers

// Expense Reducer

const expenseInitState = [];

const expenseReducer = (state = expenseInitState, action) => {
	// Never mutate the state , always return a new state
	switch (action.type) {
		case "ADD_EXPENSE":
			return [...state, action.expense];
		case "REMOVE_EXPENSE":
			return state.filter(({ id }) => id !== action.id);
		case "EDIT_EXPENSE":
			return state.map((expense) => {
				if (action.id === expense.id) {
					return {
						...expense,
						...action.updates,
					};
				} else {
					return expense;
				}
			});
		default:
			return state;
	}
};

// Filters Reducer

const filtersInitState = {
	text: "",
	sortBy: "date",
	startDate: undefined,
	endDate: undefined,
};

const filtersReducer = (state = filtersInitState, action) => {
	switch (action.type) {
		case "SET_TEXT_FILTER":
			return {
				...state,
				text: action.text,
			};
		case "SORT_BY_DATE":
			return { ...state, sortBy: "date" };
		case "SORT_BY_AMOUNT":
			return { ...state, sortBy: "amount" };
		case "SET_START_DATE":
			return { ...state, startDate: action.date };
		case "SET_END_DATE":
			return { ...state, endDate: action.date };

		default:
			return state;
	}
};

// Lets create a  store with combined reducers
// because its easy to manage a part of a state with a reducer than using a single reducer

const store = createStore(
	combineReducers({
		expenses: expenseReducer,
		filters: filtersReducer,
	})
);
// Filter function
const showVisibleExpenses = (
	expenses,
	{ text, sortBy, startDate, endDate }
) => {
	return expenses.filter((expense) => {
		const title = expense.title.toLowerCase();
		const textMatch = title.includes(text.toLowerCase());
		const startDateMatch =
			typeof startDate !== "number" || expense.createdAt >= startDate;
		const endDateMatch =
			typeof endDate !== "number" || expense.createdAt <= endDate;

		return textMatch && startDateMatch && endDateMatch;
	});
};

// Every time the state changed the callbackc will be excuted
const unsubscribe = store.subscribe(() => {
	const state = store.getState();
	console.log(showVisibleExpenses(state.expenses, state.filters));
});

// Adding a expense to the state
const expenseOne = store.dispatch(
	addExpense({ title: "Hello ps", createdAt: 400 })
);
const expenseTwo = store.dispatch(
	addExpense({ title: "9hiwa ps", amount: 120, createdAt: 70 })
);
const expenseThree = store.dispatch(
	addExpense({ title: "Unix", amount: 754, createdAt: -200 })
);

// // Lets remove an expense
// store.dispatch(removeExpense({ id: expenseTwo.expense.id }));
// // Lets edit an expense
// store.dispatch(editExpense(expenseOne.expense.id, { amount: 4560 }));
// // Lets Add Text filter
store.dispatch(addTextFilter("PS"));
// store.dispatch(addTextFilter());
// // Lets sort by amount
// store.dispatch(sortByAmount());
// // Lets sort by date
// store.dispatch(sortByDate());

// // Lets set start date
// store.dispatch(setStartDate(4000));
// // Lets set end date
// store.dispatch(setEndDate(7));
// store.dispatch(setEndDate());
