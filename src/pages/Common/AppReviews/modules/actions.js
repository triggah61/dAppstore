import * as types from './actionTypes.js';

export const fetchAppReviews = (appType, appId, user_id) => {
  return {
    type: types.FETCH_APP_REVIEWS,
    payload: {
      appType,
      appId,
      user_id,
    },
  };
};

export const fetchAppReviewsSuccess = (status, reviews) => {
  return {
    type: types.FETCH_APP_REVIEWS_SUCCESS,
    payload: {
      status,
      reviews,
    },
  };
};

export const fetchAppReviewsFailure = (status, error) => {
  return {
    type: types.FETCH_APP_REVIEWS_FAILURE,
    payload: {
      status,
      error,
    },
  };
};

export const cleaAppReviews = () => {
  return {
    type: types.CLEAR_APP_REVIEWS,
  };
};

export const addAppReview = (appType, data) => {
  return {
    type: types.ADD_APP_REVIEW,
    payload: {
      appType,
      data,
    },
  };
};

export const addAppReviewSuccess = (reviewId, status) => {
  return {
    type: types.ADD_APP_REVIEW_SUCCESS,
    payload: {
      reviewId,
      status,
    },
  };
};

export const addAppReviewFailure = (status, message) => {
  return {
    type: types.ADD_APP_REVIEW_FAILURE,
    payload: {
      status,
      message,
    },
  };
};
