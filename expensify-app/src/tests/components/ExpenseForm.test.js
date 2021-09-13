import React from "react";
import { shallow } from "enzyme";
import ExpenseForm from "../../components/ExpenseForm";
import { expenses } from "../selectors/expenses.test";
import moment from "moment";

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

test("Should get amount state",() => {
	const amount = "42.15"
	const wrapper = shallow(<ExpenseForm />)
	wrapper.find('input').at(1).simulate('change',{target:{value:amount}})
	expect(wrapper.state("amount")).toBe(amount)
})

test("Should get incorrect amount state",() => {
	const amount = "42.154"
	const wrapper = shallow(<ExpenseForm />)
	wrapper.find('input').at(1).simulate('change',{target:{value:amount}})
	expect(wrapper.state("amount")).not.toBe("")
})

test("Should set new state for onsubmit form",() => {
	const onSubmitSpy = jest.fn()
	const wrapper = shallow(<ExpenseForm expense={expenses[0]} onSubmit={onSubmitSpy} />)
	wrapper.find('form').simulate('submit',{
		preventDefault() {}
	})
	expect(wrapper.state('error')).toBe("")
	expect(onSubmitSpy).toHaveBeenLastCalledWith({
		title:expenses[0].title,
		note:expenses[0].note,
		createdAt:expenses[0].createdAt,
		amount:expenses[0].amount
	})
})

test("Should set new Date on change date ",() => {
	const wrapper = shallow(<ExpenseForm />)
	const now = moment()
	wrapper.find('SingleDatePicker').prop('onDateChange')(now)
	expect(wrapper.state('createdAt')).toEqual(now)
})