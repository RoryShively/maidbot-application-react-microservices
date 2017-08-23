import axios from 'axios';

export const FETCHING_MESSAGES = 'FETCHING_MESSAGES';
export const MESSAGES_SUCCESS = 'MESSAGES_SUCCESS';
export const MESSAGES_FAILURE = 'MESSAGES_FAILURE';

export const POSTING_MESSAGE = 'POSTING_MESSAGE';
export const POST_MESSAGE_SUCCESS = 'POST_MESSAGE_SUCCESS';
export const POST_MESSAGE_FAILURE = 'POST_MESSAGE_FAILURE';

const MESSAGES_URL = 'http://localhost:9000/api/message';

export const fetchMessages = (token) =>
  (dispatch) => {
    dispatch({ type: FETCHING_MESSAGES });
    console.log('fetching');

    axios.defaults.headers.get['Authorization'] = token;

    return axios.get(MESSAGES_URL)
      .then((res) => {
        console.log(res);
        dispatch({ type: MESSAGES_SUCCESS, data: res.data });
      })
      .catch((err) => {
        console.log(err);
        dispatch({ type: MESSAGES_FAILURE, err: err });
      });
  };

export const postMessage = (data, token) =>
  (dispatch) => {
    dispatch({ type: POSTING_MESSAGE });
    console.log('posting');

    axios.defaults.headers.post['Authorization'] = token

    return axios.post(MESSAGES_URL, data)
      .then((res) => {
        console.log(res);
        dispatch({ type: POST_MESSAGE_SUCCESS, data: res.data });
      })
      .catch((err) => {
        console.log(err);
        dispatch({ type: POST_MESSAGE_FAILURE, err: err });
      });
  };
