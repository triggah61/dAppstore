import React, { useEffect, useState } from 'react';

import bootbox from 'bootbox';
import { Container, Table, Form } from 'react-bootstrap';
import { TiTimes } from 'react-icons/ti';
import { MdDeleteForever } from 'react-icons/md';
import { useFormik } from 'formik';
import Popup from 'reactjs-popup';

import ContentContainer from 'components/Common/ContentContainer';
import Button from 'components/Common/Button';
import CheckoutForm from 'components/Checkout';
import Login from 'pages/Login';
import { saveSession } from 'session/localStorage';
import { SessionContext } from 'contexts/sessionContext';
import EmptyCart from './EmptyCart';
import Completed from './Completed';

import * as SC from './styled';
import style from './Cart.module.scss';

const frCheckButton = ({ open, ...props }, ref) => (
  <SC.CheckoutButton className="button" ref={ref} {...props}>
    Checkout
  </SC.CheckoutButton>
);

const CheckoutButton = React.forwardRef(frCheckButton);

const Cart = props => {
  const {
    cartItems,
    onUpdateQuantityByItemId,
    onRemoveAllFromCart,
    onAddToPaypalTransaction,
    onUpdateMyVouchers,
    txStatus,
  } = props;
  const [cardItemsState, setCardItemsState] = useState([]);

  useEffect(() => {
    if (cartItems) {
      setCardItemsState(cartItems);
    }
  }, [cartItems]);

  useEffect(() => {
    saveSession('ids', []);
  }, []);

  const formik = useFormik({
    initialValues: {
      ids: [],
    },
  });

  const { values, handleSubmit, setFieldValue } = formik;

  const onChangeCheckbox = id => e => {
    const ids = e.target.checked
      ? [...values.ids, id]
      : values.ids.filter(item => item !== id);
    setFieldValue('ids', ids);
    saveSession('ids', ids);
  };

  const onSelectAll = e => {
    const ids = e.target.checked ? cartItems.map(item => item.id) : [];
    setFieldValue('ids', ids);
    saveSession('ids', ids);
  };

  const itemsList = props?.items?.reduce(
    (obj, item) => ({
      ...obj,
      [item.id]: item,
    }),
    {}
  );

  const handleInputNumbersOnly = e => {
    if (e.match('^[0-9]{1,3}$') != null) {
      return e;
    }
  };

  const onChangeQuantity = (id, e, item) => {
    const inputVal = e.target.value;
    const isValid = handleInputNumbersOnly(inputVal);
    if (isValid && Number(inputVal) > 0) {
      onUpdateQuantityByItemId(id, inputVal, item);
    }
  };

  const onKeyPressQuantity = e => {
    if (e.which < 48 || e.which > 57) {
      e.preventDefault();
    }
  };

  const onRemoveItemById = (id, quantity) => () => {
    bootbox.confirm({
      message: 'Are you sure to remove this item?',
      centerVertical: true,
      buttons: {
        confirm: {
          label: 'Yes',
          className: 'btn-success',
        },
        cancel: {
          label: 'No',
          className: 'btn-danger',
        },
      },
      callback(result) {
        if (result && id) {
          onUpdateQuantityByItemId(id, '0', cardItemsState);
        } else {
          if (quantity === 0) {
            quantity = 1;
          }
          onUpdateQuantityByItemId(id, quantity, cardItemsState);
        }
      },
    });
  };

  const onRemoveSelectedItems = () => {
    if (values.ids.length > 0) {
      bootbox.confirm({
        message: 'Are you sure to remove selected items?',
        centerVertical: true,
        buttons: {
          confirm: {
            label: 'Yes',
            className: 'btn-success',
          },
          cancel: {
            label: 'No',
            className: 'btn-danger',
          },
        },
        callback(result) {
          if (result) {
            onRemoveAllFromCart(cardItemsState);
          }
        },
      });
    }
  };

  const totalAmount =
    cartItems && itemsList
      ? cartItems.reduce((acc, item) => {
          return acc + Number(item.quantity) * itemsList[item.id].price;
        }, 0)
      : 0;

  const sortedIdString = ids => ids.sort().join('');

  const isSelectAllChecked =
    sortedIdString(cardItemsState.map(({ id }) => id)) ===
    sortedIdString(values.ids);

  return (
    <ContentContainer>
      <Container>
        <SC.CartContainer>
          <SC.YourCartDesc>
            <SC.YourCartTitle>Your Cart</SC.YourCartTitle>
            <SC.Seperator />
            <form onSubmit={handleSubmit}>
              <SC.CartItemContainer>
                {cardItemsState.length > 0 ? (
                  <Table
                    responsive
                    borderless
                    className={`table_cart ${style.table_cart}`}
                  >
                    <thead>
                      <tr>
                        <th className="select_col">
                          <Form.Check
                            custom
                            type="checkbox"
                            name="items"
                            className="select_btn"
                            label="Select All"
                            id="selectAll"
                            checked={isSelectAllChecked}
                            onChange={onSelectAll}
                          />
                        </th>
                        <th className="voucher">Voucher Item</th>
                        <th className="amount">Amount</th>
                        <th className="quantity">Quantity</th>
                        <th className="total">Total</th>
                        <th>
                          <div
                            role="button"
                            className="remove_all"
                            onClick={onRemoveSelectedItems}
                          >
                            <MdDeleteForever />
                          </div>
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {cartItems &&
                        cartItems.map(item => {
                          const {
                            id,
                            title = itemsList[id].title,
                            price = itemsList[id].price,
                            quantity = itemsList[id].quantity,
                          } = item;
                          return (
                            <tr key={id}>
                              <td className="select_col">
                                <Form.Check
                                  custom
                                  className="select_btn"
                                  id={`cb${id}`}
                                >
                                  <Form.Check.Input
                                    name={`item.${id}`}
                                    type="checkbox"
                                    onChange={onChangeCheckbox(id)}
                                    checked={values.ids.includes(id)}
                                  />
                                  <Form.Check.Label />
                                </Form.Check>
                              </td>
                              <td className="voucher_cell">{title}</td>
                              <td>$ {price}</td>
                              <td>
                                <input
                                  type="number"
                                  min="1"
                                  max="999"
                                  className={style.quantityField}
                                  value={quantity}
                                  onKeyPress={onKeyPressQuantity}
                                  required
                                  size={3}
                                  onChange={e =>
                                    onChangeQuantity(id, e, cardItemsState)
                                  }
                                />
                              </td>
                              <td>$ {(price * quantity).toFixed(2)}</td>
                              <td>
                                <div
                                  role="button"
                                  className="remove_btn"
                                  onClick={onRemoveItemById(id, quantity)}
                                >
                                  {TiTimes && <TiTimes />}
                                </div>
                              </td>
                            </tr>
                          );
                        })}
                    </tbody>
                  </Table>
                ) : (
                  <EmptyCart />
                )}
              </SC.CartItemContainer>
            </form>
            <SC.Seperator />

            <SC.CheckoutButtonContainer>
              {cardItemsState.length > 0 ? (
                <Popup
                  trigger={open => <CheckoutButton open={open} />}
                  position="top center"
                  modal
                  className="checkout_popup01"
                >
                  {close => (
                    <SC.CheckoutPopup>
                      <SC.CheckoutHeader>Order Summary</SC.CheckoutHeader>
                      <SC.CheckoutBody>
                        <SC.CheckoutContent>
                          <Table
                            responsive
                            borderless="false"
                            variant="dark"
                            className="table_checkout_header"
                          >
                            <thead>
                              <tr>
                                <th className="item_col">Items</th>
                                <th />
                              </tr>
                            </thead>
                            <tbody>
                              {cartItems &&
                                cartItems.map(item => {
                                  const {
                                    id,
                                    title = itemsList[id].title,
                                    price = itemsList[id].price,
                                    quantity = itemsList[id].quantity,
                                  } = item;
                                  return (
                                    <tr key={id}>
                                      <td className="check_title">{title}</td>
                                      <td className="check_price">
                                        $ {(price * quantity).toFixed(2)}
                                      </td>
                                    </tr>
                                  );
                                })}
                            </tbody>
                          </Table>
                          <Table
                            responsive
                            borderless="false"
                            variant="dark"
                            className="table_checkout_footer"
                          >
                            <tbody>
                              <tr>
                                <td className="check_total">Total Amount</td>
                                <td className="check_total_value">
                                  ${totalAmount.toFixed(2)}
                                </td>
                              </tr>
                            </tbody>
                          </Table>
                        </SC.CheckoutContent>
                      </SC.CheckoutBody>
                      <SC.CheckoutFooter>
                        <SC.CheckoutAction>
                          <SC.CheckoutCancelButton
                            onClick={() => {
                              close();
                            }}
                          >
                            Cancel
                          </SC.CheckoutCancelButton>
                          <SessionContext.Consumer>
                            {({ userProfile, isLogin }) =>
                              isLogin ? (
                                <Popup
                                  trigger={open1 => (
                                    <SC.CheckoutCancelButton open={open1}>
                                      Order Now
                                    </SC.CheckoutCancelButton>
                                  )}
                                  position="top center"
                                  modal
                                  closeOnDocumentClick
                                  className="checkout_popup02"
                                >
                                  <SC.GuestCheckoutContainer className="mb-3">
                                    <CheckoutForm
                                      products={itemsList}
                                      cartItems={cardItemsState}
                                      cartTotalAmount={totalAmount}
                                      onAddToPaypalTransaction={
                                        onAddToPaypalTransaction
                                      }
                                      onUpdateMyVouchers={onUpdateMyVouchers}
                                      email={userProfile.email_address}
                                      id={userProfile.id}
                                    />
                                  </SC.GuestCheckoutContainer>
                                </Popup>
                              ) : (
                                <Popup
                                  trigger={open1 => (
                                    <SC.CheckoutCancelButton open={open1}>
                                      Order Now
                                    </SC.CheckoutCancelButton>
                                  )}
                                  position="top center"
                                  modal
                                  closeOnDocumentClick
                                  className="checkout_popup02"
                                >
                                  <>
                                    <SC.GuestCheckoutContainer>
                                      <CheckoutForm
                                        products={itemsList}
                                        cartItems={cardItemsState}
                                        cartTotalAmount={totalAmount}
                                        onAddToPaypalTransaction={
                                          onAddToPaypalTransaction
                                        }
                                        onUpdateMyVouchers={onUpdateMyVouchers}
                                        email=""
                                        id={null}
                                      />
                                    </SC.GuestCheckoutContainer>
                                    <SC.NewSeperator />
                                    <Popup
                                      trigger={
                                        <SC.CheckoutCancelButton>
                                          Login
                                        </SC.CheckoutCancelButton>
                                      }
                                      position="top right"
                                      modal
                                      className="checkout_popup03"
                                    >
                                      <SC.GuestCheckoutContainer>
                                        <Login />
                                      </SC.GuestCheckoutContainer>
                                    </Popup>
                                  </>
                                </Popup>
                              )
                            }
                          </SessionContext.Consumer>
                        </SC.CheckoutAction>
                      </SC.CheckoutFooter>
                    </SC.CheckoutPopup>
                  )}
                </Popup>
              ) : (
                <Button isRounded="0px" link="/presale">
                  Go to Presale
                </Button>
              )}
              {txStatus === 'COMPLETED' && <Completed />}
            </SC.CheckoutButtonContainer>
          </SC.YourCartDesc>
        </SC.CartContainer>
      </Container>
    </ContentContainer>
  );
};

export default Cart;
