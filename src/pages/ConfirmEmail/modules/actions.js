import * as types from './actionTypes';

export const confirmEmail = token => {
  return {
    type: types.CONFIRM_EMAIL,
    payload: {
      token,
    },
  };
};

export const confirmEmailSuccess = status => {
  return {
    type: types.CONFIRM_EMAIL_SUCCESS,
    payload: {
      status,
    },
  };
};

export const confirmEmailFailure = (status, error) => {
  return {
    type: types.CONFIRM_EMAIL_FAILURE,
    payload: {
      status,
      error,
    },
  };
};
