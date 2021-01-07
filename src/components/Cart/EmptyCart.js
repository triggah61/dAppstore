import React from 'react';

import styles from './EmptyCart.module.css';

export default function() {
  return (
    <div className={styles.emptyCart}>
      <h1>Your cart is empty now</h1>
    </div>
  );
}
