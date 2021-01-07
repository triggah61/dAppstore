import React from 'react';
import { createGlobalStyle } from 'styled-components';

import { DEFAULT_TRANSITION } from 'constants/config';

const AnuratiRegular = 'assets/fonts/Anurati-Regular.woff';
const Hyperspace = 'assets/fonts/Hyperspace.woff';
const HyperspaceBold = 'assets/fonts/Hyperspace-Bold.woff';
const HyperspaceBoldItalic = 'assets/fonts/Hyperspace-BoldItalic.woff';
const HyperspaceItalic = 'assets/fonts/Hyperspace-Italic.woff';
const PFSquareSansProItalic = 'assets/fonts/PFSquareSansPro-Italic.woff';
const PFSquareSansProLight = 'assets/fonts/PFSquareSansPro-Light.woff';
const PFSquareSansProMedium = 'assets/fonts/PFSquareSansPro-Medium.woff';
const PFSquareSansProRegular = 'assets/fonts/PFSquareSansPro-Regular.woff';
const BebasNeue = 'assets/fonts/BebasNeue-Regular.ttf';

const SandollThin = 'assets/fonts/SDGothicNeoa/SDGothicNeoa-aTh.woff';
const SandollUltraLight = 'assets/fonts/SDGothicNeoa/SDGothicNeoa-bUltLt.woff';
const SandollLight = 'assets/fonts/SDGothicNeoa/SDGothicNeoa-cLt.woff';
const SandollRegular = 'assets/fonts/SDGothicNeoa/SDGothicNeoa-dRg.woff';
const SandollMedium = 'assets/fonts/SDGothicNeoa/SDGothicNeoa-eMd.woff';
const SandollSemiBold = 'assets/fonts/SDGothicNeoa/SDGothicNeoa-fSm.woff';
const SandollBold = 'assets/fonts/SDGothicNeoa/SDGothicNeoa-gBd.woff';
const SandollExtraBold = 'assets/fonts/SDGothicNeoa/SDGothicNeoa-hExBd.woff';
const SandollHeavy = 'assets/fonts/SDGothicNeoa/SDGothicNeoa-iHv.woff';

const GlobalStyles = createGlobalStyle`
  @font-face {
    font-family: Anurati-Regular;
    src: url('${AnuratiRegular}') format('woff');
  }

  @font-face {
    font-family: Hyperspace;
    src: url('${Hyperspace}') format('woff');
  }

  @font-face {
    font-family: Hyperspace-Bold;
    src: url('${HyperspaceBold}') format('woff');
  }

  @font-face {
    font-family: Hyperspace-BoldItalic;
    src: url('${HyperspaceBoldItalic}') format('woff');
  }

  @font-face {
    font-family: Hyperspace-Italic;
    src: url('${HyperspaceItalic}') format('woff');
  }
  @font-face {
    font-family: PFSquareSansPro-Italic;
    src: url('${PFSquareSansProItalic}') format('woff');
  }

  @font-face {
    font-family: PFSquareSansPro-Light;
    src: url('${PFSquareSansProLight}') format('woff');
  }

  @font-face {
    font-family: PFSquareSansPro-Medium;
    src: url('${PFSquareSansProMedium}') format('woff');
  }

  @font-face {
    font-family: PFSquareSansPro-Regular;
    src: url('${PFSquareSansProRegular}') format('woff');
  }

  @font-face {
    font-family: BebasNeue-Regular;
    src: url('${BebasNeue}') format('truetype');
  }

  @font-face {
    font-family: Sandoll-Thin ;
    src: url('${SandollThin}') format('woff');
  }

  @font-face {
    font-family: Sandoll-UltraLight;
    src: url('${SandollUltraLight}') format('woff');
  }

  @font-face {
    font-family: Sandoll-Light;
    src: url('${SandollLight}') format('woff');
  }

  @font-face {
    font-family: Sandoll-Regular;
    src: url('${SandollRegular}') format('woff');
  }

  @font-face {
    font-family: Sandoll-Medium;
    src: url('${SandollMedium}') format('woff');
  }

  @font-face {
    font-family: Sandoll-SemiBold;
    src: url('${SandollSemiBold}') format('woff');
  }

  @font-face {
    font-family: Sandoll-Bold ;
    src: url('${SandollBold}') format('woff');
  }

  @font-face {
    font-family: Sandoll-ExtraBold;
    src: url('${SandollExtraBold}') format('woff');
  }

  @font-face {
    font-family: SandollHeavy;
    src: url('${SandollHeavy}') format('woff');
  }

  html body {
    background-color:var(--bg-color);
    font-family: PFSquareSansPro-Regular, sans-serif;
    line-height: 1.4;
  }

  :root {
    --text-color: #a3a3aa;
    --bg-color: #001743
  }

  .rdw-editor-toolbar {
    display: none;
  }

  .DraftEditor-editorContainer {
    color: #fff;
  }

  .rdw-image-imagewrapper img {
    width: 100% !important;
  }

  body {
    a {
      transition: ${DEFAULT_TRANSITION}
      color: var(--text-color);
      &:hover {
        color: white;
      }
    }

    .dropdown {
      display: flex;
      align-items: center;
      height: 5rem;
      .dropdown-menu {
        border-radius: 0;
        .dropdown-item {
          padding: .25rem 1rem;
          &:focus, &:active, &[aria-current="page"] {
            color: white;
            background-color: var(--bg-color) !important;
          }
          &:hover {
            background-color: #eee
          }
        }
      }
      &.header-dropdown {
        .dropdown-menu {
          margin-top: 1.3125rem;
          &:before {
            content: '';
            position: absolute;
            top: -0.5rem;
            left: 1rem;
            width: 0;
            height: 0;
            border-left: 0.5rem solid transparent;
            border-right: 0.5rem solid transparent;
            border-bottom: 0.5rem solid white;
          }
          &.dropdown-menu-right:before {
            left: auto;
            right: 1rem;
          }
        }
        &.show {
          .dropdown-toggle:before {
            opacity: 1;
          }
        }
        .dropdown-toggle {
          background-color: transparent!important;
          border: 0!important;
          box-shadow: none!important;
          display: flex;
          align-items: center;
          display: -moz-box;
          position: relative
          height: 2.1875rem;
          &:hover {
            &:before {
              opacity: 1;
            }
          }
          &:before {
            top: 50%;
            left: 39%;
            content: '';
            position: absolute;
            transform: translate(-50%, -50%);
            background: rgba(255,255,255,.1);
            border: 1px solid rgba(255,255,255,.15);
            border-radius: 50%;
            width: 2.1875rem;
            height: 2.1875rem;
            transition: ${DEFAULT_TRANSITION};
            opacity: 0;
          }
        }
      }
    }
  }
  .bwSlide.main-slider,
  .dappStoreSlide.main-slider {
    h1 {
      font-weight: normal;
      text-transform: uppercase;
      margin-top: -5rem;
      max-width: 70%;
      @media (min-width: 992px) {
        font-size: 3.4375rem;
      }
      @media (max-width: 991px) and (min-width: 768px) {
        max-width: 45%;
      }
      @media (max-width: 767px) {
        margin-top: auto;
        max-width: 100%;
      }
      + p {
        @media (min-width: 992px) {
          max-width: 60%;
        }
      }
    }
  }
  .uppercase {
    text-transform: uppercase;
  }
`;

export default () => <GlobalStyles />;
