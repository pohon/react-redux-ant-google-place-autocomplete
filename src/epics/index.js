import { combineEpics } from 'redux-observable';

import { fetchAutocomplete } from './autocomplete';

export default combineEpics(fetchAutocomplete);
