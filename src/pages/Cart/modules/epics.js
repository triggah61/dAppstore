import { from } from 'rxjs';
import { mergeMap, map } from 'rxjs/operators';
import { ofType } from 'redux-observable';
// import { updateMyVouchersApi } from "~/api/presaleItems";

import {
  fetchItemsInCartSuccess,
  fetchItemsInCartFailure,
  updateQuantityByItemIdSuccess,
  updateQuantityByItemIdFailure,
  addToRemoveListSuccess,
  addToRemoveListFailure,
  removeAllFromCartSuccess,
  removeAllFromCartFailure,
  addAllToRemoveListSuccess,
  addAllToRemoveListFailure,
  addToPaypalTransactionSuccess,
  addToPaypalTransactionFailure,
  updateMyVouchersSuccess,
  updateMyVouchersFailure,
} from 'pages/Common/Presale/modules/actions';

import {
  FETCH_ITEMS_IN_CART,
  UPDATE_QUANTITY_BY_ITEM_ID,
  ADD_TO_REMOVE_LIST,
  ADD_ALL_TO_REMOVE_LIST,
  REMOVE_ALL_FROM_CART,
  ADD_TO_PAYPAL_TRANSACTION,
  UPDATE_MY_VOUCHERS,
} from 'pages/Common/Presale/modules/actionTypes';

function isItemExistInList(item, cartItems) {
  const checkItem = cartItems.filter(prevItem => {
    if (prevItem.id === item.id) {
      return prevItem;
    }
  });
  if (checkItem.length > 0) {
    return true;
  }
  return false;
}

function getItemQuantityById(id, cartItems) {
  const items = cartItems.filter(item => {
    if (item.id === id) {
      return item;
    }
  });
  return items;
}

function getMergedCart(cartItems, items = []) {
  return items.filter(item => {
    if (isItemExistInList(item, cartItems)) {
      item.quantity = getItemQuantityById(item.id, cartItems)[0].quantity;
      item.isRemove = getItemQuantityById(item.id, cartItems)[0].isRemove;
      return item;
    }
  });
}

function getCartTotalAmount(cartItems, items) {
  // BUGGY!!!!!
  let totalAmount = 0;
  if (items) {
    items.filter(item => {
      if (isItemExistInList(item, cartItems)) {
        item.quantity = getItemQuantityById(item.id, cartItems)[0].quantity;
        totalAmount += item.price * item.quantity;
        return item;
      }
    });
  } else {
    cartItems.filter(item => {
      totalAmount = item.quantity * item.price;
      return item;
    });
  }

  return totalAmount;
}

export const fetchItemsInCart = (action$, store, { api }) => {
  return action$.pipe(
    ofType(FETCH_ITEMS_IN_CART),
    mergeMap(() => {
      return from(api.fetchItemsInCartApi()).pipe(
        map(res => {
          const { items, cartItems, status } = res;
          const newCartItems = getMergedCart(cartItems, items);
          const cartTotalAmount = getCartTotalAmount(cartItems, items);
          if (newCartItems && status === 200) {
            return fetchItemsInCartSuccess(newCartItems, cartTotalAmount);
          }
          return fetchItemsInCartFailure(403);
        })
      );
    })
  );
};

export const updateQuantityByItemId = (action$, store, { api }) => {
  return action$.pipe(
    ofType(UPDATE_QUANTITY_BY_ITEM_ID),
    mergeMap(({ payload }) => {
      const { id, value, cartItems } = payload;
      if (value > 0 && value !== 0 && /^\d*\.?\d*$/.test(value)) {
        return from(api.updateQuantityByItemIdApi(id, value, cartItems)).pipe(
          map(res => {
            const { cartItems, status } = res;
            const cartTotalAmount = getCartTotalAmount(cartItems);
            if (cartItems && status === 200) {
              return updateQuantityByItemIdSuccess(cartItems, cartTotalAmount);
            }
            return updateQuantityByItemIdFailure(403);
          })
        );
      }
      if (value === '' || !value.match('0')) {
        return from(api.updateQuantityByItemIdApi(id, value, cartItems)).pipe(
          map(res => {
            const { cartItems, status } = res;
            const cartTotalAmount = getCartTotalAmount(cartItems);
            if (cartItems && status === 200) {
              return updateQuantityByItemIdSuccess(cartItems, cartTotalAmount);
            }
            return updateQuantityByItemIdFailure(403);
          })
        );
      }

      return from(api.removeItemFromCartByIdApi(id, cartItems)).pipe(
        map(res => {
          const { cartItems, status } = res;
          const cartTotalAmount = getCartTotalAmount(cartItems);

          if (cartItems && status === 200) {
            return updateQuantityByItemIdSuccess(cartItems, cartTotalAmount);
          }
          return updateQuantityByItemIdFailure(403);
        })
      );
    })
  );
};

export const addToRemoveList = (action$, store, { api }) => {
  return action$.pipe(
    ofType(ADD_TO_REMOVE_LIST),
    mergeMap(({ payload }) => {
      const { id, toRemove, cartItems } = payload;

      return from(api.addToRemoveListApi(id, toRemove, cartItems)).pipe(
        map(res => {
          const { cartItems } = res;
          if (cartItems) {
            return addToRemoveListSuccess(cartItems);
          }
          return addToRemoveListFailure(403);
        })
      );
    })
  );
};

export const addAllToRemoveList = (action$, store, { api }) => {
  return action$.pipe(
    ofType(ADD_ALL_TO_REMOVE_LIST),
    mergeMap(({ payload }) => {
      const { toRemoveAll, cartItems } = payload;
      return from(api.addAllToRemoveListApi(toRemoveAll, cartItems)).pipe(
        map(res => {
          const { cartItems } = res;
          if (cartItems) {
            return addAllToRemoveListSuccess(cartItems);
          }
          return addAllToRemoveListFailure(403);
        })
      );
    })
  );
};

export const removeAllFromCart = (action$, store, { api }) => {
  return action$.pipe(
    ofType(REMOVE_ALL_FROM_CART),
    mergeMap(({ payload }) => {
      const { cartItems } = payload;

      return from(api.removeAllFromCartApi(cartItems)).pipe(
        map(res => {
          const { cartItems } = res;
          if (cartItems) {
            return removeAllFromCartSuccess(cartItems);
          }
          return removeAllFromCartFailure(403);
        })
      );
    })
  );
};

export const addToPaypalTransaction = (action$, store, { api }) => {
  return action$.pipe(
    ofType(ADD_TO_PAYPAL_TRANSACTION),
    mergeMap(({ payload }) => {
      const { paypalTxDetails } = payload;
      console.log(
        'Transaction details------------>',
        JSON.stringify(paypalTxDetails)
      );

      return from(api.addToPaypalTransactionApi(paypalTxDetails)).pipe(
        map(res => {
          if (res) {
            return addToPaypalTransactionSuccess(res);
          }
          return addToPaypalTransactionFailure(403);
        })
      );
    })
  );
};

export const updateMyVouchers = (action$, store, { api }) => {
  return action$.pipe(
    ofType(UPDATE_MY_VOUCHERS),
    mergeMap(({ payload }) => {
      const { paypalTxDetails } = payload;
      return from(api.callUpdateMyVouchersApi(paypalTxDetails)).pipe(
        map(res => {
          if (res) {
            return updateMyVouchersSuccess(res.status);
          }
          return updateMyVouchersFailure(403);
        })
      );
    })
  );
};
