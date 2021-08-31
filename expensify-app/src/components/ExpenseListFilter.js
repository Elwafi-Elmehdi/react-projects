import React from "react";
import { connect } from "react-redux";
import { addTextFilter } from "../actions/filters";

const ExpenseListFilter = (props) => (
	<div>
		<input
			type="text"
			value={props.filters.text}
			onChange={(e) => {
				props.dispatch(addTextFilter(e.target.value));
			}}
		/>
	</div>
);

const mapStateToProps = (state) => ({
	filters: state.filters,
});

export default connect(mapStateToProps)(ExpenseListFilter);
