import React from "react";
import Option from "./Option";

const Options = (props) => (
	<div>
		<div className="widget-header">
			<h3 className="options__header">Your options</h3>
			<button className="button button--link" onClick={props.deleteAll}>
				Remove All Options
			</button>
		</div>
		{props.options <= 0 && (
			<p className="widget__message">
				Please add an option to get started
			</p>
		)}

		{props.options.map((elem, index) => (
			<Option
				count={index + 1}
				key={elem}
				optionText={elem}
				deleteOne={props.deleteOne}
			/>
		))}
	</div>
);

export default Options;
