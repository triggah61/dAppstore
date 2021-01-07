import * as types from './actionTypes.js';

const initialState = {
  fetchedApps: null,
  error: {},
  fetchStatus: {},
  fetching: {},
};

export const fetchedAppsReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.FETCH_APPS: {
      return {
        ...state,
        fetchedApps: null,
        fetching: {
          ...state.fetching,
          [action.payload.key]: true,
        },
      };
    }
    case types.FETCH_APPS_SUCCESS: {
      return {
        ...state,
        // Since we requests multiple time we need to make the response into unique data
        // so the new response wont overwrite the old ones
        fetchedApps: {
          ...state.fetchedApps,
          [action.payload.key]: action.payload.fetchedApps,
        },
        fetching: {
          ...state.fetching,
          [action.payload.key]: false,
        },
        fetchStatus: {
          ...state.fetchStatus,
          [action.payload.key]: action.payload.fetchStatus,
        },
        error: {
          ...state.error,
          [action.payload.key]: false,
        },
      };
    }
    case types.FETCH_APPS_FAILURE: {
      return {
        ...state,
        fetchStatus: {
          ...state.fetchStatus,
          [action.payload.key]: action.payload.fetchStatus,
        },
        error: {
          ...state.error,
          [action.payload.key]: action.payload.error,
        },
        fetching: {
          ...state.fetching,
          [action.payload.key]: false,
        },
      };
    }
    default:
      return state;
  }
};
