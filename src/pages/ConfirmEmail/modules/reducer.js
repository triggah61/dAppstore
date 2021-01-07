import * as types from './actionTypes.js';

const initialState = {
  confirming: true,
  status: null,
  error: false,
};

export const confirmEmailReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.CONFIRM_EMAIL_SUCCESS: {
      return {
        ...state,
        confirming: false,
        status: action.payload.status,
      };
    }
    case types.CONFIRM_EMAIL_FAILURE: {
      return {
        ...state,
        confirming: false,
        status: action.payload.status,
        error: action.payload.error,
      };
    }
    default:
      return state;
  }
};
