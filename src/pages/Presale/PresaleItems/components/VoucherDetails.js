import React, { useContext } from 'react';
import Modal from 'react-responsive-modal';
import { startCase, toLower } from 'lodash';

import { CartContext } from 'contexts/CartContext';

import Card from './Card';
import PackageList from './PackageList';
import AddButton from './AddButton';

import styles from './VoucherDetails.module.scss';

const VoucherDetails = props => {
  const { vouchers, addItemToCart, cartItemIDs } = props;
  // Note: addItem & Remove item should be in context
  const { selectedItemID, selectItem, addToCart } = useContext(CartContext);

  const modalClassName = {
    overlay: styles.modalOverlay,
    modal: styles.main,
    closeIcon: styles.closeIcon,
  };

  const onCloseModal = () => {
    selectItem(null);
  };
  const voucher = vouchers[selectedItemID];

  const isItemInCart =
    voucher && cartItemIDs && cartItemIDs.includes(voucher.id);

  const onClickCartButton = id => () => {
    const cartItem = { id, quantity: 1 };

    if (!isItemInCart) {
      addItemToCart(cartItem);
      addToCart(cartItem);
    }
  };

  return (
    <Modal
      open={!!selectedItemID}
      onClose={onCloseModal}
      center
      classNames={modalClassName}
    >
      <h3 className={styles.header}>Voucher Details</h3>
      <div
        className={`ds-grid ds-gap-6 ds-grid-cols-1 sm:ds-grid-cols-1 md:ds-grid-cols-2 ${styles.content}`}
      >
        <Card
          item={voucher}
          isInModal
          className={`${styles.voucherCard} md:ds-ml-4`}
        />
        {voucher && (
          <div className={`${styles.details} md:ds-mr-4`}>
            <h4 className={styles.title}>
              Unique {startCase(toLower(voucher.title))} Benefits
            </h4>
            <PackageList id={voucher.id} items={voucher.packages} />
            <PackageList
              id={voucher.id}
              items={voucher.alpha_packages}
              title="dAppstore ALPHA Package"
            />
            <PackageList
              id={voucher.id}
              items={voucher.beta_packages}
              title="dAppstore BETA Package"
            />

            <AddButton
              onClick={onClickCartButton(voucher.id)}
              isItemInCart={isItemInCart}
            />
          </div>
        )}
      </div>
    </Modal>
  );
};

export default VoucherDetails;
