import React from "react";

const Option = (props) => (
	<div className="option option__text">
		<p className="option__text">
			{props.count}. {props.optionText}
		</p>
		<button
			className="button button--link"
			onClick={(e) => props.deleteOne(props.optionText)}
		>
			remove
		</button>
	</div>
);

export default Option;
