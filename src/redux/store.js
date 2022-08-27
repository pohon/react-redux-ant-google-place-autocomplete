import { createStore, applyMiddleware } from 'redux';
import { createEpicMiddleware } from 'redux-observable';

import reducer from './modules/pingpong';
import rootEpic from '../epics/index';

const epicMiddleware = createEpicMiddleware();

const store = createStore(
  reducer,
  applyMiddleware(
    ...[ epicMiddleware ]
  )
);
epicMiddleware.run(rootEpic);
export default store;
