// React Test Renderer npm module used for rendering cmps in files js
import React from "react";
import ReactShallowRenderer from "react-test-renderer/shallow";
import Header from "../../components/Header";

test("Should render header component", () => {
	const renderer = new ReactShallowRenderer();
	renderer.render(<Header />);
	console.log(renderer.getRenderOutput());
});
