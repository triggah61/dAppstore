import styled from 'styled-components';

import { DEFAULT_TRANSITION } from 'constants/config';

export const TopItemsContainer = styled.div`
  padding: 2.375rem 0 2rem;
  position: relative;
  color: white;
  @media (min-width: 1200px) {
    .container {
      max-width: 1160px;
    }
  }
  ul {
    padding: 0;
    margin: 2px 0 0;
    display: flex;
    align-items: center;
    justify-content: space-between;
    list-style: none;
    li {
      font-size: 0.625rem;
    }
  }
`;

export const TopItem = styled.div`
  border-radius: 0.5rem;
  display: flex;
  padding: 1rem;
  align-items: flex-start;
  justify-content: space-between;
  background: #111519;
  border: 1px solid black;
  box-shadow: 0 0 4px 2px rgba(0, 0, 0, 0.3);
  transition: ${DEFAULT_TRANSITION};
  position: relative;
  z-index: 2;
  cursor: pointer;
  &:hover {
    border-color: #086795;
  }
  > div {
    &:first-child {
      width: 3.375rem;
      height: 3.375rem;
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 50%;
      overflow: hidden;
      img {
        max-width: 100%;
      }
    }
    &:last-child {
      color: white;
      width: calc(100% - 4.0625rem);
      h6 {
        font-size: 0.8125rem;
        margin: 0;
        font-weight: bold;
        text-shadow: 0;
      }
      p {
        font-size: 0.75rem;
        margin: 0;
        min-height: 2rem;
      }
    }
  }
`;

export const ValuesContainer = styled.div`
  position: relative;
  margin-top: 1.75rem;
  background-color: #2c53c1;
  padding: 1.25rem 0;
  &:after {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 4rem;
    background-color: #2348af;
    z-index: 1;
    content: '';
    transform: translateY(-100%);
  }
  ul li {
    font-size: 0.9375rem;
    color: #81bff4;
  }
`;
