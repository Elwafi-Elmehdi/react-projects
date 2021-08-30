import React from "react";

const ExpensesListItem = ({ expense }) => (
	<div>
		<h3>{expense.title}</h3>
		<h3>{expense.amount}</h3>
		<h3>{expense.createdAt}</h3>
	</div>
);

export default ExpensesListItem;
