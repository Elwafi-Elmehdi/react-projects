import React from "react";
import { connect } from "react-redux";
import { removeExpense } from "../actions/expenses";
import { Link } from "react-router-dom";

const ExpensesListItem = ({ dispatch, expense }) => (
	<div>
		<h3>{expense.title}</h3>
		<h3>{expense.createdAt}</h3>
		<h3>{expense.amount}</h3>
		<Link to={`/edit/${expense.id}`}>Edit</Link>
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
