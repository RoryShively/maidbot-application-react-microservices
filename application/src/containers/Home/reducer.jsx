import {
  FETCHING_MESSAGES,
  MESSAGES_SUCCESS,
  MESSAGES_FAILURE,
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
    default:
      return state;
  }
};
