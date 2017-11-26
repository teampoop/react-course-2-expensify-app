import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

// Main Router.
import AppRouter from './routers/AppRouter';

// Store.
import configureStore from './store/configureStore';
// Actions for reducers.
import { startSetExpenses } from './actions/expenses';
import { setTextFilter } from './actions/filters';
// Selection function.
import getVisibleExpenses from './selectors/expenses';

import 'normalize.css/normalize.css';
import './styles/styles.scss';
import 'react-dates/lib/css/_datepicker.css';
import './firebase/firebase';

const store = configureStore();

const jsx = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
);

ReactDOM.render(<p>loading...</p>, document.getElementById('app'));
store.dispatch(startSetExpenses()).then(() => {
  ReactDOM.render(jsx, document.getElementById('app'));
})
