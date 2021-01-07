import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { actions, selectors } from 'pages/Common/Presale/modules';

import Loader from 'components/Common/Loader';
import ShowError from 'pages/Common/ShowError';
import ItemList from './ItemList';

const ItemContainer = props => {
  const {
    fetching,
    onFetch,
    onFetchCartItems,
    fetchingItems,
    statusItems,
  } = props;

  useEffect(() => {
    onFetch();
    onFetchCartItems();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Loader height="48.5625rem" loading={!fetchingItems && !fetching}>
      {!fetchingItems && !fetching && statusItems === 200 ? (
        <ItemList {...props} />
      ) : (
        <ShowError
          errorHeading="Something went wrong"
          errorSubheading="Please reload the page"
        />
      )}
    </Loader>
  );
};

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
    fetchingItems: selectors.fetchingItems(state),
    statusItems: selectors.statusItems(state),
  };
};

const mapDispatchToProps = {
  onUpdateQuantityByItemId: actions.updateQuantityByItemId,
  addItemToCart: actions.addItemIntoCart,
  onFetchCartItems: actions.fetchCartItems,
  onFetch: actions.fetchPresaleItems,
};

export default connect(mapStateToProps, mapDispatchToProps)(ItemContainer);
