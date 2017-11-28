import authReducer from '../../reducers/auth';

test('Should set up default reducer', () => {
  const state = authReducer(undefined, { type: '@@INIT' });
  expect(state).toEqual({});
});
test('Should set up login reducer', () => {
  const action = {
    type: 'LOGIN',
    uid: '123',
  };
  const state = authReducer({}, action);
  expect(state.uid).toBe('123');
});

test('Should set up logout reducer', () => {
  const action = {
    type: 'LOGOUT'
  }
  const state = authReducer({ uid: 'hey'}, action);
  expect(state.uid).toBe(undefined);
});