import styled from 'styled-components';
import { mediaMax } from 'utils';

// Note: for fast development,  disabled autoplay in components/Common/Slider/index.js
export const Container = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 0.9375rem;
  height: 50rem;
  width: 100%;
  background: url(${p => p.bg}) no-repeat center;
  background-size: cover;
  ${mediaMax.xsMax`
    height: 45rem;
    background-image: url(${p => p.bg_mb || p.bg});
    align-items: flex-end;
    padding: 0 1.25rem 13%;
  `}
  &.probit p{
    color: #222;
    text-shadow: 1px 1px 0 #fff, -1px -1px 0 #fff, 1px -1px 0 #fff, -1px 1px 0 #fff, 1px 1px 0 #fff;
    letter-spacing: 1px;
    word-spacing: 3px;
    margin-top: 5rem;
    height: 8rem;

    ${mediaMax.mdMax`
        margin-top: 40px;
        color: #fff;
        text-shadow: 1px 1px 1px #000, -1px -1px 1px #000, 1px -1px 1px #000, -1px 1px 2px #000, 1px 1px 1px #000;
        height: auto;
    `}
    ${mediaMax.smMax`
        margin-top: 0;
        width: auto;
    `}
    ${mediaMax.xsMax`
        font-size: 15px;
    `}
  }
  &.probit h1{
    font-size: 4.3rem;
    color: #152a45;
    text-shadow: 0 2px 4px rgba(0, 0, 0, 0.4);
    width: 500px;
    font-weight: 700;

    ${mediaMax.mdMax`
      color: #fff;
      text-shadow: 1px 1px 1px #000, -1px -1px 1px #000, 1px -1px 1px #000, -1px 1px 2px #000, 1px 1px 1px #000;
      margin-top: 6rem;
    `}
    ${mediaMax.smMax`
      width: 100%;
      margin-bottom: 8rem;
    `}
    ${mediaMax.xsMax`
      margin-bottom: 2rem;
      font-size: 2.25rem;
    `}
  }
`;

export const Inner = styled.div`
  width: 100%;
  max-width: 71.25rem;
`;

export const ContentWrapper = styled.div`
  max-width: 50.125rem;
  width: 100%;

  &.cont-wrap-ace-casino {
    h1 {
      display: none;
    }
  }

  ${mediaMax.smMax`
    &.cont-wrap-spyce-ieo---listing{
      margin-top: 9rem;
    }
    &.cont-wrap-peepeth {
      position: relative;
      top: 51px;
    }
    &.cont-wrap-chainflix{
      position: relative;
      bottom: 4rem;
    }
  `}
  ${mediaMax.xsMax`
    &.cont-wrap-spyce-ieo---listing{
      margin-top: 0;
      margin-bottom: 0;
    }
  `}
`;

export const H1 = styled.h1`
  font-family: Sandoll-Medium, sans-serif;
  font-size: 5.625rem;
  color: #fff;
  margin-bottom: 0.9375rem;
  position: relative;
  text-shadow: 0 0 3px black;
  ${mediaMax.smMax`
    font-size: 2.25rem;
    color: #fff;
    margin-bottom: 0.9375rem;
    width: 100%;
  `}
`;

export const Description = styled.p`
  font-family: Sandoll-Light, sans-serif;
  font-size: 1.125rem;
  color: #fff;
  margin-bottom: 1.5625rem;
  width: 70%;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-shadow: 0 0 3px black;
  -webkit-line-clamp: 3;
  height: 10.625rem;
  display: flex;

  &.desc-peepeth {
    color: #4e4e4e;
    text-shadow: none;
    font-weight: 700;
  }

  &.desc-talken {
    font-size: 1.375rem;
  }

  &.desc-ace-casino {
    font-size: 1.375rem;
    height: auto;
    width: 100%;
    margin-top: 250px;
    margin-bottom: 50px;
  }

  ${mediaMax.smMax`
    font-size: 1rem;
    height: 2.8125rem;

    &.desc-spyce-ieo---listing{
      height: auto;
      margin-bottom: 5rem;
    }

    &.desc-talken {
      font-size: 1.25rem
    }

    &.desc-ace-casino {
      font-size: 1.25rem
    }
  `}

  ${mediaMax.xsMax`
    font-size: 15px;
    width: 100%;
    height: 13.75rem;

    &.desc-spyce-ieo---listing{
      margin-bottom: 3rem;
    }

    &.desc-ace-casino {
      margin-top: 0;
      margin-bottom: 12rem;
    }
  `}
`;

export const LinksWrapper = styled.div`
  max-width: 28.125rem;

  &.button-wrap-probit {
    > div {
      margin-top: 443px;
      .readmore {
        border: 1px solid #c8c6c6;
      }
    }
  }
  &.button-wrap-xangle {
    margin-top: 445px;
  }


 &.button-wrap-coba {
  margin-top: 445px;
  &&&{
    ${mediaMax.smMax`
    margin-top: 0
    > div {
      flex-direction: row
      flex-wrap: wrap
    }
    a{
      margin-bottom: -27rem;
      &:last-child{
        margin-bottom: -36rem;

      }
    }
  `}

    ${mediaMax.sm`
    margin-top: 0
    > div {
      flex-direction: row
      flex-wrap: wrap
    }
    a{
      margin-bottom: -18rem;
      &:last-child{
        margin-bottom: -30rem

      }
    }
  `}

    ${mediaMax.xsMax`
      margin-top: 0
      > div {
        flex-direction: row
        flex-wrap: wrap
      }
      a{
        margin-bottom: 1rem;

        &:first-child{
          line-height: 37px;
          max-width: 10rem;
        }

        &:nth-child(2){
          max-width: 10rem;
        }
        &:last-child{
          margin-bottom: 1rem;
          max-width: 10rem;
        }
      }
    `}

    ${mediaMax.xs`
    margin-top: 0
    > div {
      flex-direction: row
      flex-wrap: wrap
    }
    a{
      margin-bottom: 1rem;

      &:first-child{
        line-height: 37px;
        margin-right: 0px !important;
        max-width: 9rem;
      }

      &:nth-child(2){
        padding-left: 0;
        padding-right: 0px;
        margin-right: 0;
        max-width: 8rem;
      }
      &:last-child{
        margin-bottom: 0;
        margin-right: 0;
        max-width: 9rem;
      }
    }
  `}
  }

  a{
    margin-right: 1rem;
  }
}




  &.button-wrap-stayking4{
    margin-top: 445px;

    a:first-child{
      border: 1px solid #aaa;
    }

    &&&{
      ${mediaMax.xsMax`
        margin-top: 0

        > div {
          flex-direction: row
          flex-wrap: wrap
        }

        a{
          margin-bottom: 1rem;

          &:first-child{
            line-height: 37px;
          }

          &:last-child{
            margin-bottom: 0;
          }
        }
      `}
    }

    a{
      margin-right: 1rem;
    }
  }






`;

export const Links = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 1.5625rem;
  > * {
    max-width: 12.5rem;
    width: 100%;
    ${mediaMax.xsMax`max-width: 8.75rem;`}
  }
`;
export const StatusIcon = styled.i`
  position: absolute;
  top: 3rem;
  left: -1.5rem;
  z-index: 2;
  font-size: 1rem;
`;
