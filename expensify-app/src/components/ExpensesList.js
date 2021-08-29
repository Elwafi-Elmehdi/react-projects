import React from "react";
import { connect } from "react-redux";

const ExpensesList = (props) => (
	<div>
		<p>Hello from Expenses list</p>
	</div>
);

export default connect()(ExpensesList)

export default ExpensesList;
