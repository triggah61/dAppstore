import { from } from 'rxjs';
import { mergeMap, map } from 'rxjs/operators';
import { ofType } from 'redux-observable';

import { resetPasswordSuccess, resetPasswordFailure } from './actions';
import { RESET_PASSWORD } from './actionTypes';

export const resetPassword = (action$, store, { api }) => {
  return action$.pipe(
    ofType(RESET_PASSWORD),
    mergeMap(({ payload }) => {
      return from(api.resetPasswordApi(payload)).pipe(
        map(res => {
          const { status, data } = res;
          if (status === 200) {
            return resetPasswordSuccess(data.message);
          }
          return resetPasswordFailure(data.message);
        })
      );
    })
  );
};
