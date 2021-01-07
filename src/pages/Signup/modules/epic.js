import { from } from 'rxjs';
import { mergeMap, map } from 'rxjs/operators';
import { ofType } from 'redux-observable';

import { signupSuccess, signupFailure } from './actions';
import { SIGNUP } from './actionTypes';

export const signup = (action$, store, { api }) => {
  return action$.pipe(
    ofType(SIGNUP),
    mergeMap(({ payload }) => {
      return from(api.signupUserApi(payload)).pipe(
        map(res => {
          const { status, data } = res;
          if (status === 201) {
            return signupSuccess(status, data.message);
          }
          return signupFailure(status, data.message);
        })
      );
    })
  );
};
