
import { mergeMap, map } from 'rxjs/operators';
import { ajax } from 'rxjs/ajax';
import { ofType } from 'redux-observable';
import {
  fetchPlacesFulfilled,
  FETCH_PLACES
} from '../redux/modules/autocomplete';

export const fetchAutocomplete = action$ => action$.pipe(
  ofType(FETCH_PLACES),
  mergeMap(action =>
    ajax.getJSON(`https://maps.googleapis.com/maps/api/place/autocomplete/json?input=${action.input}&key=`).pipe(
      map(response => fetchPlacesFulfilled(response))
    )
  )
);