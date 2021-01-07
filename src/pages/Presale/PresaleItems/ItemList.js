// @TODO : Need to move to pages/Presale

import React, { useState, useEffect } from 'react';

import { Container, Row, Col } from 'react-bootstrap';
import { TiShoppingCart } from 'react-icons/ti';
import { Link } from '@reach/router';

import Button from 'components/Common/Button';
import { objectToArray } from 'utils';
import Card from './components/Card';
import VoucherDetails from './components/VoucherDetails';

import * as SC from './ItemList.styled';

const PresaleItemList = props => {
  const {
    addItemToCart,
    items,
    cartItemCount,
    submitting,
    cartItems,
    onUpdateQuantityByItemId,
  } = props;
  const [cardItems, setCardItems] = useState([]);

  useEffect(() => {
    if (items) {
      setCardItems(items);
    }
  }, [items]);

  const onRemoveItemById = id => {
    onUpdateQuantityByItemId(id, '0'); // Note: Buggy if the 0 is Number
  };

  const itemList = objectToArray(items, 'id');
  const cartItemIDs = cartItems.map(({ id }) => id);

  return (
    <>
      <VoucherDetails
        cartItemIDs={cartItemIDs}
        vouchers={itemList}
        addItemToCart={addItemToCart}
        isSubmitting={submitting}
      />
      <SC.BuyDappstoreCardContainer>
        <div className="card_description">
          <Container>
            <Row>
              <Col>
                <h3>
                  Pre-Order Your dAppstore Card Now and Take Your Gaming to the
                  Next Level!
                </h3>
                <p>Choose One of Our Awesome dAppstore Packages Today</p>
                <p>
                  Channel your inner gamer and unlock your true potential in
                  this new era of P2E consumer experience.
                </p>
              </Col>
            </Row>
          </Container>
        </div>
        <div className="cards_container">
          <Container>
            <Row>
              <Link to="/cart" className="got_to_cart">
                {TiShoppingCart && (
                  <div className="icon">
                    <div className="count">{cartItemCount}</div>
                    <TiShoppingCart />
                  </div>
                )}
                <span className="text">Your Cart</span>
              </Link>
            </Row>
            <Row>
              {cardItems.map(item => {
                return (
                  <Card
                    item={item}
                    key={item.id}
                    onRemoveItemById={onRemoveItemById}
                  />
                );
              })}

              <div className="view_cart">
                <Button link="/cart" tabIndex="0">
                  View Cart
                </Button>
              </div>
            </Row>
          </Container>
        </div>
      </SC.BuyDappstoreCardContainer>
    </>
  );
};

export default PresaleItemList;
