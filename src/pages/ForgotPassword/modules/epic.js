import { from } from 'rxjs';
import { mergeMap, map } from 'rxjs/operators';
import { ofType } from 'redux-observable';

import { forgotPasswordSuccess, forgotPasswordFailure } from './actions';
import { FORGOT_PASSWORD } from './actionTypes';

export const forgotPassword = (action$, store, { api }) => {
  return action$.pipe(
    ofType(FORGOT_PASSWORD),
    mergeMap(({ payload }) => {
      return from(api.forgotPasswordApi(payload)).pipe(
        map(res => {
          const { status, data } = res;
          if (status === 200) {
            return forgotPasswordSuccess(data.message);
          }
          return forgotPasswordFailure(data.message);
        })
      );
    })
  );
};
