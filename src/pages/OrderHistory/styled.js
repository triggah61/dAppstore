import styled from 'styled-components';

export default {}; // for eslint issue

export const Container = styled.div`
  padding: 5rem 0;
  background: transparent url('/assets/images/g_text_bg.png') no-repeat top top
    center;
  background-size: cover;
  height: auto;
  min-height: 100vh;
  color: #fff;

  .container {
    padding-top: 4.375rem;
  }

  /* react bootstraptable table ========== */
  .table-wrapper {
    overflow-x: auto;
  }

  .table-inner-wrap {
    min-width: 1110px;
    margin-bottom: 1rem;
  }

  .table-header {
    display: table;
    width: 100%;
    margin-bottom: 1rem;
  }

  .table-header .table-title {
    display: table-cell;
  }

  .table-header .search-label {
    display: table-cell;
    text-align: right;
    vertical-align: bottom;
    max-width: 50px;
  }

  .table-header .search-label .form-control {
    border-radius: 38px;
    background-color: #1d344e !important;
    border-color: #203d5b;
    color: #fff;
  }

  .table-header .search-label .form-control:focus {
    outline: 0;
    box-shadow: none;
  }

  .search-label input:-internal-autofill-selected {
    background-color: #1d344e !important;
  }

  .table-body .table .expand-cell-header {
    width: 120px;
  }

  .table-body .table .expand-cell {
    cursor: pointer;
    color: #0099e9;
    text-align: center;
  }

  .table-body .table .expand-cell i.fas {
    font-size: 12px;
  }

  .table-footer {
    display: flex;
    justify-content: flex-end;
    background: rgba(32, 61, 91, 0.5);
    border-top: 1px solid rgba(255, 255, 255, 0.1);
  }

  .table-footer .pagination {
    margin-bottom: 0;
  }

  /* defualt table style ========== */

  .table {
    color: #fff;
    border-top: #274773;
    text-align: center;
  }

  .table thead {
    font-weight: 400;
    border-top: 1px solid rgba(255, 255, 255, 0.1);
    background: #203d5b;
  }

  .table th {
    font-weight: 400;
    border: none;
    outline: none;
  }

  .table tbody {
    background: rgba(32, 61, 91, 0.5);
  }

  .table tr:first-child td {
    border-top: none;
  }

  .table td {
    vertical-align: middle;
    word-break: break-all;
    border-top: 1px solid rgba(255, 255, 255, 0.1);
  }

  .inner-table-wrapper {
    padding: 1rem;
  }

  /* pagination style ========== */

  .page-item .page-link,
  .page-item.active .page-link,
  .page-item.disabled .page-link {
    background: none;
    border: none;
  }

  .page-link {
    color: #fff;
  }

  .page-item[title='Previous page'] .page-link,
  .page-item[title='Next page'] .page-link {
    color: #0099e9;
  }

  .page-link:hover {
    color: #0099e9;
  }

  .page-link:focus {
    box-shadow: none;
  }

  .page-item.active .page-link {
    color: #0099e9;
  }

  .page-item.disabled .page-link {
    color: rgba(255, 255, 255, 0.08);
  }

  /* order table ========== */

  .order-table {
    margin-bottom: 0;
  }

  /* voucher table ========== */

  .voucher-table tbody tr:hover {
    color: #fff;
  }

  .voucher-table thead {
    background: rgba(32, 61, 91, 0.5);
  }

  .table tbody {
    background: rgba(255, 255, 255, 0.05);
  }

  .image_conatiner {
    height: 115px;
    overflow: hidden;
  }

  /* scroller table ========== */
  /* Let's get this party started */
  .table-wrapper::-webkit-scrollbar {
    height: 12px;
  }

  /* Track */
  .table-wrapper::-webkit-scrollbar-track {
    border-radius: 12px;
    background: rgba(0, 0, 0, 0.1);
  }

  /* Handle */
  .table-wrapper::-webkit-scrollbar-thumb {
    border-radius: 12px;
    border: 2px solid rgba(0, 0, 0, 0.1);
    background: #203d5b;
  }
`;
