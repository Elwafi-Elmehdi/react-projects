import React from "react";
import { connect } from "react-redux";
import { removeExpense } from "../actions/expenses";

const ExpensesListItem = (props) => (
	<div>
		<h3>{props.expense.title}</h3>
		<h3>{props.expense.createdAt}</h3>
		<h3>{props.expense.amount}</h3>
		<button
			onSubmit={(e) => {
				props.dispatch(removeExpense(props.expense.id));
			}}
		>
			Remove
		</button>
	</div>
);

const mapStateToProps = (state) => ({});

export default connect(mapStateToProps)(ExpensesListItem);
