import React from "react";
import { connect } from "react-redux";
import { addTextFilter, sortByAmount, sortByDate } from "../actions/filters";

const ExpenseListFilter = (props) => (
	<div>
		<input
			type="text"
			value={props.filters.text}
			onChange={(e) => {
				props.dispatch(addTextFilter(e.target.value));
			}}
		/>
		<select
			value={props.filters.sortBy}
			onChange={(e) => {
				if (e.target.value === "date") {
					props.dispatch(sortByDate());
				} else if (e.target.value === "amout") {
					props.dispatch(sortByAmount());
				}
			}}
		>
			<option value="date">Date</option>
			<option value="amount">Amount</option>
		</select>
	</div>
);

const mapStateToProps = (state) => ({
	filters: state.filters,
});

export default connect(mapStateToProps)(ExpenseListFilter);
