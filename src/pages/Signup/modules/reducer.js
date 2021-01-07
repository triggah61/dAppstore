import * as types from './actionTypes.js';

const initialState = {
  signupStatus: null,
  submitting: false,
  error: false,
  message: null,
};

export const signupReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.SIGNUP: {
      return {
        ...state,
        submitting: true,
        signupStatus: null,
        error: false,
        message: null,
      };
    }
    case types.SIGNUP_SUCCESS: {
      return {
        ...state,
        signupStatus: action.payload.signupStatus,
        error: false,
        submitting: false,
        message: action.payload.message,
      };
    }
    case types.SIGNUP_FAILURE: {
      return {
        ...state,
        signupStatus: action.payload.signupStatus,
        error: true,
        submitting: false,
        message: action.payload.message,
      };
    }
    case types.SIGNUP_SUCCESS_RESET: {
      return {
        ...state,
        ...initialState,
      };
    }
    default:
      return state;
  }
};
