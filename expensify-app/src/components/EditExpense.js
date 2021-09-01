import React from "react";
import ExpenseForm from "./ExpenseForm";
import { connect } from "react-redux";
import { editExpense } from "../actions/expenses";
const EditExpensePage = (props) => {
	return (
		<div>
			<ExpenseForm
				onSubmit={(expense) => {
					props.dispatch(editExpense(props.match.params.id, expense));
					props.history.push("/");
				}}
				expense={props.expenses.find(
					(expense) => expense.id === props.match.params.id
				)}
			/>
		</div>
	);
};
const mapStateToProps = (state) => ({ expenses: state.expenses });
export default connect(mapStateToProps)(EditExpensePage);
