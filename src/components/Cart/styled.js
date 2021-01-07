import styled from 'styled-components';
import { DEFAULT_TRANSITION } from 'constants/config';
import { mediaMax } from '~/utils';

export const CartContainer = styled.div`
  min-height: 20vh !important;
  ${mediaMax.smMax`
    padding-top: ${p => (p.isTopBanner ? '5rem' : 0)};
  `}
`;

export const YourCartTitle = styled.h2`
  color: #ffffff;
`;

export const YourCartDesc = styled.div`
  padding: 5rem 0 0 0;
  color: white;
  ${mediaMax.mdMax`
    padding: 4rem 0;
  `}
  ${mediaMax.smMax`
    padding-top: 7rem;
  `}
  h3 {
    margin: 0 0 2rem;
  }
  p {
    max-width: 80%;
    font-size: 1.125rem;
    margin: 0;
  }
`;

export const Seperator = styled.div`
  border-bottom: 1px solid #1b4273;
`;

export const CartItemContainer = styled.div`
  min-height: auto;
  th:nth-child(2) {
    display: block;
  }
  td:nth-child(2) {
    display: block;
  }

  .table_cart {
    color: #fff;
    text-align: center;
  }

  .table_cart td {
    word-break: break-all;
    vertical-align: middle;
  }

  .table_cart .select_btn,
  .table_cart .select_btn input,
  .table_cart .select_btn label,
  .table_cart .remove_all,
  .table_cart .remove_btn {
    cursor: pointer;
  }
  .table_cart .select_btn .custom-control-label {
    vertical-align: text-top;
  }
  .table_cart .select_btn .custom-control-label::before {
    top: 2px;
  }
  .table_cart .select_btn .custom-control-label::after {
    top: 2px;
  }
  .table_cart .total,
  .table_cart .quantity {
    width: 200px;
  }
  .table_cart .voucher {
    min-width: 300px;
  }
  .table_cart .voucher_cell {
    font-weight: bold;
    text-transform: uppercase;
  }
  .table_cart .select_col {
    text-align: left;
    width: 115px;
  }
  .table-responsive::-webkit-scrollbar {
    height: 12px;
  }
  .table-responsive::-webkit-scrollbar-track {
    border-radius: 12px;
    background: rgba(0, 0, 0, 0.1);
  }
  .table-responsive::-webkit-scrollbar-thumb {
    border-radius: 12px;
    background: #1b4273;
  }
`;

export const CheckoutButtonContainer = styled.div`
  text-align: center;
  margin-top: 2rem;
  > .popup-content {
    width: 20rem !important;
    height: 30rem;
  }
  .checkout_popup00-content,
  .checkout_popup00-overlay {
    z-index: 1000 !important;
  }

  .checkout_popup00-content,
  .checkout_popup01-content {
    width: 26rem !important;
    height: auto !important;
    background: #202a3f !important;
    padding: 0 !important;
    border: 1px solid #4dbbef !important;
  }

  .checkout_popup02-content {
    width: 30rem !important;
    height: auto !important;
    background: #202a3f !important;
    padding: 0 !important;
    border: 1px solid #4dbbef !important;
    overflow: hidden !important;
  }

  .checkout_popup03-content {
    background: none !important;
    width: auto !important;
    border: 0 !important;
    padding: 0 !important;
  }
`;

const linkStyle = p => {
  return `
    &&& {
      ${p.minWidth ? `min-width: ${p.minWidth}` : ''}
      cursor: pointer;
      margin-bottom: 2rem;
      transition: ${DEFAULT_TRANSITION};
      background: linear-gradient(to bottom,#009ee8,#0070fc);
      background-size: 100% 150%;
      white-space: nowrap;
      height: 2.5125rem;
      text-decoration: none;
      text-transform: uppercase;
      color: white;
      display: ${p.block ? 'flex' : 'inline-flex'};
      ${p.block ? 'width: 100%;' : ''}
      align-items: center;
      justify-content: center;
      padding: 0 20px;
      border: 0;
      outline: none;
      &[disabled], .disabled {
        background: linear-gradient(to bottom,#009ee8,#009ee8);
        cursor: not-allowed;
      }
      > img {
        margin-right: 0.625rem;
      }
      &:hover {
        background-position: 0 100%;
        box-shadow: 1px 1px 24px 0 rgba(0, 156, 233, .2);
      }
      ${mediaMax.xsMax`
        font-size: .8125rem;
        height: 2.3125rem;
      `.join('')}
      ${
  p.size === 'sm'
    ? `
        height: 2.1875rem;
        ${mediaMax.xsMax`
          font-size: 0.875rem;
          height: 1.875rem;
        `.join('')}
      `
    : null
}
    }
  `;
};

export const CheckoutButton = styled.button`
  ${p => linkStyle(p)}
`;

export const CheckoutPopup = styled.div`
  transition: ${DEFAULT_TRANSITION};
`;

export const CheckoutHeader = styled.div`
  background: #203d5b;
  color: #fff;
  font-size: 1.2rem;
  text-align: left;
  padding: 1rem;
  font-weight: bold;
`;

export const CheckoutBody = styled.div`
  background: #202a3f;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const CheckoutContent = styled.div`
  min-height: 18rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  .table_checkout_header,
  .table_checkout_footer {
    background: transparent;
  }

  .table_checkout_header .check_title {
    text-align: left;
    text-transform: uppercase;
    padding-top: 0.5rem;
    padding-bottom: 0;
    max-width: 280px;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }

  .table_checkout_header .check_price {
    font-size: large;
    font-weight: bold;
    text-align: right;
    padding-top: 0.5rem;
    padding-bottom: 0;
  }

  .table_checkout_header .item_col {
    text-align: left;
    text-transform: uppercase;
    padding-bottom: 0;
  }

  .table_checkout_footer .check_total {
    text-align: left;
    text-transform: uppercase;
  }

  .table_checkout_footer .check_total_value {
    border-top: 1px solid #fff;
    font-size: large;
    font-weight: bold;
    text-align: right;
  }
`;

export const CheckoutAction = styled.div`
  display: flex;
  justify-content: space-around;
  align-content: center;
  padding: 1.5 2rem;
  > button {
    min-width: 8rem !important;
    width: 8rem !important;
  }
`;

export const CheckoutCancelButton = styled.button`
  background: #fff;
  color: #000;
  min-width: 8rem;
  ${p => linkStyle(p)}
`;

export const CheckoutFooter = styled.div`
  margin-top: 1.5rem;
  display: flex;
  flex-direction: column;
`;

export const GuestCheckoutContainer = styled.div`
  padding: 1rem;
  // overflow:scroll;
  > div > div > h1 {
    display: none;
  }
  > div {
    width: auto;
    padding: 0;
    background: none;
    min-height: auto;
  }
  > div > div {
    width: auto;
  }
`;

export const GuestCheckoutForm = styled.div``;

export const LoginFormContainer = styled.div`
  div {
    background: none;
  }
`;

export const NewSeperator = styled.div`
  border-bottom: 2px solid #1b4273;
  width: 2rem;
  margin: 0 auto 2rem;
`;

export const Links = styled.div`
  margin-top: 4rem;
  > a {
    margin: 0.2rem;
  }
`;

export const Span = styled.span`
  color: #0077f9;
`;

export const StatusSuccess = styled.div`
  margin-top: 2rem;
  > svg {
    font-size: 5rem;
    color: #0077f9;
  }
  > h2 {
    font-size: 1.5rem;
    font-weight: bold;
    margin: 2rem 0;
  }
  > p {
    max-width: 100%;
    font-size: 1rem;
  }
`;
