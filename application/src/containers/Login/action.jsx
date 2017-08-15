import axios from 'axios';

export const LOGGING_IN = 'LOGGING_IN';
export const LOG_IN_SUCCESS = 'LOG_IN_SUCCESS';
export const LOG_IN_ERROR = 'LOG_IN_ERROR';
export const LOGGED_OUT = 'LOGGED_OUT';

const LOGIN_URL = 'http://localhost:5001';

export const login = (username, password) =>
  (dispatch) => {
    dispatch({ type: LOGGING_IN });

    const data = { username, password };

    return axios.post(LOGIN_URL, data)
      .then((res) => {
        dispatch({ type: LOG_IN_SUCCESS, user: res.data.user, token: res.data.token });
      })
      .catch((err) => {
        console.log(err.response.data.error);
        dispatch({ type: LOG_IN_ERROR, err: err.response.data.error });
      });
  };

export const logout = () =>
  (dispatch) => {
    dispatch({ type: LOGGED_OUT });
  };
