import React from "react";
import { connect } from "react-redux";
import { removeExpense } from "../actions/expenses";

const ExpensesListItem = ({ dispatch, expense }) => (
	<div>
		<h3>{expense.title}</h3>
		<h3>{expense.createdAt}</h3>
		<h3>{expense.amount}</h3>
		<button
			onClick={() => {
				dispatch(removeExpense({ id: expense.id }));
			}}
		>
			Remove
		</button>
	</div>
);

export default connect()(ExpensesListItem);
