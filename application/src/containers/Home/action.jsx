import axios from 'axios';

export const FETCHING_MESSAGES = 'FETCHING_MESSAGES';
export const MESSAGES_SUCCESS = 'MESSAGES_SUCCESS';
export const MESSAGES_FAILURE = 'MESSAGES_FAILURE';

const MESSAGES_URL = 'http://localhost:5002';

export const fetchMessages = (token) =>
  (dispatch) => {
    dispatch({ type: FETCHING_MESSAGES });
    console.log('fetching');

    axios.defaults.headers.get['Authorization'] = token;
    console.log(token);

    return axios.get(MESSAGES_URL)
      .then((res) => {
        console.log(res);
        dispatch({ type: MESSAGES_SUCCESS });
      })
      .catch((err) => {
        console.log(err);
        dispatch({ type: MESSAGES_FAILURE });
      });
  };
