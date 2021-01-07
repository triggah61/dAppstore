import styled from 'styled-components';

import { DEFAULT_TRANSITION } from 'constants/config';
import { mediaMax } from 'utils';

const Section04BG = 'assets/images/section_04_bg.png';

export const Container = styled.div`
  width: 100%;
  min-height: ${p => p.pageHeight || '100vh'};
  background: #011c51 url('${Section04BG}') no-repeat top fixed;
  background-size: 100% auto;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 7.8125rem 0;
  button {
    margin: 2rem 0 0;
  }
`;
export const Content = styled.div`
  width: calc(100% - 1.875rem);
  max-width: 38.75rem;
  background-image: linear-gradient(to bottom, #213e5c 61%, #20283c);
  box-shadow: 1.2px 1.6px 15px 0 rgba(3, 8, 28, 0.2);
  padding: 1.875rem 4.375rem 2.5rem;
  margin: 0 auto;
  border: solid 1px #4dbbef;
  transition: all 0.6s ease 0.15s;
  opacity: ${p => (p.show ? 1 : 0)};
  textarea {
    cursor: default !important;
  }
  h1 {
    margin-bottom: 2.5rem;
    padding-bottom: 1.875rem;
    font-size: 2rem;
    ${p =>
      p.hasTitle ? 'border-bottom: 1px solid rgba(255, 255, 255, 0.2)' : ''}
  }
  ${mediaMax.xs`
    padding: 1.875rem 1.25rem;
  `}
`;
export const NoteWrapper = styled.p`
  margin-bottom: 1.5625rem;
  font-size: 1rem;
  color: #00a8ff;
  font-family: PFSquareSansPro-Light, sans-serif;
`;
export const FooterLinksWrapper = styled.div`
  &&& {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
    margin-top: 2.5rem;
    > a {
      font-size: 1.125rem;
      line-height: 1.875rem;
      text-decoration: none;
      position: relative;
      &:after {
        content: '';
        height: 1px;
        width: 100%;
        position: absolute;
        bottom: 0;
        left: 0;
        right: 0;
        margin: 0 auto;
        transform: scaleX(0);
        transition: ${DEFAULT_TRANSITION};
        background-color: #00a8ff;
      }
      &:hover {
        &:after {
          transform: scaleX(1);
        }
      }
    }
    & a:first-child {
      color: #00a8ff;
    }
    & a:last-child {
      color: #749cc6;
      &:after {
        background-color: #749cc6;
      }
    }
  }
`;
export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  > * {
    margin-bottom: 1.5625rem;
    > *:first-child {
      margin-bottom: 0;
    }
  }
  &&& {
    textarea {
      height: 12.5rem;
      font-size: 0.875rem;
      margin-bottom: 0.3125rem;
    }
  }
  ${p => (p.disabled ? 'pointer-events: none' : '')}
`;
export const Title = styled.p`
  font-size: 1.5rem;
  font-family: PFSquareSansPro-Medium, sans-serif;
  font-weight: normal;
  margin-bottom: 1rem;
  color: white;
  margin-top: ${p => (p.top ? 0 : '2rem')};
`;
