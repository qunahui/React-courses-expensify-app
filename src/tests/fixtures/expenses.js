import moment from 'moment'

const expenses = [{
    id: '0',
    description: 'Gum',
    note: '',
    amount: 195,
    createAt: 0
},
{
    id: '1',
    description: 'Rent',
    note: '',
    amount: 195000,
    createAt: moment(0).subtract(4, 'days').valueOf()
},
{
    id: '2',
    description: 'Credit',
    note: '',
    amount: 4500,
    createAt: moment(0).add(4, 'days').valueOf()
}
];

export default expenses;