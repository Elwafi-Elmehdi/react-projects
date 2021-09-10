import React from "react";
import ExpensesListItem from "../../components/ExpensesListItem";
import { shallow } from "enzyme";
import { expenses } from "../selectors/expenses.test";

test("Should render expenselist item with props", () => {
	const wrapper = shallow(<ExpensesListItem expense={expenses[1]} />);
	expect(wrapper).toMatchSnapshot();
});
