import styled from 'styled-components';

import { DEFAULT_TRANSITION } from 'constants/config';
import { mediaMax } from 'utils';

import assets from 'utils/assets';

const OSIRIS_CONTENT_BG = assets`images/osiris-envision/content-bg.jpg`;
const OSIRIS_BG = assets`images/section_04_bg.png`;
const DAPPSTORE_STEPS_BG = assets`images/dappstore-steps/dappstore-steps-bg.png`;
const MARKET_PLACE_BG_WITH_LOGO = assets`images/market-place/market-place-bg-wtih-logo.jpg`;

const ORANGE_TO_VIOLET_BG = `
  /* Permalink - use to edit and share this gradient: https://colorzilla.com/gradient-editor/#ed5154+0,7c489c+100 */
  background: rgb(237,81,84); /* Old browsers */
  background: -moz-linear-gradient(left,  rgba(237,81,84,1) 0%, rgba(124,72,156,1) 100%); /* FF3.6-15 */
  background: -webkit-linear-gradient(left,  rgba(237,81,84,1) 0%,rgba(124,72,156,1) 100%); /* Chrome10-25,Safari5.1-6 */
  background: linear-gradient(to right,  rgba(237,81,84,1) 0%,rgba(124,72,156,1) 100%); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#ed5154', endColorstr='#7c489c',GradientType=1 ); /* IE6-9 */
`;
export const Container = styled.div`
  background-color: #001846;
`;

export const BannerContent = styled.div`
  > h1,
  h2,
  h4,
  p {
    color: white;
  }
  > p {
    font-size: 1.125rem;
  }
  > h2 {
    margin-bottom: 4rem;
    ${mediaMax.xsMax`
      margin: 2rem 0;
    `}
  }
  > h4 {
    margin-bottom: 2rem;
    line-height: 1.4;
  }
`;
export const BannerContentBottom = styled(BannerContent)`
  > h2 {
    margin-bottom: 1rem !important;
  }
  > p {
    margin-bottom: 2rem;
    ${mediaMax.xsMax`
      margin: 1rem 0;
    `}
  }
`;

export const OsirisContentContainer = styled.div`
  padding: 5rem 0;
  color: white;
  text-align: center;
  background: #002153 url(${OSIRIS_BG}) no-repeat top center;
  background-size: cover;
  background-attachment: fixed;
  &&& {
    a {
      ${ORANGE_TO_VIOLET_BG}
      background-size: 180% 100%;
      background-position: center 0;
      &:hover {
        background-position: center 100%;
      }
    }
  }
`;

export const OCTitle = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  > * {
    display: inline-block;
    margin: 0 2rem;
  }
  img {
    max-width: 100%;
  }
  span {
    color: white;
    font-size: 1.125rem;
    text-align: left;
    ${mediaMax.xsMax`
      display: block;
      text-align: center;
      margin-top: 1rem;
    `}
  }
  ${mediaMax.xsMax`
    text-align: center;
    display: block;
    > * {
      margin: 0;
    }
  `}
`;

export const OCInner = styled.div`
  position: relative;
  margin: 2.5rem 0;
  border-radius: 1.25rem;
  padding: 3.125rem 1rem;
  ${ORANGE_TO_VIOLET_BG}
  > * {
    position: relative;
    z-index: 2;
  }
  &:before {
    border-radius: 1.25rem;
    content: '';
    position: absolute;
    top: 2px;
    left: 2px;
    width: calc(100% - 4px);
    height: calc(100% - 4px);
    background: #001d4d url(${OSIRIS_CONTENT_BG}) no-repeat center center;
    background-size: 100% 100%;
  }
  h4 {
    font-size: 1.375rem;
    font-family: 'PFSquareSansPro-Regular';
    background: -webkit-linear-gradient(#ed5253, #7c489c);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    margin: 0 0 1rem;
    font-weight: bold;
  }
  p {
    font-size: 0.9375rem;
    margin: 0;
  }
  > div > div {
    ${mediaMax.mdMax`
      &:not(:last-child) {
        margin-bottom: 2.5rem;
      }
    `}
    &:not(:last-child):after {
      content: '';
      position: absolute;
      top: 50%;
      right: -1.25rem;
      transform: translateY(-50%) rotate(45deg);
      height: 1.5rem;
      width: 1.5rem;
      border-top: 2px solid #728199;
      border-right: 2px solid #728199;
      ${mediaMax.mdMax`
        transform: translateY(1.5rem) rotate(135deg);
        height: 1rem;
        width: 1rem;
        left: 50%;
        right: 0;
        bottom: 0;
        top: auto;
      `}
    }
  }
`;

export const DappstoreStepsContainer = styled.div`
  background: #001846 url(${DAPPSTORE_STEPS_BG}) no-repeat top center;
  background-size: 100% auto;
  h1 {
    color: white;
    margin: 4.6875rem auto 0;
    text-align: center;
  }
`;

export const DappstoreStepsInner = styled.div`
  pointer-events: none;
  padding: 3rem 1rem;
  > img {
    max-width: 100%;
    display: block;
    margin: 0 auto;
  }
`;

export const MarketPlaceContainer = styled.div`
  background: #001846 url(${MARKET_PLACE_BG_WITH_LOGO}) no-repeat top center;
  background-size: 2560px auto;
  padding-top: 22rem;
  margin-top: -6rem;
  ${mediaMax.mdMax`
    background-size: 1800px auto;
    padding-top: 16rem;
    margin-top: -4rem;
  `}
  ${mediaMax.xsMax`
    background-size: 1200px auto;
    padding-top: 10rem;
    margin-top: -4rem;
  `}
`;

export const MarketPlaceInner = styled.div`
  padding: 6.25rem 0 8.75rem;
  ${mediaMax.mdMax`
    padding: 2.25rem 0 1rem;
  `}
`;

export const MarketPlaceTitle = styled.div`
  color: white;
  text-align: center;
  margin: 0 0 3.125rem;
  h1 {
    font-family: PFSquareSansPro-Medium, sans-serif;
    margin: 0 0 1rem;
  }
  p {
    font-family: PFSquareSansPro-Regular, sans-serif;
    font-size: 1.125rem;
    margin: 0;
  }
  justify-content: center;
  ${mediaMax.mdMax`
    margin-bottom: 2.5rem;
  `}
  ${mediaMax.xsMax`
    margin-bottom: 1rem;
  `}
`;
export const MarketPlaceItems = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  > div {
    width: 25%;
    height: 6rem;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0 1rem;
    ${mediaMax.mdMax`
      width: 50%;
      height: 5rem;
    `}
    ${mediaMax.xsMax`
      height: 3.2rem;
    `}
    > a {
      transition: ${DEFAULT_TRANSITION};
      display: inline-block;
      &:hover {
        opacity: 0.7;
      }
      > img {
        display: block;
        max-width: 100%;
        margin: 0 auto;
        ${mediaMax.xsMax`
          max-width: 80%;
        `}
      }
    }
  }
`;
