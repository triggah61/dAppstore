import styled from 'styled-components';

import { mediaMax } from 'utils';

const Section05Bg = 'assets/images/section_05_bg.png';

export const Container = styled.div`
  height: 26.875rem;
  background: #000 url(${Section05Bg}) no-repeat center;
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const Content = styled.div`
  width: 73.125rem;
  padding-left: 0.9375rem;
  padding-right: 0.9375rem;
  height: 15rem;
  display: flex;
  flex-direction: column;
  color: #fff;
  & h1 {
    font-size: 5.625rem;
    margin-bottom: 0.9375rem;
    font-family: PFSquareSansPro-Medium, sans-serif;
  }
  & p {
    font-size: 1.125rem;
    margin-bottom: 1.5625rem;
    font-family: PFSquareSansPro-Light, sans-serif;
  }
  & a {
    width: 12.5rem;
    ${mediaMax.xsMax`width: 12.5rem;`}
  }
  ${mediaMax.md`
    width: 100%;
    height: 10rem;
    padding: 0 0.9375rem !important;
    & h1 {
      font-size: 2.5rem;
    }
    & p {
      font-size: 1rem;
    }
  `}
`;
