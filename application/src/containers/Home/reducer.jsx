import {
  FETCHING_MESSAGES,
  MESSAGES_SUCCESS,
  MESSAGES_FAILURE,

  POSTING_MESSAGE,
  POST_MESSAGE_SUCCESS,
  POST_MESSAGE_FAILURE,
} from './action';

export default (state = {}, action) => {
  switch (action.type) {
    case FETCHING_MESSAGES:
      return Object.assign({}, state, {
        requestStatus: 'PENDING',
      });
    case MESSAGES_SUCCESS:
      return Object.assign({}, state, {
        requestStatus: 'SUCCESS',
        data: action.data,
      });
    case MESSAGES_FAILURE:
      return Object.assign({}, state, {
        requestStatus: 'ERROR',
        err: action.err,
      });

    case POSTING_MESSAGE:
      return Object.assign({}, state, {
        postStatus: 'POSTING',
      });
    case POST_MESSAGE_SUCCESS:
      return Object.assign({}, state, {
        postStatus: 'SUCCESS',
        data: state.data.concat([action.data]),
      });
    case POST_MESSAGE_FAILURE:
      return Object.assign({}, state, {
        postStatus: 'POSTING',
        err: action.err
      });
    default:
      return state;
  }
};
