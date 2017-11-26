import moment from 'moment';

export default [
  {
    id: 'abc',
    description: 'Gum',
    note: '',
    amount: 195,
    createdAt: 0
  },
  {
    id: 'def',
    description: 'Rent',
    note: 'you idiot',
    amount: 109500,
    createdAt: moment(0).subtract(4, 'days').valueOf()
  },
  {
    id: 'ghi',
    description: 'Credit Card',
    note: '',
    amount: 4500,
    createdAt: moment(0).add(4, 'days').valueOf()
  }
];