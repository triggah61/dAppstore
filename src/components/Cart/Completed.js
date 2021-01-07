import React from 'react';

import Popup from 'reactjs-popup';
import { IoIosCheckmarkCircleOutline } from 'react-icons/io';

import { Link } from '@reach/router';
import Button from 'components/Common/Button';

import styles from './Completed.module.css';

export default function() {
  return (
    <Popup defaultOpen position="top right" modal className="checkout_popup00">
      <div className={styles.guestCheckoutContainer}>
        <div className={styles.statusSuccess}>
          <IoIosCheckmarkCircleOutline />
          <h2>Thank you for the order</h2>
          <p>
            We've sent a confirmation email to <br />
            <span>{}</span> with order details
          </p>
          <div className={styles.link}>
            <Button isRounded="0" size="sm" link="/">
              PLAY DAPPS
            </Button>
            <br />
            <Link to="/presale">BUY MORE VOUCHER</Link>
          </div>
        </div>
      </div>
    </Popup>
  );
}
