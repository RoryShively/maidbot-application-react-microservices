import {
  LOGGING_IN,
  LOG_IN_SUCCESS,
  LOG_IN_ERROR,
  LOGGED_OUT,

  LOADING_APP,
  APP_LOADED
} from './action';

export default (state = {}, action) => {
  switch (action.type) {
    case LOGGING_IN:
      return Object.assign({}, state, {
        loginStatus: 'PENDING',
      });
    case LOG_IN_SUCCESS:
      return Object.assign({}, state, {
        loginStatus: 'SUCCESS',
        token: action.token,
        data: action.user,
        loginError: null,
      });
    case LOG_IN_ERROR:
      return Object.assign({}, state, {
        loginStatus: 'ERROR',
        loginError: action.err,
      });

    case LOGGED_OUT:
      return {};
    default:
      return state;
  }
};

export const loadingReducer = (state = {}, action) => {
  switch (action.type) {
    case LOADING_APP:
      return Object.assign({}, state, {
        status: LOADING_APP,
      });
    case APP_LOADED:
      return Object.assign({}, state, {
        status: APP_LOADED,
      });
    default:
      return state;
  }
};
