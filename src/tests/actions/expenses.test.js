import {addExpense, editExpense, removeExpense} from '../../actions/expenses';

test('should set up remove expense action object', () => {
  const action = removeExpense({id: '123abc'});
  expect(action).toEqual({
    type: 'REMOVE_EXPENSE',
    id: '123abc'
  });
});

test('should edit note property', () => {
  const action = editExpense(1, {note: 'New note value'});
  expect(action).toEqual({
    type: 'EDIT_EXPENSE',
    id: 1,
    updates: {
      note: 'New note value'
    }
  })
});

test('should set up add expense action object with values', () => {
  const expenseData = {
    description: 'Rent',
    note: 'This was last months rent',
    amount: 109500,
    createdAt:  1000
  }
  const action = addExpense(expenseData);
  expect(action).toEqual({
    type: 'ADD_EXPENSE',
    expense: {
      ...expenseData,
      id: expect.any(String)
    }
  })
});

test('should set up add expense object with default values', () => {
  const defaultData = {
    description: '',
    note: '',
    amount: 0,
    createdAt: 0
  }
  const action = addExpense();
  expect(action).toEqual({
    type: 'ADD_EXPENSE',
    expense: {
      ...defaultData,
      id: expect.any(String)
    }
  })
});