import { from } from 'rxjs';
import { mergeMap, map } from 'rxjs/operators';
import { ofType } from 'redux-observable';

import { prepareStats } from '~/utils';

import {
  recordStatSuccess,
  recordStatFailure,
  fetchStatsSuccess,
  fetchStatsFailure,
} from './actions';
import { RECORD_STAT, FETCH_STATS } from './actionTypes';

const recordStat = (action$, store, { api }) => {
  return action$.pipe(
    ofType(RECORD_STAT),
    mergeMap(({ payload }) => {
      const { appType, appId, userId } = payload;
      return from(api.recordStatApi(appType, appId, userId)).pipe(
        map(res => {
          if (res.status === 200) {
            return recordStatSuccess();
          }
          return recordStatFailure(res.status);
        })
      );
    })
  );
};

const fetchStats = (action$, store, { api }) => {
  return action$.pipe(
    ofType(FETCH_STATS),
    mergeMap(({ payload }) => {
      const { type, id } = payload;
      return from(api.fetchStatsApi(type, id)).pipe(
        map(res => {
          const { status, data } = res;
          if (status === 200) {
            return fetchStatsSuccess(status, prepareStats(data.data));
          }
          return fetchStatsFailure(status, false);
        })
      );
    })
  );
};

export const stats = [recordStat, fetchStats];
