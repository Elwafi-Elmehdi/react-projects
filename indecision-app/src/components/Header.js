import React from "react";
const Header = (props) => (
	<div className="header">
		<div className="container">
			<h1 className="header__title">{props.title}</h1>
			<h2 className="header__sub-title">{props.subTitle}</h2>
		</div>
	</div>
);

Header.defaultProps = {
	title: "some default value",
};
export default Header;
