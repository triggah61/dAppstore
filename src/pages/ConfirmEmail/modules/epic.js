import { from } from 'rxjs';
import { mergeMap, map } from 'rxjs/operators';
import { ofType } from 'redux-observable';
import * as types from './actionTypes';
import { confirmEmailSuccess, confirmEmailFailure } from './actions';

export const confirmEmail = (action$, store, { api }) => {
  return action$.pipe(
    ofType(types.CONFIRM_EMAIL),
    mergeMap(({ payload }) => {
      const { token } = payload;
      return from(api.confirmEmailApi(token)).pipe(
        map(res => {
          const { status, data: message } = res;
          if (status === 200) {
            return confirmEmailSuccess(status);
          }
          return confirmEmailFailure(status, message);
        })
      );
    })
  );
};
