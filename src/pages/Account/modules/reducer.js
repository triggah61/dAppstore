import * as types from './actionTypes.js';

const initialState = {
  account: {},
  error: false,
  status: null,
  submitting: false,
  loading: false,
};

export const userAccountReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.FETCH_USER_ACCOUNT: {
      return {
        ...initialState,
      };
    }
    case types.FETCH_USER_ACCOUNT_SUCCESS: {
      return {
        ...state,
        account: action.payload.account,
        status: null,
        submitting: false,
        loading: false,
        error: false,
      };
    }
    case types.FETCH_USER_ACCOUNT_FAILURE: {
      return {
        ...state,
        submitting: false,
        loading: false,
        error: true,
      };
    }
    case types.UPDATE_USER_ACCOUNT: {
      return {
        ...state,
        status: null,
        error: false,
        submitting: true,
        loading: false,
      };
  }
    case types.UPDATE_USER_ACCOUNT_SUCCESS: {
      return {
        ...state,
        account: action.payload.account,
        status: action.payload.status,
        error: false,
        submitting: false,
        loading: false,
      };
    }
    case types.UPDATE_USER_ACCOUNT_FAILURE: {
      return {
        ...state,
        status: action.payload.status,
        submitting: false,
        loading: false,
        error: true,
      };
    }
    default:
      return state;
  }
};
