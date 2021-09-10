import React from "react";
import { ExpensesList } from "../../components/ExpensesList";
import { shallow } from "enzyme";
import { expenses } from "../selectors/expenses.test";

test("Should render expense list with expenses passed as props", () => {
	const wrapper = shallow(<ExpensesList expenses={expenses} />);
	expect(wrapper).toMatchSnapshot();
});
