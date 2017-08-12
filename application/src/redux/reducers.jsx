/* @flow */

import { combineReducers } from 'redux';
import { reducer as forms } from 'redux-form';
import { routerReducer as router } from 'react-router-redux';


export default combineReducers({
  router,
  form: forms,
});
