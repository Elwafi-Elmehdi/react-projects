import React from "react";
import { connect } from "react-redux";
import ExpensesListItem from "./ExpensesListItem";
import selectExpenses from "../selectors/showExpenses";

const ExpensesList = (props) => (
	<div>
		{props.expenses.length !== 0 ? (
			props.expenses.map((expense) => (
				<ExpensesListItem key={expense.id} expense={expense} />
			))
		) : (
			<p>No Expenses found.</p>
		)}
		{}
	</div>
);

const mapStateToProps = (state) => ({
	expenses: selectExpenses(state.expenses, state.filters),
});

export default connect(mapStateToProps)(ExpensesList);
