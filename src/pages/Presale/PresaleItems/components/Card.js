import React, { useContext } from 'react';
import { CartContext } from 'contexts/CartContext';
import clsx from 'clsx';
import assets from 'utils/assets';
import { Row } from 'react-bootstrap';
import style from './Card.module.scss';

const Card = ({ item, isInModal = false, className = null }) => {
  const { selectItem } = useContext(CartContext);

  if (!item) {
    return null;
  }

  const itemClass = clsx(
    style.card_details,
    style[`card-detail-${item.id}`],
    'ds-relative',
    !isInModal ? style['card-item-list'] : style.cardDetailModal,
    className
  );

  const toggleCardModal = id => () => {
    if (!isInModal) {
      selectItem(id);
    }
  };

  const onKeyUpCard = id => e => {
    if (!isInModal) {
      const keyCode = e.keyCode ? e.keyCode : e.which;
      if (keyCode === 13) {
        selectItem(id);
      }
    }
  };

  let fontSize = '';

  const { id, price, title } = item;

  if (price >= 99) {
    fontSize = style.threeDigits;
  }

  if (price >= 999) {
    fontSize = style.fourDigits;
  }

  if (price >= 9999) {
    fontSize = style.fiveDigits;
  }

  return (
    <>
      <div
        key={id}
        className={itemClass}
        tabIndex={isInModal ? '-1' : '0'}
        role="button"
        onClick={toggleCardModal(id)}
        onKeyUp={onKeyUpCard(id)}
      >
        <div className={style.price}>
          <span className={style.preCurrency}>$</span>
          <span className={clsx(style.priceValue, fontSize)}>{price}</span>
          <span className={style.postCurrency}>USD</span>
        </div>

        <div className={style.cardContent}>
          <div className="logo">
            <img
              src={assets`images/presale-item/logo.png`}
              className="ds-h-48"
              alt={title}
            />
          </div>
          <div className="ds-mt-10 ds-mb-2 ds-font-semibold">
            {title} Package
          </div>
          <small className="description">
            Play and Earn with the Latest Games!
          </small>
        </div>

        <Row className="position-absolute ds-bottom-0 ds-mx-1 mb-2 ds-tracking-wide w-100">
          <img
            className={style.footerLogo}
            src={assets`images/presale-item/osiris.png`}
            alt="Osiris Logo"
          />

          <div className={style.footerDesc}>
            <img
              src={assets`images/presale-item/hex-container.png`}
              alt="hex"
            />
            <div className={style.redeem}>
              No value until activated and redeemed
            </div>
          </div>
        </Row>
      </div>
    </>
  );
};

export default Card;
