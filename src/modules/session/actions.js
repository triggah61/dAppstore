import * as types from './actionTypes.js';

// Login
export const login = ({ email_address, password }) => {
  return {
    type: types.LOGIN,
    payload: {
      email_address,
      password,
    },
  };
};

export const loginSuccess = userProfile => {
  return {
    type: types.LOGIN_SUCCESS,
    payload: {
      userProfile,
    },
  };
};

export const loginFailure = (status, error) => {
  return {
    type: types.LOGIN_FAILURE,
    payload: {
      status,
      error,
    },
  };
};

export const relogin = token => {
  return {
    type: types.RE_LOGIN,
    payload: {
      token,
    },
  };
};

export const reloginSuccess = tokenDetails => {
  return {
    type: types.RE_LOGIN_SUCCESS,
    payload: {
      tokenDetails,
    },
  };
};

export const reloginFailure = (status, errMessage) => {
  return {
    type: types.RE_LOGIN_FAILURE,
    payload: {
      status,
      errMessage,
    },
  };
};

// Logout
export const logoutSuccess = () => {
  return {
    type: types.LOGOUT_SUCCESS,
  };
};

export const logoutFailure = error => {
  return {
    type: types.LOGOUT_FAILURE,
    payload: {
      error,
    },
  };
};
