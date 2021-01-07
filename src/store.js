/* eslint-disable no-underscore-dangle */
import { createStore, applyMiddleware, compose } from 'redux';
import { createEpicMiddleware } from 'redux-observable';

import thunk from 'redux-thunk';

import * as api from 'api';
import rootReducer from './rootReducer';
import rootEpic from './rootEpic';

const epicMiddleware = createEpicMiddleware();

const store = createStore(
  rootReducer,
  compose(
    applyMiddleware(epicMiddleware, thunk.withExtraArgument({ api })),
    window.__REDUX_DEVTOOLS_EXTENSION__ &&
      process.env.NODE_ENV === 'development'
      ? window.__REDUX_DEVTOOLS_EXTENSION__()
      : f => f
  )
);

epicMiddleware.run(rootEpic);

export default store;
