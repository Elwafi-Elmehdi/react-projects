import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import configureStore from "./store/configureStore";
import AppRouter from "./routers/AppRouter";
import { addExpense } from "./actions/expenses";

import "normalize.css/normalize.css";
import "./styles/styles.scss";
import "react-dates/lib/css/_datepicker.css";

const store = configureStore();
store.subscribe(() => console.log(store.getState()));

store.dispatch(addExpense({ title: "Rent bill", amount: 2500 }));
store.dispatch(addExpense({ title: "Car bill", amount: 3000 }));
store.dispatch(addExpense({ title: "Gas bill", amount: 200 }));

const jsx = (
	<Provider store={store}>
		<AppRouter />
	</Provider>
);
ReactDOM.render(jsx, document.getElementById("app"));
