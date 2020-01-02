import React from 'react'
import { shallow } from 'enzyme'
import { EditExpenPage } from '../../components/EditExpenPage'
import expenses from '../fixtures/expenses'

let editExpense, startRemoveExpense, history, wrapper

beforeEach(() => {
    editExpense = jest.fn();
    startRemoveExpense = jest.fn();
    history = { push: jest.fn() };
    wrapper = shallow(
        <EditExpenPage
            expense={expenses[1]}
            editExpense={editExpense}
            startRemoveExpense={startRemoveExpense}
            history={history}
        />
    );
});

test('should render EditExpenPage', () => {
    expect(wrapper).toMatchSnapshot();
})

test('should handle editExpenPage', () => {
    const edit = {
        note: 'this is edit note'
    }
    wrapper.find('ExpenseForm').prop('onSubmit')(edit);
    expect(history.push).toHaveBeenCalledWith('/');
    expect(editExpense).toHaveBeenLastCalledWith(expenses[1].id, edit);
})

test('should handle startRemoveExpense', () => {
    wrapper.find('button').simulate('click');
    expect(history.push).toHaveBeenCalledWith('/');
    expect(startRemoveExpense).toHaveBeenCalledWith({
        id: expenses[1].id
    });
});
