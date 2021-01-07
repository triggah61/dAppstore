import * as types from './actionTypes';

const initialState = {
  account: {},
  error: false,
  status: null,
  statusItems: null,
  fetching: false,
  fetchingItems: false,
  submitting: false,
  loading: false,
};

export const commonReducer = (state = initialState, action) => {
  switch (action.type) {
    // fetch items in cart

    case types.FETCH_ITEMS_IN_CART: {
      return {
        ...state,
        fetching: true,
      };
    }
    case types.FETCH_ITEMS_IN_CART_SUCCESS: {
      return {
        ...state,
        cartItems: action.payload.newCartItems,
        cartItemCount: action.payload.newCartItems.length,
        cartTotalAmount: action.payload.cartTotalAmount,
        status: null,
        submitting: false,
        loading: false,
        error: false,
        fetching: false,
      };
    }
    case types.FETCH_ITEMS_IN_CART_FAILURE: {
      return {
        ...state,
        submitting: false,
        loading: false,
        error: true,
        fetching: false,
      };
    }

    case types.UPDATE_QUANTITY_BY_ITEM_ID: {
      return {
        ...state,
        submitting: true,
        fetching: false,
      };
    }
    case types.UPDATE_QUANTITY_BY_ITEM_ID_SUCCESS: {
      return {
        ...state,
        cartItems: action.payload.cartItems,
        cartItemCount: action.payload.cartItems.length,
        removeMultiple: action.payload.cartItems.length,
        cartTotalAmount: action.payload.cartTotalAmount,
        status: null,
        fetching: false,
        submitting: false,
        loading: false,
        error: false,
      };
    }
    case types.UPDATE_QUANTITY_BY_ITEM_ID_FAILURE: {
      return {
        ...state,
        submitting: false,
        loading: false,
        fetching: false,
        error: true,
      };
    }

    case types.ADD_TO_REMOVE_LIST: {
      return {
        ...state,
      };
    }
    case types.ADD_TO_REMOVE_LIST_SUCCESS: {
      return {
        ...state,
        cartItems: action.payload.cartItems,
        status: null,
        submitting: false,
        loading: false,
        error: false,
      };
    }
    case types.ADD_TO_REMOVE_LIST_FAILURE: {
      return {
        ...state,
        submitting: false,
        loading: false,
        error: true,
      };
    }

    case types.ADD_ALL_TO_REMOVE_LIST: {
      return {
        ...state,
      };
    }
    case types.ADD_ALL_TO_REMOVE_LIST_SUCCESS: {
      return {
        ...state,
        cartItems: action.payload.cartItems,
        status: null,
        submitting: false,
        loading: false,
        error: false,
      };
    }
    case types.ADD_ALL_TO_REMOVE_LIST_FAILURE: {
      return {
        ...state,
        submitting: false,
        loading: false,
        error: true,
      };
    }

    case types.REMOVE_ALL_FROM_CART: {
      return {
        ...state,
      };
    }
    case types.REMOVE_ALL_FROM_CART_SUCCESS: {
      return {
        ...state,
        cartItems: action.payload.cartItems,
        status: null,
        submitting: false,
        loading: false,
        error: false,
      };
    }
    case types.REMOVE_ALL_FROM_CART_FAILURE: {
      return {
        ...state,
        submitting: false,
        loading: false,
        error: true,
      };
    }

    // fetch presale items
    case types.FETCH_PRESALE_ITEMS: {
    return {
        ...state,
        fetchingItems: true,
      };
  }
  case types.FETCH_PRESALE_ITEMS_SUCCESS: {
    return {
        ...state,
      items: action.payload.items,
        statusItems: 200,
      submitting: false,
        loading: false,
      error: false,
        fetchingItems: false,
      };
  }
  case types.FETCH_PRESALE_ITEMS_FAILURE: {
    return {
      ...state,
      statusItems: action.payload.status,
      submitting: false,
        loading: false,
      error: true,
        fetchingItems: false,
      };
  }

  // fetch cart items

  case types.FETCH_CART_ITEMS: {
      return {
      ...state,
        fetching: true,
      };
  }
    case types.FETCH_CART_ITEMS_SUCCESS: {
    return {
        ...state,
      cartItems: action.payload.cartItems,
      cartItemCount: action.payload.cartItemCount,
      status: null,
      submitting: false,
      loading: false,
        error: false,
        fetching: false,
      };
  }
  case types.FETCH_CART_ITEMS_FAILURE: {
    return {
      ...state,
      status: action.payload.status,
      submitting: false,
        loading: false,
      error: true,
        fetching: false,
      };
  }

    // add item into cart

  case types.ADD_ITEM_INTO_CART: {
    return {
        ...state,
      status: null,
        error: false,
      submitting: true,
        loading: false,
      };
    }
    case types.ADD_ITEM_INTO_CART_SUCCESS: {
    return {
        ...state,
        cartItemCount: action.payload.cartItems.length,
        cartItems: action.payload.cartItems,
        status: action.payload.status,
      error: false,
        submitting: false,
        loading: false,
      };
    }
  case types.ADD_ITEM_INTO_CART_FAILURE: {
      return {
      ...state,
      status: action.payload.status,
      submitting: false,
        loading: false,
      error: true,
      };
    }

  // add paypal transactions

  case types.ADD_TO_PAYPAL_TRANSACTION: {
      return {
      ...state,
      status: null,
      error: false,
      submitting: true,
        loading: false,
      };
  }
    case types.ADD_TO_PAYPAL_TRANSACTION_SUCCESS: {
    return {
      ...state,
        paypalTxDetails: action.payload.paypalTxDetails,
        cartItems: [],
        cartItemCount: 0,
        txStatus: action.payload.paypalTxDetails.details.status,
        error: false,
      submitting: false,
        loading: false,
      };
  }
  case types.ADD_TO_PAYPAL_TRANSACTION_FAILURE: {
      return {
      ...state,
        status: action.payload.status,
      submitting: false,
        loading: false,
      error: true,
      };
    }

  // add paypal transactions

  case types.UPDATE_MY_VOUCHERS: {
    return {
      ...state,
      status: null,
      error: false,
        submitting: true,
        loading: false,
      };
    }
    case types.UPDATE_MY_VOUCHERS_SUCCESS: {
    return {
        ...state,
      txStatus: action.payload.status,
        error: false,
      submitting: false,
        loading: false,
      };
  }
  case types.UPDATE_MY_VOUCHERS_FAILURE: {
    return {
      ...state,
      status: action.payload.status,
      submitting: false,
        loading: false,
      error: true,
      };
    }

    default:
      return state;
  }
};
