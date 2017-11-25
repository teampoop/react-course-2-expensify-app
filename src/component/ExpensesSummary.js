import React from 'react';
import { connect } from 'react-redux';

import numeral from 'numeral';

import selectExpenses from '../selectors/expenses';
import expensesTotal from '../selectors/expenses-total';

export class ExpensesSummary extends React.Component {

  expensesCount() {
    const count = this.props.expenses.length;
    return count === 1 ? `${count} expense` : `${count} expenses`;
  }

  expensesTotal() {
    return numeral(expensesTotal(this.props.expenses) / 100).format('$0,0.00');
  }

  render() {
    return (
      <p>Viewing {this.expensesCount()} totalling {this.expensesTotal()}</p>
    );
  };
}

const mapStateToProps = (state) => ({
  expenses: selectExpenses(state.expenses, state.filters)
});

export default connect(mapStateToProps,)(ExpensesSummary);