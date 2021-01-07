import * as types from './actionTypes.js';

const initialState = {
  submitting: false,
  messageType: '',
  message: '',
};

export const resetPasswordReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.RESET_PASSWORD: {
      return {
        ...state,
        submitting: true,
        messageType: '',
        message: '',
      };
    }
    case types.RESET_PASSWORD_SUCCESS: {
      return {
        ...state,
        submitting: false,
        messageType: 'success',
        message: action.payload.message,
      };
    }
    case types.RESET_PASSWORD_FAILURE: {
      return {
        ...state,
        submitting: false,
        messageType: 'error',
        message: action.payload.message,
      };
    }
    case types.RESET_PASSWORD_SUCCESS_RESET: {
      return {
        ...state,
        ...initialState,
      };
    }
    default:
      return state;
  }
};
