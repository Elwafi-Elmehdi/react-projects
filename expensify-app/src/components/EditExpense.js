import React from "react";
import ExpenseForm from "./ExpenseForm";
import { connect } from "react-redux";
const EditExpensePage = (props) => {
	return (
		<div>
			<ExpenseForm />
		</div>
	);
};
export default connect()(EditExpensePage);
