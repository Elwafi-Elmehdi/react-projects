import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => (
	<div>
		<h1>Expensify</h1>
		<NavLink activeClassName="active" to="/" exact={true}>
			Dashboard
		</NavLink>
		<NavLink activeClassName="active" to="/create">
			Create Expense
		</NavLink>
	</div>
);

export default Header;
