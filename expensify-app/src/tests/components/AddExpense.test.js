import React from "react";
import {shallow} from "enzyme";
import {AddExpensePage} from "../../components/AddExpense";

test("Should render AddExpensePage correclty",()=>{
    const onSubmit = jest.fn()
    const history = {push: jest.fn()}
    const wrapper = shallow(<AddExpensePage/>)

})