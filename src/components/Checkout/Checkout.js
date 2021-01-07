import React from 'react';
import clsx from 'clsx';

import PaypalExpressButton from 'components/PaypalButton';
import { Form } from 'react-bootstrap';
import { useFormik } from 'formik';
import { object, string, ref } from 'yup';

import assets from 'utils/assets';

import styles from './Checkout.module.css';

const schema = object().shape({
  email: string()
    .email('Invalid email')
    .required('Required'),

  confirm: string()
    .email('Invalid confirm email')
    .required('Required')
    .oneOf([ref('email'), null], 'Emails must match'),
});

function CheckoutForm(props) {
  const {
    email,
    onAddToPaypalTransaction,
    onUpdateMyVouchers,
    cartTotalAmount,
    cartItems,
    id,
    products,
  } = props;

  const formik = useFormik({
    initialValues: {
      email,
      confirm: email,
      confirmed: false,
    },
    validationSchema: schema,
  });

  const {
    errors,
    values,
    touched,
    handleSubmit,
    handleChange,
    handleBlur,
  } = formik;

  const handlePaste = e => e.preventDefault();

  const showPaypalButtonCover =
    values.email.length === 0 ||
    errors.email ||
    values.confirm.length === 0 ||
    errors.confirm ||
    values.confirmed === false;
  return (
    <form onSubmit={handleSubmit}>
      <div className={styles.wrapper}>
        <div className={styles.logo}>
          <img
            src={assets`images/logo-beta.png`}
            width={200}
            alt="dAppstore Logo"
          />
        </div>
        <div className={styles.labelContainer}>
          <label htmlFor="chkemail">
            Email *
            <span className={styles.errorMsg}>
              {touched.email && errors.email}
            </span>
          </label>
        </div>
        <input
          id="chkemail"
          className={styles.textInput}
          type="email"
          label="Email"
          name="email"
          onChange={handleChange}
          onBlur={handleBlur}
          value={values.email}
          onPaste={handlePaste}
        />
        <div className={styles.labelContainer}>
          <label htmlFor="chkconfirm">
            Confirm Email *
            <span className={styles.errorMsg}>
              {touched.confirm && errors.confirm}
            </span>
          </label>
        </div>
        <input
          id="chkconfirm"
          className={styles.textInput}
          label="Confirm Email"
          name="confirm"
          onChange={handleChange}
          onBlur={handleBlur}
          value={values.confirm}
          onPaste={handlePaste}
        />
        <Form.Group
          controlId="formConfirmed"
          className={clsx(
            styles.formGroup,
            touched.email &&
              touched.confirm &&
              !errors.email &&
              !errors.confirm &&
              !values.confirmed &&
              styles.errorMsg
          )}
        >
          <Form.Check
            type="checkbox"
            name="confirmed"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.confirmed}
            label="Please ensure that you have correctly typed in your email address to avoid errors in the transaction. Thank you."
          />
        </Form.Group>

        <div className={styles.paypalButton}>
          {showPaypalButtonCover && (
            <div
              role="button"
              className={styles.layer}
              onClick={handleSubmit}
              onKeyDown={() => {}}
              tabIndex={-4}
            />
          )}
          <PaypalExpressButton
            id={id}
            products={products}
            cartItems={cartItems}
            email={values.email}
            totalAmount={cartTotalAmount}
            onAddToPaypalTransaction={onAddToPaypalTransaction}
            onUpdateMyVouchers={onUpdateMyVouchers}
          />
        </div>
      </div>
    </form>
  );
}

export default CheckoutForm;
