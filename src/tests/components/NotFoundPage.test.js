import React from 'react';
import { shallow } from 'enzyme';
import expenses from '../fixtures/expenses';
import NotFoundPage from '../../component/NotFoundPage';

test('Renders NotFoundPage correctly', () => {
  const wrapper = shallow(<NotFoundPage />);
  expect(wrapper).toMatchSnapshot();
});