import styled from 'styled-components';
import { DEFAULT_TRANSITION } from 'constants/config';

export const CheckboxWrapper = styled.div`
  position: relative;
`;
export const CheckLabel = styled.label`
  display: inline-block;
  position: relative;
  cursor: pointer;
  user-select: none;
  margin: 0;
  input {
    position: absolute;
    opacity: 0;
    cursor: pointer;
    height: 0;
    width: 0;
    &:checked + span:after {
      opacity: 1;
    }
  }
  &:hover {
    > span:after {
      opacity: 0.2;
    }
  }
`;
export const CheckMark = styled.span`
  font-size: 1.125rem;
  font-family: PFSquareSansPro-Light, sans-serif;
  color: rgba(255, 255, 255, 0.5);
  position: relative;
  height: 1.5625rem;
  line-height: 1.5625rem;
  padding-left: 1.875rem;
  display: inline-block;
  > * {
    color: #31bbff;
    display: inline-block;
    margin-right: 0.5rem;
  }
  &:after,
  &:before {
    content: '';
    position: absolute;
  }
  &:before {
    background-color: #1d2538;
    display: inline-block;
    height: 1.5625rem;
    width: 1.5625rem;
    border-radius: 0.1875rem;
    margin-right: 0.3125rem;
    left: 0;
    top: 0;
  }
  &:after {
    transition: ${DEFAULT_TRANSITION};
    left: 0.5625rem;
    opacity: 0;
    top: 0.3125rem;
    width: 0.4375rem;
    height: 0.75rem;
    border: solid #00a8ff;
    border-width: 0 3px 3px 0;
    transform: rotate(45deg);
  }
`;
