// Load styles
require('./stylesheets/main.sass')

// Imports
import React from 'react';
import ReactDOM from 'react-dom';
import { ConnectedRouter, routerReducer, routerMiddleware } from 'react-router-redux';
import { Provider } from 'react-redux';
import createHistory from 'history/createBrowserHistory';
import configureStore from './redux/store';

import RootComponent from './Root';

// const initialState = window.__INITIAL_STATE__;
const history = createHistory();
const store = configureStore(history);
const mountNode = document.getElementById('content');

ReactDOM.render(
  <Provider store={store}>
    <RootComponent />
  </Provider>,
  mountNode
);
