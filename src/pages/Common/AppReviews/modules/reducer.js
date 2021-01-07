import * as types from './actionTypes.js';

const initialState = {
  reviews: null,
  reviewStatus: null,
  error: false,
  addStatus: null,
  submitting: false,
  fetching: false,
  reviewId: null,
  message: null,
};

export const reviewsReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.CLEAR_APP_REVIEWS: {
      return {
        ...state,
        reviews: null,
      };
    }
    case types.FETCH_APP_REVIEWS: {
      return {
        ...state,
        fetching: true,
      };
    }
    case types.FETCH_APP_REVIEWS_SUCCESS: {
      return {
        ...initialState,
        reviews: action.payload.reviews,
        reviewStatus: action.payload.status,
        fetching: false,
      };
    }
    case types.FETCH_APP_REVIEWS_FAILURE: {
      return {
        ...initialState,
        reviews: null,
        reviewStatus: action.payload.status,
        fetching: false,
      };
    }
    case types.ADD_APP_REVIEW: {
      return {
        ...state,
        submitting: true,
        addStatus: null,
        fetching: false,
        message: null,
        error: false,
      };
    }
    case types.ADD_APP_REVIEW_SUCCESS: {
      return {
        ...state,
        addStatus: action.payload.status,
        submitting: false,
        fetching: false,
        reviewId: action.payload.reviewId,
        message: null,
        error: false,
      };
    }
    case types.ADD_APP_REVIEW_FAILURE: {
      return {
        ...state,
        submitting: false,
        fetching: false,
        addStatus: action.payload.status,
        message: action.payload.message,
        error: true,
      };
    }
    default:
      return state;
  }
};
