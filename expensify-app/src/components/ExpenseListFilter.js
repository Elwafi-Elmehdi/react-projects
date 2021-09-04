import React from "react";
import { connect } from "react-redux";
import {
	addTextFilter,
	sortByAmount,
	sortByDate,
	setEndDate,
	setStartDate,
} from "../actions/filters";
import { DateRangePicker } from "react-dates";
import moment from "moment";

class ExpenseListFilter extends React.Component {
	state = {
		startDate: moment().startOf("month"),
		endDate: moment().endOf("month"),
		focusedInput: null,
	};
	onDatesChange({ startDate, endDate }) {
		this.props.dispatch(setStartDate(startDate))
	}
	render() {
		return (
			<div>
				<input
					type="text"
					value={this.props.filters.text}
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
				</select>
				<DateRangePicker
					endDate={this.state.endDate}
					startDate={this.state.startDate}
					focusedInput={this.state.focusedInput}
					onDatesChange={this.onDatesChange}
					onFocusChange={(focusedInput) =>
						this.setState({ focusedInput })
					}
					numberOfMonths={1}
					isOutsideRange={() => false}
				/>
			</div>
		);
	}
}

const mapStateToProps = (state) => ({
	filters: state.filters,
});

export default connect(mapStateToProps)(ExpenseListFilter);
