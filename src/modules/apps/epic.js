import { from } from 'rxjs';
import { mergeMap, map } from 'rxjs/operators';
import { ofType } from 'redux-observable';

import { createKey } from '~/utils';
import { fetchAppsSuccess, fetchAppsFailure } from './actions';
import { FETCH_APPS } from './actionTypes';

export const fetchApps = (action$, store, { api }) => {
  return action$.pipe(
    ofType(FETCH_APPS),
    mergeMap(({ payload }) => {
      const { type, tag, user_id } = payload;
      return from(api.fetchApps(type, tag, user_id)).pipe(
        map(res => {
          const { status, data } = res;
          const key = createKey(type, tag);
          if (status === 200) {
            return fetchAppsSuccess(status, data.data, key);
          }
          return fetchAppsFailure(status, true, key);
        })
      );
    })
  );
};
