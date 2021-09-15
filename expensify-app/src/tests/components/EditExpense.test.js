import React from "react";
import EditExpensePage from "../../components/EditExpense";
import {shallow} from "enzyme";
import {expenses} from "../selectors/expenses.test";

let wrapper,editExpense,history

beforeEach(() => {
    editExpense = jest.fn()
    history = { push: jest.fn()}
    wrapper = shallow(<EditExpensePage onSubmit={editExpense} history={history}/>)
})

test("Should render Edit expense page",() => {
    expect(wrapper).toMatchSnapshot()
})

test("Should setup onSubmit",() => {
    wrapper.find('button').simulate('click')
})