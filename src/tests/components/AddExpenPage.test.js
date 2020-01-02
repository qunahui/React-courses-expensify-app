import React from 'react'
import { shallow } from 'enzyme'
import { AddExpenPage } from '../../components/AddExpenPage';
import expenses from '../fixtures/expenses'


let startAddExpense, history, wrapper;

beforeEach(() => {
    startAddExpense = jest.fn();
    history = { push: jest.fn() };
    wrapper = shallow(<AddExpenPage startAddExpense={startAddExpense} history={history} />);
})

test('should render AddExpenPage correctly', () => {
    expect(wrapper).toMatchSnapshot();
})

test('should handle onSubmit', () => {
    wrapper.find('ExpenseForm').prop('onSubmit')(expenses[1]);
    expect(history.push).toHaveBeenCalledWith('/');
    expect(startAddExpense).toHaveBeenLastCalledWith(expenses[1]);
})