// Higher Order Component (HOC) a component that renders another component
// Reuse code
// Render hijacking
// Props manipulation
// Abstract state

import React from "react";
import ReactDOM from "react-dom";

const Info = (props) => (
	<div>
		<h1>Info</h1>
		<p>This info is : {props.info}</p>
	</div>
);

const AdminInfo = (props) => {
	return (props) => (
		<div>
			{props.isAdmin && <p>this from an admin</p>}
			<Info />
		</div>
	);
};

ReactDOM.render(<Info info="Test" />, document.getElementById("app"));
