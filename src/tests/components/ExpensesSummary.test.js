import React from 'react';
import { shallow } from 'enzyme';
import expenses from '../fixtures/expenses';
import { ExpensesSummary } from '../../component/ExpensesSummary';

test('should show two expenses totaling $1,096.95', () => {
  const e = [expenses[0], expenses[1]];
  const wrapper = shallow(<ExpensesSummary expenses={e} />);
  expect(wrapper).toMatchSnapshot();
});

test('should show 1 expense totalling $1.95', () => {
  const e = [expenses[0]];
  const wrapper = shallow(<ExpensesSummary expenses={e} />);
  expect(wrapper).toMatchSnapshot();
});