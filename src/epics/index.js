import { combineEpics } from 'redux-observable';

import { pingEpic } from './pingpong';
import { fetchAutocomplete } from './autocomplete';

export default combineEpics(pingEpic, fetchAutocomplete);
