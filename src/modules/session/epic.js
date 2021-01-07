import { from } from 'rxjs';
import { mergeMap, map } from 'rxjs/operators';
import { ofType } from 'redux-observable';

import { SESSION_ID } from 'constants/config';
import { getCart } from 'utils/cart';
import { saveSession } from '~/session/localStorage';
import {
  loginSuccess,
  loginFailure,
  reloginSuccess,
  reloginFailure,
} from './actions';

import { LOGIN, RE_LOGIN } from './actionTypes';

export const login = (action$, store, { api }) => {
  return action$.pipe(
    ofType(LOGIN),
    mergeMap(({ payload }) => {
      return from(api.loginUserApi(payload)).pipe(
        map(res => {
          const { status, data } = res;
          if (status === 200) {
            data.data.isAdmin = !!data.data.privileges;
            saveSession(SESSION_ID, data.data);

            getCart(value => {
              const vouchers = value.data.map(item => ({
                quantity: item.quantity,
                id: item.voucher_id,
                entry_id: item.id,
              }));
              value && saveSession('cartItems', vouchers);
            });
            return loginSuccess(data.data);
          }
          return loginFailure(status, data.message);
        })
      );
    })
  );
};

export const relogin = (action$, store, { api }) => {
  return action$.pipe(
    ofType(RE_LOGIN),
    mergeMap(({ payload }) => {
      return from(api.reloginApi(payload)).pipe(
        map(res => {
          const { status, data } = res;
          if (status === 200) {
            return reloginSuccess(data.data);
          }
          return reloginFailure(status, data.message);
        })
      );
    })
  );
};
