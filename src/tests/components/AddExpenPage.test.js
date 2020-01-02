import React from 'react'
import { shallow } from 'enzyme'
import { AddExpenPage } from '../../components/AddExpenPage';
import expenses from '../fixtures/expenses'


let startAddExpenses, history, wrapper;

beforeEach(() => {
    startAddExpenses = jest.fn();
    history = { push: jest.fn() };
    wrapper = shallow(<AddExpenPage startAddExpenses={startAddExpenses} history={history} />);
})

test('should render AddExpenPage correctly', () => {
    expect(wrapper).toMatchSnapshot();
})

test('should handle onSubmit', () => {
    wrapper.find('ExpenseForm').prop('onSubmit')(expenses[1]);
    expect(history.push).toHaveBeenCalledWith('/');
    expect(startAddExpenses).toHaveBeenLastCalledWith(expenses[1]);
})