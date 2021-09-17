import React from "react";
import ExpenseForm from "./ExpenseForm";
import { connect } from "react-redux";
import { editExpense, removeExpense } from "../actions/expenses";

export class EditExpensePage extends React.Component {
	editExpense = (expense) => {
		this.props.editExpense(expense);
		this.props.history.push("/");
	}
	removeExpense = () => {
		this.props.removeExpense()
		this.props.history.push("/");
	}
	render() {
		return (
			<div>
				<ExpenseForm
					onSubmit={this.editExpense}
					expense={this.props.expenses.find(
						(expense) => expense.id === this.props.match.params.id
					)}
				/>
				<button
					onClick={this.removeExpense}
				>
					Remove
				</button>
			</div>
		);
	}
}
const mapStateToProps = (state) => ({ expenses: state.expenses });

const mapDispatchToProps = (dispatch,props) => {
	return {
		editExpense: (expense) => {
			dispatch(editExpense(props.match.params.id, expense));
		},
		removeExpense: () => {
			dispatch(
				removeExpense({ id: props.match.params.id })
			);
		}
	}
}
export default connect(mapStateToProps,mapDispatchToProps)(EditExpensePage);
