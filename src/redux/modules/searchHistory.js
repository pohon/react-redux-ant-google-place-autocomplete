import { handleActions } from 'redux-actions';

export const ADD_HISTORY = 'ADD_HISTORY';

export const addHistory = newHistory => ({ type: ADD_HISTORY, newHistory });

const initState = {
  list: []
};

const reducer = handleActions(
  {
    [ADD_HISTORY]: (state, action) => ({
      list: [...state.list, action.newHistory ]
    })
  },
  initState
);

export default reducer;
