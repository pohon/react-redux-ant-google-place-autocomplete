
import { mapTo, delay } from 'rxjs/operators';
import { ofType } from 'redux-observable';
import {
  PING,
  PONG
} from '../redux/modules/pingpong';

// TODO: progress
export const pingEpic = action$ =>
  action$.pipe(
    ofType(PING),
    delay(1000),
    mapTo({ type: PONG})
  );
