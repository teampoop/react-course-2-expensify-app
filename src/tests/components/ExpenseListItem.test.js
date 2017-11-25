import React from 'react';
import { shallow } from 'enzyme';
import ExpensetListItem from '../../component/ExpenseListItem';
import expenses from '../fixtures/expenses';

test('should render ExpenseListItem correctly', () => {
  const wrapper = shallow(<ExpensetListItem {...expenses[1]} key={expenses[1].id} />);
  expect(wrapper).toMatchSnapshot();
});