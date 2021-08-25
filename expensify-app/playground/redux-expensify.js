import { createStore, combineReducers } from "redux";

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
const addExpense = (
    {
        
    }
    = {}
) => ({
	type: "ADD_EXPENSE",
});
// REMOVE_EXPENSE
// SET_TITLE
// SET_AMOUNT
// EDIT_EXPENSE
// SET_TEXT_FILTER
// SORT_BY_DATE
// SORT_BY_AMOUNT
// SET_START_DATE
// SET_END_DATE

// Reducers

// Expense Reducer

const expenseInitState = [];

const expenseReducer = (state = expenseInitState, action) => {
	switch (action.type) {
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

console.log(store.getState());
