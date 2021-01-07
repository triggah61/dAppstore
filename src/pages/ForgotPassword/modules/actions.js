import * as types from './actionTypes.js';

export const forgotPassword = ({ email_address }) => {
  return {
    type: types.FORGOT_PASSWORD,
    payload: {
      email_address,
    },
  };
};

export const forgotPasswordSuccess = message => {
  return {
    type: types.FORGOT_PASSWORD_SUCCESS,
    payload: {
      message,
    },
  };
};

export const forgotPasswordFailure = message => {
  return {
    type: types.FORGOT_PASSWORD_FAILURE,
    payload: {
      message,
    },
  };
};

export const forgotPasswordReset = () => {
  return {
    type: types.FORGOT_PASSWORD_SUCCESS_RESET,
  };
};
