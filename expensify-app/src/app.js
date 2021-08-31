import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import configureStore from "./store/configureStore";
import showExpenses from "./selectors/showExpenses";

import AppRouter from "./routers/AppRouter";
import { addExpense } from "./actions/expenses";

import "normalize.css/normalize.css";
import "./styles/styles.scss";

const store = configureStore();
const state = store.getState();

store.dispatch(addExpense({ title: "Rent bill", amount: 2500 }));
store.dispatch(addExpense({ title: "Car bill", amount: 3000 }));
store.dispatch(addExpense({ title: "Gas bill", amount: 200 }));

console.log(showExpenses(state.expenses, state.filters));

const jsx = (
	<Provider store={store}>
		<AppRouter />
	</Provider>
);

ReactDOM.render(jsx, document.getElementById("app"));
