import * as types from './actionTypes';

export const fetchUserAccount = id => {
  return {
    type: types.FETCH_USER_ACCOUNT,
    payload: {
      id,
    },
  };
};

export const fetchUserAccountSuccess = account => {
  return {
    type: types.FETCH_USER_ACCOUNT_SUCCESS,
    payload: {
      account,
    },
  };
};

export const fetchUserAccountFailure = status => {
  return {
    type: types.FETCH_USER_ACCOUNT_FAILURE,
    payload: {
      status,
    },
  };
};

export const updateUserAccount = account => {
  return {
    type: types.UPDATE_USER_ACCOUNT,
    payload: account,
  };
};

export const updateUserAccountSuccess = (status, account) => {
  return {
    type: types.UPDATE_USER_ACCOUNT_SUCCESS,
    payload: {
      status,
      account,
    },
  };
};

export const updateUserAccountFailure = status => {
  return {
    type: types.UPDATE_USER_ACCOUNT_FAILURE,
    payload: {
      status,
    },
  };
};
