/* eslint-disable no-console */
import React, { useCallback, useState } from 'react';

const CartContext = React.createContext();

function CartProvider({ children }) {
  const [modalStatus] = useState(false);
  const [selectedItemID, setSelectedItemID] = useState(null);
  const [items, setCartItems] = useState([]); // Note: this is temporary

  const selectItem = useCallback(item => {
    setSelectedItemID(item);
  }, []);

  const isItemInCart = useCallback(
    item => {
      return !!items.find(cartItem => cartItem.id === item.id);
    },
    [items]
  );

  const addToCart = useCallback(
    value => {
      if (isItemInCart(value.id)) {
        console.warn('already added in cart'); // Temporary
      } else {
        setCartItems([...items, value]);
      }
    },
    [isItemInCart, items]
  );

  const removeToCart = useCallback(
    id => {
      setCartItems(items.filter(item => item.id !== id));
    },
    [items]
  );

  const context = {
    modalStatus,
    selectedItemID,
    selectItem,
    addToCart,
    removeToCart,
    setCartItems,
  };

  return (
    <CartContext.Provider value={context}>{children}</CartContext.Provider>
  );
}

export { CartContext, CartProvider };
