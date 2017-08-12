import axios from 'axios';

export const LOGGING_IN = 'LOGGING_IN';
export const LOG_IN_SUCCESS = 'LOG_IN_SUCCESS';
export const LOG_IN_ERROR = 'LOG_IN_ERROR';

const LOGIN_URL = 'http://localhost:5001';

export const login = (username, password): ThunkAction =>
  (dispatch: Dispatch) => {
    dispatch({ type: LOGGING_IN });

    const data = { username, password };

    return axios.get(LOGIN_URL)
      .then((res) => {
        dispatch({ type: LOG_IN_SUCCESS, token: res.data });
      })
      .catch((err) => {
        dispatch({ type: LOG_IN_ERROR, err });
      });
  };
