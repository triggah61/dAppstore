import React from 'react';
import { PayPalButton } from 'react-paypal-button-v2';
import { deleteCart } from 'utils/cart';
import { loadSession } from 'session/localStorage';
import { CURRENCY_CODE, PAYPAL_CLIENT_ID } from 'constants/config';

export default function PaypalExpressButton(props) {
  const {
    cartItems,
    email,
    id,
    onAddToPaypalTransaction,
    onUpdateMyVouchers,
    products,
  } = props;

  const items = cartItems.map(item => ({
    name: products[item.id].title,
    unit_amount: {
      currency_code: CURRENCY_CODE,
      value: products[item.id].price,
    },
    quantity: item.quantity,
  }));

  const totalAmount = cartItems.reduce(
    (acc, item) => acc + products[item.id].price * item.quantity,
    0
  );

  const onCreateOrder = (data, actions) => {
    return actions.order.create({
      purchase_units: [
        {
          amount: {
            currency_code: CURRENCY_CODE,
            value: totalAmount,
            breakdown: {
              item_total: { currency_code: CURRENCY_CODE, value: totalAmount },
            },
          },
          items,
        },
      ],
      payer: {
        email_address: email,
      },
    });
  };

  const onSuccess = (details, data) => {
    const lsCartItems = loadSession('cartItems');
    lsCartItems.map(async item => {
      await deleteCart(item.entry_id);
    });
    onAddToPaypalTransaction({ details, data, cartItems, email, id });
    onUpdateMyVouchers({ details, data, cartItems, email, id });
  };

  return (
    <PayPalButton
      createOrder={onCreateOrder}
      onSuccess={onSuccess}
      onError={err => {
        console.log('Error : ', err);
      }}
      catchError={err => {
        console.log('Catched Error : ', err);
      }}
      onCancel={details => {
        console.log('Cancel data : ', details);
      }}
      style={{
        color: 'blue',
        label: 'pay',
        height: 40,
      }}
      options={{
        clientId: PAYPAL_CLIENT_ID,
        disableFunding: 'credit,card',
        currency: CURRENCY_CODE,
      }}
    />
  );
}
