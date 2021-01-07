import * as types from './actionTypes.js';

const initialState = {
  loading: true,
  userProfile: {},
  error: false,
  submitting: false,
  loginStatus: null,
};

const mergeUserProfile = ({ userProfile }, userProfilePayload) => {
  return { ...userProfile, ...userProfilePayload };
};

export const sessionReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.LOGIN: {
      return {
        ...state,
        submitting: true,
        error: false,
        loginStatus: null,
      };
    }
    case types.LOGIN_SUCCESS: {
      return {
        ...state,
        loading: false,
        userProfile: mergeUserProfile(state, action.payload.userProfile),
        submitting: false,
        error: false,
      };
    }
    case types.RE_LOGIN_SUCCESS: {
      return {
        ...state,
        userProfile: {
          ...state.userProfile,
          token: action.payload.tokenDetails.token,
          token_expiry: action.payload.tokenDetails.token_expiry,
        },
      };
    }
    case types.LOGIN_FAILURE: {
      return {
        ...state,
        loading: false,
        error: action.payload.error,
        loginStatus: action.payload.status,
        submitting: false,
      };
    }
    case types.LOGOUT_SUCCESS: {
      return {
        ...initialState,
      };
    }
    case types.LOGOUT_FAILURE: {
      return {
        ...state,
        error: action.payload.error,
        submitting: false,
      };
    }
    default:
      return state;
  }
};
