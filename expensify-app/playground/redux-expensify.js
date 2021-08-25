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
/*
    ADD_EXPENSE
    REMOVE_EXPENSE
    SET_TITLE
    SET_AMOUNT
    EDIT_EXPENSE
    SET_TEXT_FILTER
    SORT_BY_DATE
    SORT_BY_AMOUNT
    SET_START_DATE
    SET_END_DATE
*/

// Reducers

// Expense Reducer

const expenseInitState = [];

const expenseReducer = (state = expenseInitState, action) => {
	switch (action.type) {
		default:
			return state;
	}
};

// 
