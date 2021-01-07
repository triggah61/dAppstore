import styled from 'styled-components';

import { DEFAULT_TRANSITION } from 'constants/config';
import { mediaMax } from 'utils';

import assets from 'utils/assets';

const SECTION_BG = assets`images/g_text_bg.png`;

const CHK_ITEM = `
  position: relative;
  margin-bottom: 0.2rem;
  ${mediaMax.mdMax`
    font-size: 1rem;
  `.join('')}
  &:before {
    display: inline-block;
    position: relative;
    font-family: "Font Awesome 5 Free";
    font-weight: 900;
    content: '\f058';
    left: 0;
    margin-right: .5rem;
  }
`;

const ContainerPadding = `
  padding: 6.25rem 0;
  ${mediaMax.mdMax`
    padding: 4rem 0;
  `}
  ${mediaMax.smMax`
    padding: 2rem 0;
  `}
`;

export const BuyDappstoreCardContainer = styled.div`
  background: #001846 url(${SECTION_BG}) no-repeat top center;
  background-size: cover;
  background-attachment: fixed;
  min-height: 80vh;

  .card_description {
    color: white;
    border-bottom: 1px solid #1b4273;
    ${ContainerPadding}

    h3 {
      margin: 0 0 2rem;
    }

    p {
      max-width: 80%;
      font-size: 1.125rem;
      margin: 0;
    }
  }

  .cards_container {
    ${ContainerPadding}

    .got_to_cart {
      text-decoration: none;
      display: block;
      margin: 0 1rem 2rem 1rem;

      &:hover .icon {
        color: #fff;
        border-color: #fff;
      }

      .text {
        display: inline-block;
        font-size: 30px;
        line-height: 4.85rem;
        padding-left: 0.5rem;
        color: #fff;
      }

      .icon {
        color: #fff;
        font-size: 2rem;
        padding: 1rem 1.3rem;
        background: rgba(0, 0, 0, 0.5);
        border: 2px solid #fff;
        border-radius: 50%;
        position: relative;
        height: min-content;
        display: inline-block;

        .count {
          background: #1144ff;
          position: absolute;
          right: 0;
          padding: 5px;
          border-radius: 5px;
          line-height: 1rem;
          font-size: 1rem;
          font-weight: bold;
          top: 0;
        }
      }
    }

    .view_cart {
      width: 100%;
      text-align: center;

      a {
        min-width: 20%;
        border-radius: 0;
      }
    }
  }
`;

export const CardItemContainer = styled.div`
  height: 703px;
  max-width: 24rem;
  color: white;
  margin: 2rem auto;
  background: rgba(15, 38, 86, 0.3) url(${p => p.bg}) no-repeat center center;
  background-size: 100% 100%;
  position: relative;

  ${mediaMax.smMax`
    margin: 0 auto 1rem;
  `}

  &:hover {
    > div {
      display: block;
    }
    > div:last-child {
      display: flex;
    }
    &:after {
      opacity: 1;
    }
  }

  &:after {
    content: '';
    position: absolute;
    z-index: 100;
    border: 2px solid white;
    opacity: 0;
    transition: ${DEFAULT_TRANSITION};
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }

  .add_to_to_cart_layer {
    position: absolute;
    width: 100%;
    height: inherit;
    background: rgba(55, 55, 55, 0.5);
    z-index: 2;
    display: none;
  }

  .add_to_to_cart_container {
    z-index: 999 !important;
    position: absolute;
    top: 45%;
    left: 23%;
    display: none;

    > button {
      width: 12rem;
      font-weight: bold;
    }

    &:hover > button {
      display: block;
      position: absolute;
      z-index: 9;
    }
  }

  .add_to_cart {
    .cover_photo {
      padding: 5px;
      font-size: 25px;
      position: absolute;
      z-index: 999;
    }

    .header_title {
      height: 10.5375rem;
      font-size: 2.5rem;
      margin-bottom: 0;
      display: flex;
      align-items: center;
      justify-content: center;
      text-transform: uppercase;
      text-shadow: 0 0 4px #33e0ff;
      font-family: BebasNeue-Regular, cursive;

      ${mediaMax.mdMax`
        font-size: 1.75rem;
      `}
    }
  }

  .add_to_cart_price {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 1.5rem 1.25rem;
    background: rgba(0, 0, 0, 0.1);

    > span {
      &:first-child {
        font-size: 1.25rem;
        border-left: 3px solid #00aeef;
        line-height: 1;
        padding-left: 0.375rem;
        ${mediaMax.mdMax`
          font-size: 1rem;
        `}
      }

      &:last-child {
        font-size: 2rem;
        ${mediaMax.mdMax`
          font-size: 1.5rem;
        `}
      }
    }
  }

  .add_to_cart_details {
    position: relative;

    .sub_header {
      margin: 0;
      line-height: 1;
      font-size: 1.125rem;
      text-transform: uppercase;
      padding: 1rem 1.25rem;
      background-color: #00aeef;
      margin-bottom: 0.5rem;

      ${mediaMax.mdMax`
        font-size: 1.125rem;
      `}
    }

    .detail_list {
      list-style: none;
      margin: 0;
      margin-bottom: 0.6rem;
      padding: 0;
      padding: 0 1.8rem;

      > li {
        ${CHK_ITEM}
        font-size: .9rem;
      }

      .package_title {
        display: block;
        color: #7bdbff;
        margin-bottom: 0.3rem;
      }
    }
  }
`;
