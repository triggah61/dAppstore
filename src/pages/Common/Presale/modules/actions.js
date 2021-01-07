import * as types from './actionTypes';

export const fetchItemsInCart = () => {
  return {
    type: types.FETCH_ITEMS_IN_CART,
    payload: {},
  };
};

export const fetchItemsInCartSuccess = (newCartItems, cartTotalAmount) => {
  return {
    type: types.FETCH_ITEMS_IN_CART_SUCCESS,
    payload: {
      newCartItems,
      cartTotalAmount,
    },
  };
};

export const fetchItemsInCartFailure = status => {
  return {
    type: types.FETCH_ITEMS_IN_CART_FAILURE,
    payload: {
      status,
    },
  };
};

export const updateQuantityByItemId = (id, value, cartItems) => {
  return {
    type: types.UPDATE_QUANTITY_BY_ITEM_ID,
    payload: { id, value, cartItems },
  };
};

export const updateQuantityByItemIdSuccess = (
  newCartItems,
  cartTotalAmount
) => {
  return {
    type: types.UPDATE_QUANTITY_BY_ITEM_ID_SUCCESS,
    payload: { cartItems: newCartItems, cartTotalAmount },
  };
};

export const updateQuantityByItemIdFailure = status => {
  return {
    type: types.UPDATE_QUANTITY_BY_ITEM_ID_FAILURE,
    payload: {
      status,
    },
  };
};

export const addToRemoveList = (id, toRemove, cartItems) => {
  return {
    type: types.ADD_TO_REMOVE_LIST,
    payload: { id, toRemove, cartItems },
  };
};

export const addToRemoveListSuccess = newCartItems => {
  return {
    type: types.ADD_TO_REMOVE_LIST_SUCCESS,
    payload: { cartItems: newCartItems },
  };
};

export const addToRemoveListFailure = status => {
  return {
    type: types.ADD_TO_REMOVE_LIST_FAILURE,
    payload: {
      status,
    },
  };
};

export const addAllToRemoveList = (toRemoveAll, cartItems) => {
  return {
    type: types.ADD_ALL_TO_REMOVE_LIST,
    payload: { toRemoveAll, cartItems },
  };
};

export const addAllToRemoveListSuccess = (newCartItems, cartTotalAmount) => {
  return {
    type: types.ADD_ALL_TO_REMOVE_LIST_SUCCESS,
    payload: { cartItems: newCartItems, cartTotalAmount },
  };
};

export const addAllToRemoveListFailure = status => {
  return {
    type: types.ADD_ALL_TO_REMOVE_LIST_FAILURE,
    payload: {
      status,
    },
  };
};

export const removeAllFromCart = cartItems => {
  return {
    type: types.REMOVE_ALL_FROM_CART,
    payload: { cartItems },
  };
};

export const removeAllFromCartSuccess = newCartItems => {
  return {
    type: types.REMOVE_ALL_FROM_CART_SUCCESS,
    payload: { cartItems: newCartItems },
  };
};

export const removeAllFromCartFailure = status => {
  return {
    type: types.REMOVE_ALL_FROM_CART_FAILURE,
    payload: {
      status,
    },
  };
};

export const fetchPresaleItems = () => {
  return {
    type: types.FETCH_PRESALE_ITEMS,
    payload: {},
  };
};

export const fetchPresaleItemsSuccess = items => {
  return {
    type: types.FETCH_PRESALE_ITEMS_SUCCESS,
    payload: {
      items,
    },
  };
};

export const fetchPresaleItemsFailure = status => {
  return {
    type: types.FETCH_PRESALE_ITEMS_FAILURE,
    payload: {
      status,
    },
  };
};

export const fetchCartItems = () => {
  return {
    type: types.FETCH_CART_ITEMS,
    payload: {},
  };
};

export const fetchCartItemsSuccess = (cartItems, cartItemCount) => {
  return {
    type: types.FETCH_CART_ITEMS_SUCCESS,
    payload: {
      cartItems,
      cartItemCount,
    },
  };
};

export const fetchCartItemsFailure = status => {
  return {
    type: types.FETCH_CART_ITEMS_FAILURE,
    payload: {
      status,
    },
  };
};

export const addItemIntoCart = item => {
  return {
    type: types.ADD_ITEM_INTO_CART,
    payload: item,
  };
};

export const addItemIntoCartSuccess = cartItems => {
  return {
    type: types.ADD_ITEM_INTO_CART_SUCCESS,
    payload: {
      cartItems,
      cartItemCount: cartItems.length,
    },
  };
};

export const addItemIntoCartFailure = status => {
  return {
    type: types.ADD_ITEM_INTO_CART_FAILURE,
    payload: {
      status,
    },
  };
};

export const addToPaypalTransaction = details => {
  return {
    type: types.ADD_TO_PAYPAL_TRANSACTION,
    payload: {
      paypalTxDetails: details,
    },
  };
};

export const addToPaypalTransactionSuccess = TxData => {
  return {
    type: types.ADD_TO_PAYPAL_TRANSACTION_SUCCESS,
    payload: {
      paypalTxDetails: TxData,
    },
  };
};

export const addToPaypalTransactionFailure = status => {
  return {
    type: types.ADD_TO_PAYPAL_TRANSACTION_FAILURE,
    payload: {
      status,
    },
  };
};

export const updateMyVouchers = details => {
  return {
    type: types.UPDATE_MY_VOUCHERS,
    payload: {
      paypalTxDetails: details,
    },
  };
};

export const updateMyVouchersSuccess = TxData => {
  return {
    type: types.UPDATE_MY_VOUCHERS_SUCCESS,
    payload: {
      paypalTxDetails: TxData,
    },
  };
};

export const updateMyVouchersFailure = status => {
  return {
    type: types.UPDATE_MY_VOUCHERS_FAILURE,
    payload: {
      status,
    },
  };
};
