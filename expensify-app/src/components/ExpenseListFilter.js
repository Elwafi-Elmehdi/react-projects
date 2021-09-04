import React from "react";
import { connect } from "react-redux";
import moment from "moment";
import {
	addTextFilter,
	sortByAmount,
	sortByDate,
	setEndDate,
	setStartDate,
} from "../actions/filters";
import { DateRangePicker } from "react-dates";

class ExpenseListFilter extends React.Component {
	state = {
		focusedInput: null,
	};
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
					endDate={this.props.filters.endDate}
					startDate={this.props.filters.startDate}
					focusedInput={this.state.focusedInput}
					onDatesChange={({ startDate, endDate }) => {
						this.props.dispatch(setStartDate(startDate));
						this.props.dispatch(setEndDate(endDate));
					}}
					showClearDates={true}
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
