import React from "react";
import ExpenseForm from "./ExpenseForm";
import { connect } from "react-redux";
const EditExpensePage = (props) => {
	return (
		<div>
			<ExpenseForm
				onSubmit={(expense) => {
					console.log(props);
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
