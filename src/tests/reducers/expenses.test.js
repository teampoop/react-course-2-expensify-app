import expensesReducer from '../../reducers/expenses';
import expenses from '../fixtures/expenses';

// Create default reducer.
test('should set up default filter values', () => {
  const state = expensesReducer(undefined, { type: '@@INIT' });
  expect(state).toEqual([]);
});

test('should remove expense by id', () => {
  const action = {
    type: 'REMOVE_EXPENSE',
    id: expenses[1].id
  }
  const state = expensesReducer(expenses, action);
  expect(state).toEqual([expenses[0], expenses[2]]);
});

test('should not remove expense if id not found', () => {
  const action = {
    type: 'REMOVE_EXPENSE',
    id: '-1'
  }
  const state = expensesReducer(expenses, action);
  expect(state).toEqual(expenses);
});

// should add an expense.
test('should add an expense', () => {
  const expense = {
    id: '109',
    description: 'Laptop',
    note: '',
    createdAt: 300000,
    amount: 29500
  };
  const action = {
    type: 'ADD_EXPENSE',
    expense
  }
  const state = expensesReducer(expenses, action);
  expect(state).toEqual(expenses.concat(expense));
});

// should edit an expense
test('should edit an expense', () => {
  const description = 'Rabbit food';
  const action = {
    type: 'EDIT_EXPENSE',
    id: expenses[1].id,
    updates: {
      description
    }
  }
  const state = expensesReducer(expenses, action);
  expect(state[1].description).toBe(description);
});

// should not edit expense if expense not found.
test('should not edit expense if expense not found', () => {
  const description = 'Rabbit food';
  const id = -2;
  const expense = {
    id,
    description
  };
  const action = {
    type: 'EDIT_EXPENSE',
    id,
    expense
  }
  const state = expensesReducer(expenses, action);
  expect(state).toEqual(expenses);
});

test('should set expenses', () => {
  const action = {
    type: 'SET_EXPENSES',
    expenses: [expenses[1]]
  }
  const state = expensesReducer(expenses, action);
  expect(state).toEqual([expenses[1]]);
});