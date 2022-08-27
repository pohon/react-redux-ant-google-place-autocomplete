import { createAction, handleActions } from 'redux-actions';

export const PING = 'PING';
export const PONG = 'PONG';

export const ping = createAction(PING);
export const pong = createAction(PONG);

const initState = {
  isPinging: false
};

const reducer = handleActions(
  {
    [PING]: state => ({
      ...state,
      isPinging: true
    }),
    [PONG]: state => ({
      ...state,
      isPinging: false
    })
  },
  initState,
);

export default reducer;
