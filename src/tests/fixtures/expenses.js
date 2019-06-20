import moment from 'moment';

export default [{
    id: '1',
    description : 'Rent',
    note: '',
    amount: 400,
    createdAt: 0
}, {
    id: '2',
    description : 'Water',
    note: '',
    amount: 50,
    createdAt: moment(0).subtract(4, 'days').valueOf()
}, {
    id: '3',
    description : 'Internet',
    note: '',
    amount: 20,
    createdAt: moment(0).add(4, 'days').valueOf()
}];
