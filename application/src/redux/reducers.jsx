/* @flow */

import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import { routerReducer as routerReducer } from 'react-router-redux';
import loginReducer, {loadingReducer} from '../containers/Login/reducer';
import messageReducer from '../containers/Home/reducer';


export default combineReducers({
  router: routerReducer,
  form: formReducer,
  userInfo: loginReducer,
  messages: messageReducer,
  loading: loadingReducer,
});
