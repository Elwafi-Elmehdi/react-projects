import React from "react";

import AddOption from "./AddOption";
import Header from "./Header";
import Options from "./Options";
import Action from "./Action";
import OptionModal from "./OptionModal";

export default class IndicisionApp extends React.Component {
	state = {
		options: [],
		selectedOption: undefined,
	};

	// Component Life Cycle Methodes

	componentDidMount = () => {
		try {
			const json = localStorage.getItem("options");
			const options = JSON.parse(json);
			if (options) {
				this.setState(() => ({ options }));
			}
		} catch (error) {}
	};

	componentDidUpdate = (prevProps, prevState) => {
		if (prevState.options.length !== this.state.options.length) {
			const json = JSON.stringify(this.state.options);
			localStorage.setItem("options", json);
		}
	};

	// App functionality methods

	handleDeleteOne = (option) => {
		console.log(option, " deleted");
		this.setState((prevState) => ({
			options: prevState.options.filter((elem) => elem !== option),
		}));
	};

	handleAddOption = (option) => {
		if (!option) {
			return "Entre a valid option";
		} else if (this.state.options.indexOf(option) > -1) {
			return "Option already exists on the liste.";
		} else {
			this.setState((preState) => ({
				options: preState.options.concat([option]),
			}));
		}
	};

	handleSelectedOption = () => this.setState(() => ({ selectedOption: "" }));

	handleRandom = () => {
		const randomNum = Math.floor(Math.random() * this.state.options.length);
		const option = this.state.options[randomNum];
		this.setState(() => ({
			selectedOption: option,
		}));
	};

	handleDeleteAll = () => {
		this.setState(() => ({ options: [] }));
	};

	render() {
		const title = "Indicision";
		const subTitle = "Pute your life in the hands of a computer";
		return (
			<div>
				<Header title={title} subTitle={subTitle} />
				<div className="container">
					<Action
						hasOptions={this.state.options.length > 0}
						handleRandom={this.handleRandom}
					/>
					<div className="widget">
						<Options
							deleteAll={this.handleDeleteAll}
							options={this.state.options}
							deleteOne={this.handleDeleteOne}
						/>
						<AddOption addOption={this.handleAddOption} />
						<OptionModal
							handleSelectedOption={this.handleSelectedOption}
							selectedOption={this.state.selectedOption}
						/>
					</div>
				</div>
			</div>
		);
	}
}
