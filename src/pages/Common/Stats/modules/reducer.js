import * as types from './actionTypes.js';

const initialState = {
  stats: null,
  error: false,
  status: null,
  fetching: false,
};

export const statsReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.RECORD_STAT_FAILURE: {
      return {
        ...state,
        error: action.payload.error,
      };
    }
    case types.FETCH_STATS: {
      return {
        ...state,
        stats: null,
        error: false,
        status: null,
        fetching: true,
      };
    }
    case types.CLEAR_STATS: {
      return {
        ...initialState,
      };
    }
    case types.FETCH_STATS_SUCCESS: {
      return {
        ...state,
        stats: action.payload.stats,
        status: action.payload.status,
        error: false,
        fetching: false,
      };
    }
    case types.FETCH_STATS_FAILURE: {
      return {
        ...state,
        status: action.payload.status,
        error: action.payload.error,
        fetching: false,
      };
    }
    default:
      return state;
  }
};
