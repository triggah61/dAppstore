import styled from 'styled-components';
import { DEFAULT_TRANSITION } from 'constants/config';
import { mediaMax, mediaMin } from '~/utils';

import { CENTERED, SCREENSHOT } from './index';

export const SliderWrapper = styled.div`
  position: relative;
  overflow: hidden;
  width: 100%;
  .swiper-container {
    height: 100%;
  }

  .swiper-slide {
    .main-slider {
      h1,
      p {
        transform: translateY(20px);
      }
      h1,
      p,
      .links-wrapper {
        opacity: 0;
        transition: all 0.4s ease-in-out 0.6s;
      }
      p {
        transition-delay: 0.9s;
      }
      .links-wrapper {
        transition-delay: 1.2s;
      }
    }
    &.swiper-slide-active {
      .main-slider {
        h1,
        p,
        .links-wrapper {
          opacity: 1;
          transform: translate(0, 0);
        }
      }
    }
  }
  ${p =>
    p.type === SCREENSHOT
      ? `
    .swiper-container {
      padding-bottom: 3.75rem;
      min-height: 13.125rem;
      .swiper-slide {
        max-width: 25vw;
        ${mediaMax.xsMax`max-width: 40vw;`.join('')}
        ${mediaMax.xs`max-width: 80vw;`.join('')}
      }
    }
  `
      : null}

  ${p =>
    p.type === CENTERED
      ? `
    height: 35rem;
    padding-top: 4.375rem;
    ${mediaMax.xsMax`padding-top: 0;`}
    .swiper-slide {
      max-width: 56.25rem;
    }
  `
      : null}

  .swiper-pagination {
    margin: 0 auto 0.3125rem;
    .swiper-pagination-bullet {
      width: 1.625rem;
      height: 0.25rem;
      margin: 5px 2px !important;
      text-indent: -999px;
      cursor: pointer;
      background-color: #fff;
      border: none;
      border-radius: 0;
      opacity: 1;
      outline: none;
      .thumb:focus {
        outline: none;
      }
      &.swiper-pagination-bullet-active {
        background-image: linear-gradient(274deg, #009ee8, #0070fc);
      }
    }
    ${p =>
    p.showThumbnail && p.isMain
      ? `
      max-width: 71.25rem;
      width: calc(100% - 1.875rem) !important;
      right: 0;
      bottom: 0 !important;
      padding: 0;
      margin-bottom: 1rem;
      ${mediaMax.xsMax`
        display: flex;
        justify-content: space-between;
      `.join('')}
      ${mediaMin.md`
        justify-content: space-between !important;
        margin: auto auto 1rem !important;
        padding: 1.25rem 0;
        border-top: 2px solid rgba(255,255,255,.25) !important;
        display: flex;
      `.join('')}

      .has-thumbnail.swiper-pagination-bullet {
        position: relative;
        border-radius: 0;
        > img {
          width: 100%;
          position: relative;
          z-index: 1;
        }
        > .thumb {
            background-size: cover;
            background-repeat: no-repeat;
            background-position: center center;
            height: 3.4375rem;
            ${mediaMax.smMax`
              background-image: none !important;
            `.join('')}
        }
        ${mediaMin.md`
          height: auto !important;
          margin: 0 !important;
          text-indent: 0 !important;
          opacity: 1 !important;
          border: 0 !important;
          width: 9.84% !important;
          background-color: #293e69 !important;
          &:not(.swiper-pagination-bullet-active):hover {
            &:after {
              opacity: 0.3;
            }
          }
          &:before, &:after {
            content: '';
            left: 0;
            right: 0;
            position: absolute;
            width: 100%;
            transition: ${DEFAULT_TRANSITION};
          }
          &:before {
            background-color: white;
            top: calc(-1.25rem - 2px);
            height: 2px;
            margin: 0 auto;
            transform: scaleX(0);
          }
          &:after {
            height: 3.4375rem;
            border: 2px solid white;
            opacity: 0;
            z-index: 5;
            position: absolute;
            top: 0;
          }
          &.swiper-pagination-bullet-active {
            &:before {
              transform: scaleX(1);
            }
            &:after {
              opacity: 1;
            }
          }
        `.join('')}
      }
    `
      : null}
  }
`;

const setPosition = (type, isNext) => {
  switch (type) {
    case CENTERED: {
      return `
        left: ${isNext ? 'auto' : 'calc((100vw / 2) - 30rem)'};
        right: ${isNext ? 'calc((100vw / 2) - 30rem)' : 'auto'};
        @media(max-width: 850px) {
          left: ${isNext ? 'auto' : '5px'};
          right: ${isNext ? '5px' : 'auto'};
        }
      `;
    }
    case SCREENSHOT: {
      return `
        left: ${isNext ? 'auto' : 'calc((100vw / 2) - 9.375rem)'};
        right: ${isNext ? 'calc((100vw / 2) - 9.375rem)' : 'auto'};
      `;
    }
    default:
    return `
      left: ${isNext ? 'auto' : 0};
      right: ${isNext ? 0 : 'auto'};
    `;
  }
};

export const Control = styled.span`
  && {
    cursor: pointer;
    width: 10%;
    transition: ${DEFAULT_TRANSITION};
    position: absolute;
    top: 0;
    ${p => setPosition(p.type, p.isNext)}
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 999;
    height: 100%;
    opacity: .5;

    ${mediaMax.xsMax`
      width: 2.5rem;
      > img {
        height: 1.5rem;
      }
    `}

    ${p =>
    p.type === SCREENSHOT
      ? `
      height: 1.875rem;
      width: 1.875rem;
      top: auto;
      bottom: 1rem;
      img {
        width: 0.625rem;
      }
      &:after {
        content: none!important;
      }
    `
      : null}

    ${p =>
    p.type === CENTERED
      ? `
      height: 5rem;
      width: 5rem;
      top: 50%;
      transform: translateY(-50%);
      ${mediaMax.xsMax`
        height: 2.5rem;
        width: 2.5rem;
      `.join('')}
      &:after {
        content: none!important;
      }
    `
      : null}

    > img {
      position: relative;
      z-index: 10;
    }

    &:after {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      opacity: 0;
      transition: ${DEFAULT_TRANSITION};
      ${p =>
    p.isNext
      ? `
        /* Permalink - use to edit and share this gradient: https://colorzilla.com/gradient-editor/#000000+0,000000+100&0+0,0.65+100 */
        background: -moz-linear-gradient(left,  rgba(0,0,0,0) 0%, rgba(0,0,0,0.65) 100%); /* FF3.6-15 */
        background: -webkit-linear-gradient(left,  rgba(0,0,0,0) 0%,rgba(0,0,0,0.65) 100%); /* Chrome10-25,Safari5.1-6 */
        background: linear-gradient(to right,  rgba(0,0,0,0) 0%,rgba(0,0,0,0.65) 100%); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
      `
      : `
        /* Permalink - use to edit and share this gradient: https://colorzilla.com/gradient-editor/#000000+0,000000+100&0.65+0,0+100;Neutral+Density */
        background: -moz-linear-gradient(left,  rgba(0,0,0,0.65) 0%, rgba(0,0,0,0) 100%); /* FF3.6-15 */
        background: -webkit-linear-gradient(left,  rgba(0,0,0,0.65) 0%,rgba(0,0,0,0) 100%); /* Chrome10-25,Safari5.1-6 */
        background: linear-gradient(to right,  rgba(0,0,0,0.65) 0%,rgba(0,0,0,0) 100%); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
      `};
    }
  }
  &:hover {
    opacity: 1;
    &:after {
      opacity: 1;
    }
  }
`;
export const Pagination = styled.div`
  position: relative;
`;
