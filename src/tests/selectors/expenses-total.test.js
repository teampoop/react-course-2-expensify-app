import expenses from '../fixtures/expenses';
import expensesTotal from '../../selectors/expenses-total';

test('Should add no expenses', () => {
  const total = expensesTotal([]);
  expect(total).toBe(0);
});

test('should add single expense', () => {
  const total = expensesTotal([expenses[0]]);
  expect(total).toBe(195);
})

test('Should add all expense totals', () => {
  const total = expensesTotal(expenses);
  expect(total).toBe(114195);
})