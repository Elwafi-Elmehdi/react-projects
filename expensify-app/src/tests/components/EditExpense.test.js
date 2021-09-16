import React from "react";
import {EditExpensePage} from "../../components/EditExpense";
import {shallow} from "enzyme";
import {expenses} from "../selectors/expenses.test";

let wrapper,editExpense,history,match

beforeEach(() => {
    match = {
        params: {
            id: expenses[0].id
        }
    }
    editExpense = jest.fn()
    history = { push: jest.fn()}
    wrapper = shallow(<EditExpensePage match={match}  onSubmit={editExpense} history={history}/>)
})

test("Should render Edit expense page",() => {
    expect(wrapper).toMatchSnapshot()
})

test("Should setup onSubmit",() => {
    wrapper.find('ExpenseForm').prop('onSubmit')(expenses[0])
    expect(history.push).toHaveBeenCalled()
})