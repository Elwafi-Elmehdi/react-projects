import React from "react";
import Option from "./Option";

const Options = (props) => (
	<div>
		<button className="button button--link" onClick={props.deleteAll}>
			Remove All Options
		</button>
		{props.options.map((elem) => (
			<Option key={elem} optionText={elem} deleteOne={props.deleteOne} />
		))}
	</div>
);

export default Options;
