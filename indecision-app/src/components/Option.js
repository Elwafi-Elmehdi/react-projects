import React from "react";

const Option = (props) => (
	<div>
		<p key={props.optionText}>{props.optionText}</p>
		<button
			className="button button--link"
			onClick={(e) => props.deleteOne(props.optionText)}
		>
			remove
		</button>
	</div>
);

export default Option;
