import React from 'react';
import { shallow } from 'enzyme';

import ExpenseDashboardPage from '../../component/ExpenseDashboardPage';

test('Render ExpenseDashboardPage correctly', () => {
  const wrapper = shallow(<ExpenseDashboardPage />);
  expect(wrapper).toMatchSnapshot();
});
