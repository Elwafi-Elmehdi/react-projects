import React from "react";
import { connect } from "react-redux";
import { addTextFilter, sortByAmount, sortByDate } from "../actions/filters";
import { DateRangePicker } from "react-dates";
import moment from "moment";

class ExpenseListFilter extends React.Component {
	state = {
		startDate: moment().startOf("month"),
		endDate: moment().endOf("month"),
		focusedInput: null,
	};
	render() {
		return (
			<div>
				<input
					type="text"
					value={props.filters.text}
					onChange={(e) => {
						this.props.dispatch(addTextFilter(e.target.value));
					}}
				/>
				<select
					value={this.props.filters.sortBy}
					onChange={(e) => {
						if (e.target.value === "date") {
							this.props.dispatch(sortByDate());
						} else if (e.target.value === "amount") {
							this.props.dispatch(sortByAmount());
						}
					}}
				>
					<option value="date">Date</option>
					<option value="amount">Amount</option>
					<DateRangePicker
						endDate={this.state.endDate}
						startDate={this.state.startDate}
						focusedInput={this.state.focusedInput}
						onDatesChange={({ startDate, endDate }) =>
							this.setState({ startDate, endDate })
						}
						onFocusChange={(focusedInput) =>
							this.setState({ focusedInput })
						}
					/>
				</select>
			</div>
		);
	}
}

const mapStateToProps = (state) => ({
	filters: state.filters,
});

export default connect(mapStateToProps)(ExpenseListFilter);
