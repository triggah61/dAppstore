import { from } from 'rxjs';
import { mergeMap, map } from 'rxjs/operators';
import { ofType } from 'redux-observable';
import { loadSession, saveSession } from '~/session/localStorage';

import {
  fetchPresaleItemsSuccess,
  fetchPresaleItemsFailure,
  addItemIntoCartSuccess,
  addItemIntoCartFailure,
  fetchCartItemsSuccess,
  fetchCartItemsFailure,
} from '../../../Common/Presale/modules/actions';

import {
  FETCH_PRESALE_ITEMS,
  ADD_ITEM_INTO_CART,
  FETCH_CART_ITEMS,
} from '../../../Common/Presale/modules/actionTypes';

export const fetchPresaleItems = (action$, store, { api }) => {
  return action$.pipe(
    ofType(FETCH_PRESALE_ITEMS),
    mergeMap(() => {
      return from(api.fetchPresaleItemsApi()).pipe(
        map(res => {
          const { status, data } = res;
          if (status === 200) return fetchPresaleItemsSuccess(data.data);
          return fetchPresaleItemsFailure(status);
        })
      );
    })
  );
};

export const fetchCartItems = (action$, store, { api }) => {
  const checkCartItems = loadSession('cartItems');

  if (!checkCartItems) {
    saveSession('cartItems', []);
  }
  return action$.pipe(
    ofType(FETCH_CART_ITEMS),
    mergeMap(() => {
      return from(api.fetchCartItemsApi()).pipe(
        map(res => {
          if (res) return fetchCartItemsSuccess(res, res.length);
          return fetchCartItemsFailure(403);
        })
      );
    })
  );
};

export const addItemIntoCart = (action$, store, { api }) => {
  return action$.pipe(
    ofType(ADD_ITEM_INTO_CART),
    // delay(500),
    mergeMap(({ payload }) => {
      return from(api.addItemIntoCartApi(payload)).pipe(
        map(res => {
          if (res) return addItemIntoCartSuccess(res);
          return addItemIntoCartFailure(403);
        })
      );
    })
  );
};
