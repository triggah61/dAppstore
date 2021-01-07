import * as types from './actionTypes';

export const fetchAppDetails = (type, id) => {
  return {
    type: types.FETCH_APP_DETAILS,
    payload: {
      type,
      id,
    },
  };
};

export const fetchAppDetailsSuccess = (status, appDetails) => {
  return {
    type: types.FETCH_APP_DETAILS_SUCCESS,
    payload: {
      status,
      appDetails,
    },
  };
};

export const fetchAppDetailsFailure = (status, error) => {
  return {
    type: types.FETCH_APP_DETAILS_FAILURE,
    payload: {
      status,
      error,
    },
  };
};

export const clearAppDetails = () => {
  return {
    type: types.CLEAR_APP_DETAILS,
  };
};
