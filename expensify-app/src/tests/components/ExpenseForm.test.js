import React from "react";
import { shallow } from "enzyme";
import ExpenseForm from "../../components/ExpenseForm";
import { expenses } from "../selectors/expenses.test";

test("Should render expense form correctly", () => {
	const wrapper = shallow(<ExpenseForm />);
	expect(wrapper).toMatchSnapshot();
});

test("Should render expense form with expense prop", () => {
	const wrapper = shallow(<ExpenseForm expense={expenses[1]} />);
	expect(wrapper).toMatchSnapshot();
});

test("Should render error msg",() => {
	const wrapper = shallow(<ExpenseForm />)
	expect(wrapper).toMatchSnapshot();
	wrapper.find('form').simulate('submit',{
		preventDefault() {}
	})
	expect(wrapper.state('error').length).toBeGreaterThan(0)
	expect(wrapper).toMatchSnapshot();
})

test("Should get desc state",() => {
	const desc = "New Description"
	const wrapper = shallow(<ExpenseForm />);
	wrapper.find('input').at(0).simulate('change',{target: {value:desc}});
	expect(wrapper.state('description')).toBe(desc)
})

test("Should get note state",() => {
	const note = "New Note"
	const wrapper = shallow(<ExpenseForm />)
	wrapper.find('textarea').simulate('change',{target:{value:note}})
	expect(wrapper.state('note')).toBe(note)
})