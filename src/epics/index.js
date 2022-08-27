import { combineEpics } from 'redux-observable';

import { pingEpic } from './pingpong';

export default combineEpics(pingEpic);
