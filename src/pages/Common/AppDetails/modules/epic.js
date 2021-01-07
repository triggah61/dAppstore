import { from } from 'rxjs';
import { mergeMap, map } from 'rxjs/operators';
import { ofType } from 'redux-observable';
import * as types from './actionTypes';
import { fetchAppDetailsSuccess, fetchAppDetailsFailure } from './actions';

export const fetchAppDetails = (action$, store, { api }) => {
  return action$.pipe(
    ofType(types.FETCH_APP_DETAILS),
    mergeMap(({ payload }) => {
      const { type, id } = payload;
      return from(api.fetchAppDetailsApi(type, id)).pipe(
        map(res => {
          const {
            status,
            data: { data: appDetails },
          } = res;
          if (status === 200) {
            return fetchAppDetailsSuccess(status, appDetails);
          }
          return fetchAppDetailsFailure(status, true);
        })
      );
    })
  );
};
