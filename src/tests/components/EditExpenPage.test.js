import React from 'react'
import { shallow } from 'enzyme'
import { EditExpenPage } from '../../components/EditExpenPage'
import expenses from '../fixtures/expenses'

let startEditExpense, startRemoveExpense, history, wrapper

beforeEach(() => {
    startEditExpense = jest.fn();
    startRemoveExpense = jest.fn();
    history = { push: jest.fn() };
    wrapper = shallow(
        <EditExpenPage
            expense={expenses[1]}
            startEditExpense={startEditExpense}
            startRemoveExpense={startRemoveExpense}
            history={history}
        />
    );
});

test('should render EditExpenPage', () => {
    expect(wrapper).toMatchSnapshot();
})

test('should handle startEditExpense', () => {
    const edit = {
        note: 'this is edit note'
    }
    wrapper.find('ExpenseForm').prop('onSubmit')(edit);
    expect(history.push).toHaveBeenCalledWith('/');
    expect(startEditExpense).toHaveBeenLastCalledWith(expenses[1].id, edit);
})

test('should handle startRemoveExpense', () => {
    wrapper.find('button').simulate('click');
    expect(history.push).toHaveBeenCalledWith('/');
    expect(startRemoveExpense).toHaveBeenCalledWith({
        id: expenses[1].id
    });
});
