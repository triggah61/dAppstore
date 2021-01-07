import * as types from './actionTypes.js';

export const signup = ({ terms, email_address, password }) => {
  return {
    type: types.SIGNUP,
    payload: {
      terms,
      email_address,
      password,
    },
  };
};

export const signupSuccess = (signupStatus, message) => {
  return {
    type: types.SIGNUP_SUCCESS,
    payload: {
      signupStatus,
      message,
    },
  };
};

export const signupFailure = (signupStatus, message) => {
  return {
    type: types.SIGNUP_FAILURE,
    payload: {
      signupStatus,
      message,
    },
  };
};

export const singnupSuccessReset = () => {
  return {
    type: types.SIGNUP_SUCCESS_RESET,
  };
};
