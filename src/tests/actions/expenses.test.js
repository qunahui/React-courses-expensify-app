import { addExpense, editExpense, removeExpense } from '../../actions/expenses';

test('should setup remove expense action object', () => {
    const action = removeExpense({ id: '123abc' });
    expect(action).toEqual({
        type: 'REMOVE_EXPENSE',
        id: '123abc'
    })
});

test('should return a correct edit', () => {
    const action = editExpense('123', { note: 'abc' });
    expect(action).toEqual({
        type: 'EDIT_EXPENSE',
        id: '123',
        updates: {
            note: 'abc'
        }
    })
})

test('should setup add expense action object with provided values', () => {
    const expenseData = {
        description: 'rent',
        amount: 109500,
        createAt: 1000,
        note: 'this was last month rent'
    };
    const action = addExpense(expenseData);
    expect(action).toEqual({
        type: 'ADD_EXPENSE',
        expense: {
            ...expenseData,
            id: expect.any(String)
        }
    })
});


test('should setup add expense action object with default values', () => {
    const action = addExpense();
    expect(action).toEqual({
        type: 'ADD_EXPENSE',
        expense: {
            description: '',
            amount: 0,
            createAt: 0,
            note: '',
            id: expect.any(String)
        }
    })
});




// export const addExpense = (
//     {
//         description = '',
//         note = '',
//         amount = 0,
//         createAt = 0
//     } = {}) => ({
//         type: 'ADD_EXPENSE',
//         expense: {
//             id: uuid(),
//             description,
//             note,
//             amount,
//             createAt
//         }
//     });

// export const removeExpense = ({ id } = {}) => ({
//     type: 'REMOVE_EXPENSE',
//     id
// })

// export const editExpense = (id, updates) => ({
//     type: 'EDIT_EXPENSE',
//     id,
//     updates
// });