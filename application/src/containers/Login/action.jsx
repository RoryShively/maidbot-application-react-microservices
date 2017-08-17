import axios from 'axios';

export const LOGGING_IN = 'LOGGING_IN';
export const LOG_IN_SUCCESS = 'LOG_IN_SUCCESS';
export const LOG_IN_ERROR = 'LOG_IN_ERROR';
export const LOGGED_OUT = 'LOGGED_OUT';

export const LOADING_APP = 'LOADING_APP';
export const APP_LOADED = 'APP_LOADED';

const LOGIN_URL = 'http://localhost:5001';

export const login = (username, password) =>
  (dispatch) => {
    const data = { username, password };
    dispatch({ type: LOGGING_IN });

    return axios.post(LOGIN_URL, data)
      .then((res) => {
        dispatch({ type: LOADING_APP });
        setTimeout(() => {
          dispatch({ type: APP_LOADED });
          dispatch({ type: LOG_IN_SUCCESS, user: res.data.user, token: res.data.token });
        }, 1400);
      })
      .catch((err) => {
        dispatch({ type: LOG_IN_ERROR, err: err.response.data.error });
      });
  };

export const logout = () =>
  (dispatch) => {
    dispatch({ type: LOGGED_OUT });
  };
