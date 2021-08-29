import React from "react";
import { connect } from "react-redux";

const ExpensesList = (props) => (
	<div>
		<p>Hello from Expenses list</p>
	</div>
);

const mapStateToProps = (state) => ({
	expenses: state.expenses,
	filters: state.filters,
});

export default connect(mapStateToProps)(ExpensesList);
