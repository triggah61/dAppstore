import * as types from './actionTypes.js';

export const fetchApps = (type, tag, key, user_id) => {
  return {
    type: types.FETCH_APPS,
    payload: {
      type,
      tag,
      key,
      user_id,
    },
  };
};

export const fetchAppsSuccess = (fetchStatus, fetchedApps, key) => {
  return {
    type: types.FETCH_APPS_SUCCESS,
    payload: {
      fetchStatus,
      fetchedApps,
      key,
    },
  };
};

export const fetchAppsFailure = (fetchStatus, error, key) => {
  return {
    type: types.FETCH_APPS_FAILURE,
    payload: {
      fetchStatus,
      error,
      key,
    },
  };
};
