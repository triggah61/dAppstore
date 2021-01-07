import * as types from './actionTypes.js';

const createDappInitialState = {
  dappDetails: null,
  createDappStatus: null,
  submitting: false,
  submitClicked: false,
  error: '',
};

export const createDappReducer = (state = createDappInitialState, action) => {
  switch (action.type) {
    case types.CREATE_DAPP: {
      return {
        ...state,
        error: '',
        submitting: true,
        createDappStatus: null,
        dappDetails: null,
      };
    }
    case types.CREATE_DAPP_SUCCESS: {
      return {
        ...state,
        submitting: false,
        createDappStatus: action.payload.createDappStatus,
        dappDetails: action.payload.dappDetails,
        error: '',
      };
    }
    case types.CREATE_DAPP_FAILURE: {
      return {
        ...state,
        submitting: false,
        createDappStatus: action.payload.createDappStatus,
        error: action.payload.error,
      };
    }
    case types.CREATE_DAPP_SUBMIT_CLICKED: {
      return {
        ...state,
        submitClicked: true,
      };
    }
    default:
      return state;
  }
};

export const yourStoreReducer = {
  createDappReducer,
};
