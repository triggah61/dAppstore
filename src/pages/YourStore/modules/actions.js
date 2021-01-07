import * as types from './actionTypes.js';

export const createDapp = dappDetails => {
  return {
    type: types.CREATE_DAPP,
    payload: {
      dappDetails,
    },
  };
};

export const createDappSuccess = (createDappStatus, dappDetails) => {
  return {
    type: types.CREATE_DAPP_SUCCESS,
    payload: {
      createDappStatus,
      dappDetails,
    },
  };
};

export const createDappFailure = (createDappStatus, error) => {
  return {
    type: types.CREATE_DAPP_FAILURE,
    payload: {
      createDappStatus,
      error,
    },
  };
};

export const submitClicked = () => {
  return {
    type: types.CREATE_DAPP_SUBMIT_CLICKED,
  };
};
