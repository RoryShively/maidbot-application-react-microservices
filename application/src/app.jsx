// Load styles
require('./stylesheets/main.sass')

// Imports
import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Link, browserHistory , IndexRoute } from 'react-router';
import  { HashRouter, Route } from 'react-router-dom';
import { ConnectedRouter, routerReducer, routerMiddleware } from 'react-router-redux';
import { Provider } from 'react-redux';
import createHistory from 'history/createBrowserHistory';
import configureStore from './redux/store';

import RootComponent from './Root';
// Containers
import MyContainer from './containers/Home';
import LoginContainer from './containers/Login';

// const initialState = window.__INITIAL_STATE__;
const history = createHistory();
const store = configureStore(history);
const mountNode = document.getElementById('content');

ReactDOM.render(
  <Provider store={store}>
    <HashRouter>
      <RootComponent />
    </HashRouter>
  </Provider>,
  mountNode
);
