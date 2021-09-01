import React from "react";
import ExpenseForm from "./ExpenseForm";
import { connect } from "react-redux";
const EditExpensePage = (props) => {
	return (
		<div>
			<ExpenseForm
				onSubmit={(expense) => {
					console.log(expense);
				}}
				expense={}
			/>
		</div>
	);
};
export default connect()(EditExpensePage);
