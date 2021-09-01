import React from "react";
import ExpenseForm from "./ExpenseForm";
import { connect } from "react-redux";
import { editExpense, removeExpense } from "../actions/expenses";
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
			<button
				onClick={() => {
					props.dispatch(
						removeExpense({ id: props.match.params.id })
					);
					props.history.push("/");
				}}
			>
				Remove
			</button>
		</div>
	);
};
const mapStateToProps = (state) => ({ expenses: state.expenses });
export default connect(mapStateToProps)(EditExpensePage);
