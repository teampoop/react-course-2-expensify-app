import React from 'react';
import { connect } from 'react-redux';

import numeral from 'numeral';

import selectExpenses from '../selectors/expenses';
import selectExpensesTotal from '../selectors/expenses-total';

export const ExpensesSummary = ({expenseCount, expenseTotal}) =>  {

  const expenseWord = expenseCount === 1 ? 'expense' : 'expenses';
  const formattedExpensesTotal = numeral(expenseTotal / 100).format('$0,0.00');
  console.log(formattedExpensesTotal);
  return (
    <div>
      <p>Viewing {expenseCount} {expenseWord} totalling {formattedExpensesTotal}</p>
    </div>
  );
}

const mapStateToProps = (state) => {
  const visibleExpenses = selectExpenses(state.expenses, state.filters);
  return {
    expenseCount: visibleExpenses.length,
    expenseTotal: selectExpensesTotal(visibleExpenses)
  }
};

export default connect(mapStateToProps)(ExpensesSummary);