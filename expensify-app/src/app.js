import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "normalize.css/normalize.css";
import "./styles/styles.scss";

const ExpenseDashboardPage = () => <div>this is from my dashboard cmp</div>;
const AddExpensePage = () => <div>this is from my Add Expense cmp</div>;
const HelpPage = () => <div>this is from Help page</div>;
const EditExpensePage = () => <div>this is from Edit Expense cmp</div>;
const NotFoundPage = () => <div>this is from Not Found page</div>;

const routes = (
	<BrowserRouter>
		<Switch>
			<Route path="/" exact={true} component={ExpenseDashboardPage} />
			<Route path="/create" component={AddExpensePage} />
			<Route path="/edit" component={EditExpensePage} />
			<Route path="/help" component={HelpPage} />
			<Route component={NotFoundPage} />
		</Switch>
	</BrowserRouter>
);
ReactDOM.render(routes, document.getElementById("app"));
