import React from "react";

export default class AddOption extends React.Component {
	state = {
		error: undefined,
	};

	handleAddOption = (e) => {
		e.preventDefault();
		const option = e.target.elements.option.value.trim();
		const error = this.props.addOption(option);
		if (!error) {
			e.target.elements.option.value = "";
		}
		this.setState(() => ({
			error,
		}));
	};
	render() {
		return (
			<form onSubmit={this.handleAddOption}>
				{this.state.error && (
					<p className="add-option-error">{this.state.error}</p>
				)}
				<input type="text" name="option" />
				<button className="button">Add Option</button>
			</form>
		);
	}
}
