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

// Admin Warning HOC

const withAdminWarning = (WrappedComponent) => {
	return (props) => (
		<div>
			{props.isAdmin && <p>this from an admin</p>}
			<WrappedComponent {...props} />
		</div>
	);
};

const Auth = (props) => <h1>Hey {props.name}</h1>;

// Auth Warning HOC

const withAuth = (WrappedComponent) => {
	return (props) => (
		<div>
			{!props.isAuth && <p>Please authenticate.</p>}
			{props.isAuth && <WrappedComponent {...props} />}
		</div>
	);
};

const AdminInfo = withAdminWarning(Info);

const AuthInfo = withAuth(Info);

ReactDOM.render(
	<AuthInfo isAuth={false} name="mehdi" />,
	document.getElementById("app")
);
