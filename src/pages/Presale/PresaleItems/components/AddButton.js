import React, { useState } from 'react';
import Button from 'components/Common/Button';

import clsx from 'clsx';
import styles from './AddButton.module.scss';

const AddButton = ({ onClick, isItemInCart }) => {
  const [added, setAdded] = useState(isItemInCart);

  const onClickCart = () => {
    if (!added) {
      onClick();
      setAdded(true);
    }
  };

  return (
    <Button
      type="submit"
      isRounded="5px"
      className={clsx(styles.addtoCart, added && styles.added)}
      onClick={onClickCart}
    >
      <div className={styles.default}>Add to cart</div>
      <div className={styles.success}>Added</div>
    </Button>
  );
};

export default AddButton;
