import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch, Link } from "react-router-dom";
import "normalize.css/normalize.css";
import "./styles/styles.scss";

const ExpenseDashboardPage = () => <div>this is from my dashboard cmp</div>;
const AddExpensePage = () => <div>this is from my Add Expense cmp</div>;
const HelpPage = () => <div>this is from Help page</div>;
const EditExpensePage = () => <div>this is from Edit Expense cmp</div>;
const NotFoundPage = () => (
	<div>
		404! <Link to="/">Go Home</Link>
	</div>
);
const Header = () => (
	<div>
		<h1>Expensify</h1>
		<Link to="/">Dashboard</Link>
		<Link to="/create">Create Expense</Link>
		<Link to="/edit">Edit Expense</Link>
		<Link to="/help">Help</Link>
	</div>
);

const routes = (
	<BrowserRouter>
		<div>
			<Header />
			<Switch>
				<Route path="/" exact={true} component={ExpenseDashboardPage} />
				<Route path="/create" component={AddExpensePage} />
				<Route path="/edit" component={EditExpensePage} />
				<Route path="/help" component={HelpPage} />
				<Route component={NotFoundPage} />
			</Switch>
		</div>
	</BrowserRouter>
);
ReactDOM.render(routes, document.getElementById("app"));
