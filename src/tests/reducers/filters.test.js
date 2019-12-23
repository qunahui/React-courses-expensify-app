import filtersReducer from '../../reducers/filters';
import moment from 'moment'


test('should setup default filters values', () => {
    const state = filtersReducer(undefined, { type: '@@INIT' });
    expect(state).toEqual({
        text: '',
        sortBy: 'date',
        startDate: moment().startOf('month'),
        endDate: moment().endOf('month')
    });
});

test('should set sortBy to amount', () => {
    const state = filtersReducer(undefined, { type: 'SORT_BY_AMOUNT' });
    expect(state.sortBy).toBe('amount');
});

test('should set sortBy to date', () => {
    const currentState = {
        text: '',
        startDate: undefined,
        endDate: undefined,
        sortBy: 'amount'
    };
    const action = { type: 'SORT_BY_DATE' };
    const state = filtersReducer(currentState, action);

    expect(state.sortBy).toBe('date');
});

test('should set text filters', () => {
    const text = 'this is my filter';

    const action = { type: 'SET_TEXT_FILTERS', text };

    const state = filtersReducer(undefined, action);

    expect(state.text).toBe('this is my filter');
});

test('should set startDate filter', () => {
    const startDate = moment().add(3, 'days');

    const action = { type: 'SET_START_DATE', startDate };

    const state = filtersReducer(undefined, action);

    expect(state.startDate).toEqual(startDate);
});

test('should set endDate filter', () => {
    const endDate = moment().add(3, 'days');

    const action = { type: 'SET_END_DATE', endDate };

    const state = filtersReducer(undefined, action);

    expect(state.endDate).toEqual(endDate);
});