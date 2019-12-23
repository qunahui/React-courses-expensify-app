import React from 'react'
import { shallow } from 'enzyme'
import { AddExpenPage } from '../../components/AddExpenPage';
import expenses from '../fixtures/expenses'


let addExpense, history, wrapper;

beforeEach(() => {
    addExpense = jest.fn();
    history = { push: jest.fn() };
    wrapper = shallow(<AddExpenPage addExpense={addExpense} history={history} />);
})

test('should render AddExpenPage correctly', () => {
    expect(wrapper).toMatchSnapshot();
})

test('should handle onSubmit', () => {
    wrapper.find('ExpenseForm').prop('onSubmit')(expenses[1]);
    expect(history.push).toHaveBeenCalledWith('/');
    expect(addExpense).toHaveBeenLastCalledWith(expenses[1]);
})