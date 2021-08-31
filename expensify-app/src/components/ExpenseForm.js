import React from "react";
import moment from "moment";

const now = moment();
console.log(now.format("MMM"));

export default class ExpenseForm extends React.Component {
	state = {
		description: "",
		amount: 0,
		note: "",
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
		if (amount.match(/^\d*(\.\d{0,2})?$/)) {
			this.setState(() => ({ amount }));
		}
	};
	render() {
		return (
			<div>
				<form>
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
