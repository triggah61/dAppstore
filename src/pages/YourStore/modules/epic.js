import { from } from 'rxjs';
import { mergeMap, map } from 'rxjs/operators';
import { ofType } from 'redux-observable';

import { createDappSuccess, createDappFailure } from './actions';
import { CREATE_DAPP } from './actionTypes';

export const createDapp = (action$, store, { api }) => {
  return action$.pipe(
    ofType(CREATE_DAPP),
    mergeMap(({ payload }) => {
      const { dappDetails } = payload;
      return from(api.createDapp(dappDetails)).pipe(
        map(res => {
          const { status, data } = res;
          if (status === 200) {
            return createDappSuccess(status, data.data);
          }
          return createDappFailure(status, data.message);
        })
      );
    })
  );
};

export const yourStore = [createDapp];
