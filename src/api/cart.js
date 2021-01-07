import { deleteCart, updateCart } from 'utils/cart';
import { objectToArray } from 'utils';
import {
  loadSession,
  saveSession,
  purgeSession,
} from '../session/localStorage';
import { fetchPresaleItemsApi, updateMyVouchersApi } from './presaleItems';

const CART_ITEMS = 'cartItems';

export async function fetchItemsInCartApi() {
  const items = await fetchPresaleItemsApi();
  const { data } = items.data;
  const { status } = items;
  return { items: data, cartItems: loadSession(CART_ITEMS), status };
}

export async function updateQuantityByItemIdApi(id, value, cartItems) {
  const quantity = Number(value);

  const ALL_CART_ITEMS = loadSession(CART_ITEMS);

  const itemList = objectToArray(ALL_CART_ITEMS, 'id');

  updateCart({ id, quantity, entryId: itemList[id].entry_id });

  const localCartItems = ALL_CART_ITEMS.map(item => {
    if (id === item.id) {
      return {
        ...item,
        quantity,
      };
    }
    return item;
  });

  const tempCartItems = cartItems.map(item => {
    if (id === item.id) {
      return {
        ...item,
        quantity,
      };
    }
    return item;
  });
  saveSession(CART_ITEMS, localCartItems);

  return { cartItems: tempCartItems, status: 200 };
}

export async function removeItemFromCartByIdApi(id, _) {
  const ALL_CART_ITEMS = loadSession(CART_ITEMS);

  const itemList = objectToArray(ALL_CART_ITEMS, 'id');

  deleteCart(itemList[id].entry_id);

  const localCartItems = ALL_CART_ITEMS.filter(prevItem => {
    return id !== prevItem.id;
  });
  const tempCartItems = ALL_CART_ITEMS.filter(prevItem => {
    return id !== prevItem.id;
  });
  saveSession(CART_ITEMS, localCartItems);
  // setCart(localCartItems);
  return { cartItems: tempCartItems, status: 200 };
}

export async function addToRemoveListApi(id, toRemove, cartItems) {
  const ALL_CART_ITEMS = loadSession(CART_ITEMS);
  const localCartItems = ALL_CART_ITEMS.filter(prevItem => {
    if (id === prevItem.id) {
      if (toRemove) {
        prevItem.isRemove = true;
      } else {
        prevItem.isRemove = false;
      }
    }
    return prevItem;
  });
  const tempCartItems = cartItems.filter(prevItem => {
    if (id === prevItem.id) {
      if (toRemove) {
        prevItem.isRemove = true;
      } else {
        prevItem.isRemove = false;
      }
    }
    return prevItem;
  });

  saveSession(CART_ITEMS, localCartItems);
  return { cartItems: tempCartItems };
}

export async function addToPaypalTransactionApi(paypalTxDetails) {
  saveSession(CART_ITEMS, []);
  return paypalTxDetails;
}

export async function callUpdateMyVouchersApi(paypalTxDetails) {
  const items = await updateMyVouchersApi(paypalTxDetails);
  const emptyCart = (CART_ITEMS, []);
  // setCart(emptyCart);
  return items;
}

export async function addAllToRemoveListApi(toRemoveAll, cartItems) {
  const ALL_CART_ITEMS = loadSession(CART_ITEMS);

  const localCartItems = ALL_CART_ITEMS.filter(prevItem => {
    if (toRemoveAll) {
      prevItem.isRemove = true;
    } else {
      prevItem.isRemove = false;
    }
    return prevItem;
  });
  const tempCartItems = cartItems.filter(prevItem => {
    if (toRemoveAll) {
      prevItem.isRemove = true;
    } else {
      prevItem.isRemove = false;
    }
    return prevItem;
  });

  saveSession(CART_ITEMS, localCartItems);
  return { cartItems: tempCartItems };
}

export async function removeAllFromCartApi(items = []) {
  const targetIds = loadSession('ids');
  const cartItems = items.filter(item => !targetIds.includes(item.id));

  const lsCartItems = loadSession(CART_ITEMS) || [];
  purgeSession('ids');
  saveSession(
    CART_ITEMS,
    lsCartItems.filter(({ id }) => !targetIds.includes(id))
  );

  await lsCartItems.map(async ({ entry_id, id }) => {
    targetIds.includes(id) && (await deleteCart(entry_id));
  });

  return { cartItems };
}
