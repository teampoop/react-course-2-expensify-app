import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

// Main Router.
import AppRouter from './routers/AppRouter';

// Store.
import configureStore from './store/configureStore';
// Actions for reducers.
import { addExpense } from './actions/expenses';
import { setTextFilter } from './actions/filters';
// Selection function.
import getVisibleExpenses from './selectors/expenses';

import 'normalize.css/normalize.css';
import './styles/styles.scss';
import 'react-dates/lib/css/_datepicker.css';

const store = configureStore();

// add Water Bill
store.dispatch(addExpense({ description: 'Water Bill', amount: 1450, createdAt: Date.now() + 20000}));
// add gas bill
store.dispatch(addExpense({ description: 'Gas Bill', amount: 2000, createdAt: Date.now()}));
// sample rent bill.
store.dispatch(addExpense({ description: 'Rent', amount: 109500, createdAt: Date.now() - 1000000 }));

const state = store.getState();
const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
console.log(visibleExpenses);

const jsx = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
);
ReactDOM.render(jsx, document.getElementById('app'));
