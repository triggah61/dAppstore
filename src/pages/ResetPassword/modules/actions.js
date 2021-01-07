import * as types from './actionTypes.js';

export const resetPassword = ({ token, password }) => {
  return {
    type: types.RESET_PASSWORD,
    payload: {
      token,
      password,
    },
  };
};

export const resetPasswordSuccess = message => {
  return {
    type: types.RESET_PASSWORD_SUCCESS,
    payload: {
      message,
    },
  };
};

export const resetPasswordFailure = message => {
  return {
    type: types.RESET_PASSWORD_FAILURE,
    payload: {
      message,
    },
  };
};

export const resetPasswordReset = () => {
  return {
    type: types.RESET_PASSWORD_SUCCESS_RESET,
  };
};
