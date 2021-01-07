import * as types from './actionTypes.js';

export const recordStat = (appType, appId, userId) => {
  return {
    type: types.RECORD_STAT,
    payload: {
      appType,
      appId,
      userId,
    },
  };
};

export const recordStatSuccess = () => {
  return {
    type: types.RECORD_STAT_SUCCESS,
  };
};

export const recordStatFailure = error => {
  return {
    type: types.RECORD_STAT_FAILURE,
    payload: {
      error,
    },
  };
};

export const fetchStats = (type, id) => {
  return {
    type: types.FETCH_STATS,
    payload: {
      type,
      id,
    },
  };
};

export const fetchStatsSuccess = (status, stats) => {
  return {
    type: types.FETCH_STATS_SUCCESS,
    payload: {
      status,
      stats,
    },
  };
};

export const fetchStatsFailure = (status, error) => {
  return {
    type: types.FETCH_STATS_FAILURE,
    payload: {
      status,
      error,
    },
  };
};

export const clearStats = () => {
  return {
    type: types.CLEAR_STATS,
  };
};
