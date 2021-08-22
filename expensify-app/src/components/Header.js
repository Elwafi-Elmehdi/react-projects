import React from "react";
import { BrowserRouter, Route, Switch, Link, NavLink } from "react-router-dom";

const Header = () => (
	<div>
		<h1>Expensify</h1>
		<NavLink activeClassName="active" to="/" exact={true}>
			Dashboard
		</NavLink>
		<NavLink activeClassName="active" to="/create">
			Create Expense
		</NavLink>
		<NavLink activeClassName="active" to="/edit">
			Edit Expense
		</NavLink>
		<NavLink activeClassName="active" to="/help">
			Help
		</NavLink>
	</div>
);

export default Header;
