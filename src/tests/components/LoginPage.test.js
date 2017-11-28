import React from 'react';
import { shallow } from 'enzyme';
import { LoginPage } from '../../component/LoginPage';

let startLogin, wrapper;

beforeEach(() => {
  startLogin = jest.fn();
  wrapper = shallow(<LoginPage startLogin={startLogin} />);
});

test('should render LoginPage correctly', () => {
  expect(wrapper).toMatchSnapshot();
});

test('should startLogin on botton click', () => {
  wrapper.find('button').simulate('click');
  expect(startLogin).toHaveBeenCalled();
});

