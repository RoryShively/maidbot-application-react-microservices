import { routerMiddleware } from 'react-router-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import persistState from 'redux-localstorage'
import axios from 'axios';

import rootReducer from './reducers';


export default (history, initialState = {}) => {
  const middlewares = [
    thunk.withExtraArgument(axios),
    routerMiddleware(history),
  ];

  const enhancers = [
    applyMiddleware(...middlewares),
    persistState('userInfo', { key: 'maidbot-redux' }),
    typeof window === 'object' && typeof window.devToolsExtension !== 'undefined' ?
      window.devToolsExtension() : f => f,
  ];

  const store = createStore(rootReducer, initialState, compose(...enhancers));

  return store;
};
