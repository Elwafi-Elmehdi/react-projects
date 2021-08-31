import React from "react";

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
						type="number"
						value={this.state.amount}
						placeholder="Amount"
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
