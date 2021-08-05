import React from "react";

const Action = (props) => (
	<div>
		<button
			className="big-button"
			onClick={props.handleRandom}
			disabled={!props.hasOptions}
		>
			what should I do?
		</button>
	</div>
);

export default Action;
