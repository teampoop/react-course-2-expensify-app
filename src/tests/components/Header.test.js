import React from 'react';
import { shallow } from 'enzyme';
import { Header } from '../../component/Header';

let startLogout, wrapper;

beforeEach(() => {
  startLogout = jest.fn();
  wrapper = shallow(<Header startLogout={startLogout} />);
});

test('should render header correctly', () => {
  expect(wrapper).toMatchSnapshot();
});

test('should startlogout on botton click', () => {
  wrapper.find('button').simulate('click');
  expect(startLogout).toHaveBeenCalled();
});
