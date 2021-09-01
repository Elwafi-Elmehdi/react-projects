import React from "react";
import moment from "moment";
import { SingleDatePicker } from "react-dates";
import "react-dates/lib/css/_datepicker.css";

export default class ExpenseForm extends React.Component {
	state = {
		description: "",
		amount: 0,
		note: "",
		createdAt: moment(),
		calenderFocused: false,
		error: "",
	};
	onSubmit = (e) => {
		e.preventDefault();
		if (!this.state.amount || !this.state.description) {
			this.setState(() => ({ error: "Please entre a valid expense" }));
		} else {
			this.setState(() => ({ error: "" }));
			this.props.onSubmit({
				title: this.state.description,
				note: this.state.note,
				amount: parseFloat(this.state.amount),
				createdAt: this.state.createdAt.valueOf(),
			});
		}
	};
	onFocusChange = ({ focused }) => {
		this.setState(() => ({ calenderFocused: focused }));
	};
	onDateChange = (createdAt) => {
		if (createdAt) {
			this.setState(() => ({ createdAt }));
		}
	};
	onChangeDescription = (e) => {
		const description = e.target.value;
		this.setState((state) => ({
			description,
		}));
	};
	onChangeNote = (e) => {
		const note = e.target.value;
		this.setState((state) => ({
			note,
		}));
	};
	onChangeAmount = (e) => {
		const amount = e.target.value;
		if (!amount || amount.match(/^\d{1,}(\.\d{0,2})?$/)) {
			this.setState(() => ({ amount }));
		}
	};
	render() {
		return (
			<div>
				{this.state.error && <p>{this.state.error}</p>}
				<form onSubmit={this.onSubmit}>
					<input
						type="text"
						value={this.state.description}
						placeholder="Title"
						autoFocus
						onChange={this.onChangeDescription}
					/>
					<input
						type="text"
						value={this.state.amount}
						placeholder="Amount"
						onChange={this.onChangeAmount}
					/>
					<SingleDatePicker
						date={this.state.createdAt}
						onDateChange={this.onDateChange}
						focused={this.state.calenderFocused}
						onFocusChange={this.onFocusChange}
						numberOfMonths={1}
						isOutsideRange={() => false}
					/>
					<textarea
						placeholder="Note"
						value={this.state.note}
						onChange={this.onChangeNote}
					></textarea>

					<button>Add Expense</button>
				</form>
			</div>
		);
	}
}
