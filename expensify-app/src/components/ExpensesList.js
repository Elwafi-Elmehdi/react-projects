import React from "react";
import { connect } from "react-redux";
import ExpensesListItem from "./ExpensesListItem";

const ExpensesList = (props) => (
	<div>
		{props.expenses.map((expense) => (
			<ExpensesListItem key={expense.id} expense={expense} />
		))}
	</div>
);

const mapStateToProps = (state) => ({
	expenses: state.expenses,
	filters: state.filters,
});

export default connect(mapStateToProps)(ExpensesList);
