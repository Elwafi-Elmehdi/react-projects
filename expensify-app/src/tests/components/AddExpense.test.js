import React from "react";
import {shallow} from "enzyme";
import {AddExpensePage} from "../../components/AddExpense";
import {expenses} from "../selectors/expenses.test";

let wrapper,onSubmit,history;

beforeEach(()=>{
    onSubmit = jest.fn()
    history = {push: jest.fn()}
    wrapper = shallow(<AddExpensePage onSubmit={onSubmit} history={history}/>)
})

test("Should render AddExpensePage correctly",()=>{
    expect(wrapper).toMatchSnapshot()
})

test("Should render onSubmit",() => {
    wrapper.find('ExpenseForm').prop('onSubmit')(expenses[0])
    expect(history.push).toHaveBeenCalledWith('/')
    expect(onSubmit).toHaveBeenCalledWith(expenses[0])
})