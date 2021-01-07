import { setCart } from 'utils/cart';
import { loadSession, saveSession } from '../session/localStorage';

const CART_ITEMS = 'cartItems';

export async function fetchCartItemsApi() {
  return loadSession(CART_ITEMS);
  // TODO - here will use api call for cart items from backend
}

export async function addItemIntoCartApi(item) {
  const res = await setCart(item);
  const cartItems = loadSession(CART_ITEMS);

  if (res) {
    const {
      data: { data: newItem },
    } = res;
    const isItemExists = cartItems.find(cartItem => cartItem.id === newItem.id);

    if (isItemExists) {
      saveSession(
        CART_ITEMS,
        cartItems.map(cartItem =>
          cartItem.id === newItem.voucherID
            ? { ...item, entry_id: newItem.id }
            : cartItem
        )
      );
    } else {
      saveSession(CART_ITEMS, [
        ...cartItems,
        { ...item, entry_id: newItem.id },
      ]);
    }
  } else {
    saveSession(CART_ITEMS, [...cartItems, { ...item, entry_id: Date.now() }]);
  }

  let tempCartItems = [];
  if (cartItems) {
    if (cartItems.length >= 1) {
      if (isItemExistInCart(item, cartItems)) {
        tempCartItems = cartItems.map(prevItem => {
          if (item.id === prevItem.id) {
            prevItem.quantity += item.quantity;
          }
          return prevItem;
        });
      } else {
        tempCartItems = cartItems.map(prevItem => {
          return prevItem;
        });
        tempCartItems[cartItems.length] = item;
      }
    } else {
      tempCartItems = [item];
    }
  } else {
    tempCartItems = [item];
  }

  return loadSession(CART_ITEMS);
}

function isItemExistInCart(item, cartItems) {
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
