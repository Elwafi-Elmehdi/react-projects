import React from "react";
import { Link } from "react-router-dom";

const ExpensesListItem = ({ expense }) => (
	<div>
		<Link to={`/edit/${expense.id}`}>
			<h3>{expense.title}</h3>
		</Link>
		<h3>{expense.createdAt}</h3>
		<h3>{expense.amount}</h3>
	</div>
);

export default ExpensesListItem;
