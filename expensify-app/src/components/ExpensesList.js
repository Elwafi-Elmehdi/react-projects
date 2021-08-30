import React from "react";
import { connect } from "react-redux";
import ExpensesListItem from "./ExpensesListItem";
import selectExpenses from "../selectors/showExpenses";

const ExpensesList = (props) => (
	<div>
		{props.expenses.map((expense) => (
			<ExpensesListItem key={expense.id} expense={expense} />
		))}
	</div>
);

const mapStateToProps = (state) => ({
	expenses: selectExpenses(state.expenses, state.filters),
});

export default connect(mapStateToProps)(ExpensesList);
