// React Test Renderer npm module used for rendering cmps in files js
// import ReactShallowRenderer from "react-test-renderer/shallow";
import React from "react";
import Header from "../../components/Header";
import toJson from "enzyme-to-json";

import { shallow } from "enzyme";

test("Should render header component", () => {
	const wrapper = shallow(<Header />);
	expect(toJson(wrapper)).toMatchSnapshot();
	// expect(wrapper.find("h1").text()).toBe("Expensify");
	// const renderer = new ReactShallowRenderer();
	// renderer.render(<Header />);
	// const result = renderer.getRenderOutput();
	// expect(result).toMatchSnapshot();
});
