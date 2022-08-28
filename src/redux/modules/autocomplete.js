import { handleActions } from 'redux-actions';

export const FETCH_PLACES = 'FETCH_PLACES';
export const FETCH_PLACES_FULFILLED = 'FETCH_PLACES_FULFILLED';

export const fetchPlaces = input => ({ type: FETCH_PLACES, input });
export const fetchPlacesFulfilled = response => ({ type: FETCH_PLACES_FULFILLED, response });

const initState = {
  loading: false,
  loaded: false,
  data: {}
};

const reducer = handleActions(
  {
    [FETCH_PLACES]: () => ({
      loading: true,
      loaded: false,
      data: {}
    }),
    [FETCH_PLACES_FULFILLED]: (state, action) => ({
      loading: false,
      loaded: true,
      data: action.response
    })
  },
  initState,
);

export default reducer;
