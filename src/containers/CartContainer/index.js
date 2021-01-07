import React, { useEffect } from 'react';
import { connect as rrconnect } from 'react-redux';

import Cart from '~/components/Cart';
import Loader from '~/components/Common/Loader';

const CartContainer = props => {
  const { fetching, onFetch, onFetchCartItems } = props;

  useEffect(() => {
    onFetch();
    onFetchCartItems();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Loader height="38.5625rem" loading={!fetching}>
      {!fetching && <Cart {...props} />}
    </Loader>
  );
};

export const connect = ({ actions, selectors }) => {
  const mapStateToProps = state => {
    return {
      fetching: selectors.fetching(state),
      items: selectors.items(state),
      cartItems: selectors.cartItems(state),
      cartItemCount: selectors.cartItemCount(state),
      message: selectors.successMessage(state),
      submitting: selectors.submitting(state),
      status: selectors.status(state),
      error: selectors.error(state),
      cartTotalAmount: selectors.cartTotalAmount(state),
      paypalTxDetails: selectors.paypalTxDetails(state),
      txStatus: selectors.txStatus(state),
    };
  };

  const mapDispatchToProps = {
    onAddAllToRemoveList: actions.addAllToRemoveList,
    onFetchCartItems: actions.fetchItemsInCart,
    onFetch: actions.fetchPresaleItems,
    onUpdateQuantityByItemId: actions.updateQuantityByItemId,
    onAddToRemoveList: actions.addToRemoveList,
    onRemoveAllFromCart: actions.removeAllFromCart,
    onCheckout: actions.checkout,
    onAddToPaypalTransaction: actions.addToPaypalTransaction,
    onUpdateMyVouchers: actions.updateMyVouchers,
  };

  return rrconnect(mapStateToProps, mapDispatchToProps)(CartContainer);
};
