import * as types from './actionTypes.js';

const initialState = {
  appDetails: null,
  error: false,
  status: null,
};

export const appDetailsReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.FETCH_APP_DETAILS_SUCCESS: {
      return {
        ...state,
        appDetails: action.payload.appDetails,
        status: action.payload.status,
        error: false,
      };
    }
    case types.FETCH_APP_DETAILS_FAILURE: {
      return {
        ...state,
        status: action.payload.status,
        error: action.payload.error,
      };
    }
    case types.CLEAR_APP_DETAILS: {
      return {
        ...state,
        appDetails: null,
        status: null,
        error: false,
      };
    }
    default:
      return state;
  }
};
