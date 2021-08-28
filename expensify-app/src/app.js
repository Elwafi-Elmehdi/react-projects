import React from "react";
import ReactDOM from "react-dom";
import AppRouter from "./routers/AppRouter";
import configureStore from "./store/configureStore";
import showExpenses from "./selectors/showExpenses";
import { addExpense } from "./actions/expenses";
import { addTextFilter } from "./actions/filters";

import "normalize.css/normalize.css";
import "./styles/styles.scss";

const store = configureStore();

store.dispatch(addExpense({ title: "Rent bill", amount: 2500 }));
store.dispatch(addExpense({ title: "Car bill", amount: 3000 }));
store.dispatch(addTextFilter("car"));

const state = store.getState();
console.log(showExpenses(state.expenses, state.filters));

ReactDOM.render(<AppRouter />, document.getElementById("app"));
