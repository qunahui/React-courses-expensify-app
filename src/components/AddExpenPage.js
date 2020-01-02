import React from 'react';
import ExpenseForm from './ExpenseForm';
import { connect } from 'react-redux';
import { startAddExpenses } from '../actions/expenses'

export class AddExpenPage extends React.Component {
    onSubmit = (expense) => {
        this.props.startAddExpenses(expense);
        this.props.history.push("/");
    }

    render() {
        return (
            <div>
                <h1>Add expense</h1>
                <ExpenseForm
                    onSubmit={this.onSubmit}
                />
            </div>
        )
    }
}

// const AddExpenPage = (props) => (
//     <div>
//         <h1>Add expense</h1>
//         <ExpenseForm
//             onSubmit={(expense) => {     
//                 props.dispatch(addExpense(expense));
//                 props.history.push("/");
//             }}
//         />
//     </div>
// );

const mapDispatchToProps = (dispatch) => {
    return {
        startAddExpenses: (expense) => dispatch(startAddExpenses(expense))
    }
}

export default connect(undefined, mapDispatchToProps)(AddExpenPage);