import { from } from 'rxjs';
import { mergeMap, map } from 'rxjs/operators';
import { ofType } from 'redux-observable';

import {
  fetchUserAccountSuccess,
  fetchUserAccountFailure,
  updateUserAccountSuccess,
  updateUserAccountFailure,
} from './actions';

import { FETCH_USER_ACCOUNT, UPDATE_USER_ACCOUNT } from './actionTypes';

export const fetchUserAccount = (action$, store, { api }) => {
  return action$.pipe(
    ofType(FETCH_USER_ACCOUNT),
    mergeMap(({ payload }) => {
      const { id } = payload;
      return from(api.fetchUserAccountApi(id)).pipe(
        map(res => {
          const { status, data } = res;
          if (status === 200) {
            return fetchUserAccountSuccess(data.data);
          }
          return fetchUserAccountFailure(status);
        })
      );
    })
  );
};

export const updateUserAccount = (action$, store, { api }) => {
  return action$.pipe(
    ofType(UPDATE_USER_ACCOUNT),
    mergeMap(({ payload }) => {
      const { id } = payload;

      return from(api.updateUserAccountApi(id, payload)).pipe(
        map(res => {
          const { status, data } = res;
          if (status === 200) {
            return updateUserAccountSuccess(status, data.data);
          }
          return updateUserAccountFailure(status);
        })
      );
    })
  );
};
