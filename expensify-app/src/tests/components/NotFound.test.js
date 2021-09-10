import React from "react";
import NotFoundPage from "../../components/NotFound";
import { shallow } from "enzyme";

test("Should render not found page correctly", () => {
	const wrapper = shallow(<NotFoundPage />);
	expect(wrapper).toMatchSnapshot();
});
