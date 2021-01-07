import styled from 'styled-components';

export const CUSTOM_FORM_CONTROL_STYLE = `
  border-radius: 2rem;
  background-color: #111519;
  border: 1px solid #696969;
  transition: all .3s ease;
`;

export const TableContainer = styled.div`
  @media (min-width: 1200px) {
    .container {
      max-width: 1185px;
    }
  }
`;

export const TableInner = styled.div`
  background-color: #111519;
  border-radius: 0.5rem;
  box-shadow: 0 0 10px 5px rgba(0, 0, 0, 0.3);
`;

export const TitleContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.875rem 1rem;
  border-radius: 0.25rem;
  color: white;
  h4 {
    margin: 0;
    display: flex;
    align-items: center;
    img {
      margin-right: 0.75rem;
    }
  }
  .form-control {
    width: 15rem;
    ${CUSTOM_FORM_CONTROL_STYLE}
  }
`;

export const Table = styled.div`
  .react-bs-table-bordered {
    border: 0;
  }
  .table {
    color: #b6b6b7;
    td,
    th {
      padding-top: 1rem;
      padding-bottom: 1rem;
    }
    td {
      border: 0;
      border-bottom: 1px solid #181b1f;
    }
  }
  .react-bs-container-header.table-header-wrapper {
    .table {
      color: #d6d7d8;
      thead th {
        border: 0;
        background-color: #212d39;
      }
    }
  }
  .sort-column {
    .order {
      margin: 0 0.5rem;
      display: inline-flex;
      flex-wrap: wrap;
      align-items: center;
      justify-content: center;
      width: 0.5rem;
      position: absolute;
      height: 1.5rem;
      &:before,
      &:after {
        content: '';
        width: 0;
        height: 0;
        border-left: 0.25rem solid transparent;
        border-right: 0.25rem solid transparent;
        border-bottom: 0.5rem solid #666;
      }
      &:after {
        transform: rotate(180deg);
        border-bottom-color: #fff;
      }
      &.dropup {
        &:before {
          border-bottom-color: #fff;
        }
        &:after {
          border-bottom-color: #666;
        }
      }
      > * {
        display: none;
      }
    }
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1.5rem;
`;

export const NameWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
`;

export const AppImg = styled.span`
  width: 2.5rem;
  height: 2.5rem;
  background: #444 url('${p => p.bg}') no-repeat center center;
  background-size: cover;
  border-radius: .25rem;
  margin-right: 1rem;
`;
