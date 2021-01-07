import styled from 'styled-components';
import { mediaMin, mediaMax } from '~/utils';

export const Section_01 = styled.div`
  height: 31.25rem;
  position: relative;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  background-image: ${p => (p.bg ? `url(${p.bg})` : '')};
  ${mediaMax.xsMax`
    background-image: url(${p => p.bg_mb || p.bg});
  `}

  div {
    div {
      .col-wrapper {
        height: 31.25rem;
      }
    }
  }

  &:before {
    content: '';
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.2);
    position: absolute;
    z-index: 0;
  }
`;
export const Section_01_H1 = styled.div`
  font-size: 2.5rem;
  font-family: PFSquareSansPro-Medium, sans-serif;
  color: #fff;
  text-shadow: 1px 1px 1px rgba(0, 0, 0, 0.75);

  ${mediaMin.sm`
    font-size: 3.5625rem;

    &.ace-casino {
      display: none;
    }
  `}
`;
export const Section_02 = styled.div`
  height: auto;
  padding: 3.125rem 0;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  ${mediaMin.sm`
    padding-top: 4.375rem;
    padding-bottom: 4.375rem;
  `}
`;
export const Title = styled.h1`
  font-size: 2.5rem;
  font-family: PFSquareSansPro-Medium, sans-serif;
  color: #fff;
  margin-bottom: 1.5rem;
  ${mediaMin.sm`margin-bottom: 2.5rem;`}
`;
export const Desc = styled.p`
  font-size: 1.125rem;
  font-family: PFSquareSansPro-Light, sans-serif;
  color: #fff;
  margin-bottom: 1.5625rem;
  white-space: pre-line;
  ${mediaMin.sm`margin-bottom: 3.75rem;`}
`;
export const WrapperLink = styled.div`
  padding-bottom: 1.25rem;
  text-align: right;

  ${mediaMax.xsMax`
    > * {
      width: 100%;
      margin: 1.5625rem auto;
    }
  `}
`;
export const SliderContainer = styled.div`
  padding-top: 1.875rem;
  min-height: 15.625rem;
  display: flex;
  align-items: center;
`;
export const AppDetailsWrapper = styled.div``;

export const ReviewTitle = styled.h1`
  color: #fff;
  font-family: 'PFSquareSansPro-Medium';
  font-size: 1.8rem;
  margin-bottom: 35px;
`;
export const ReviewRating = styled.div`
  display: flex;
  align-items: center;
  margin-top: 1.875rem;
  & span {
    margin-right: 5px;
    color: #fff;
  }
`;
