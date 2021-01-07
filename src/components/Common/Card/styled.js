import styled from 'styled-components';
import { DEFAULT_TRANSITION } from 'constants/config';
import { mediaMax } from '~/utils';

export const Container = styled.div`
  margin-bottom: 1.5625rem;
  &:hover {
    > div > div:first-child {
      z-index: 999;
      opacity: 1;
      > * {
        opacity: 1;
      }
    }
    > div:before {
      opacity: 1;
    }
  }
  &&& {
    ${mediaMax.xsMax`
      margin-bottom: 1.25rem
      padding-left: .5rem;
      padding-right: .5rem;
    `}
  }
`;

export const InnerContainer = styled.div`
  height: ${p => p.contentHeight || '23.75rem'};
  position: relative;
  border-radius: 1.25rem;
  overflow: hidden;
  background: #444 url(${p => p.bg}) no-repeat center center;
  background-size: cover;
  ${mediaMax.xsMax`
    height: ${p => p.contentXsHeight || p.contentHeight || '15.9375rem'};
  `}
  &:before,
  &:after {
    transition: ${DEFAULT_TRANSITION};
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 55%;
    content: '';
    z-index: 0;
  }
  &:after {
    /* Permalink - use to edit and share this gradient: https://colorzilla.com/gradient-editor/#2b6fbc+0,2b6fbc+100&0+0,0.7+40,1+67,1+100 */
    background: -moz-linear-gradient(
      top,
      rgba(43, 111, 188, 0) 0%,
      rgba(43, 111, 188, 0.7) 40%,
      rgba(43, 111, 188, 1) 67%,
      rgba(43, 111, 188, 1) 100%
    ); /* FF3.6-15 */
    background: -webkit-linear-gradient(
      top,
      rgba(43, 111, 188, 0) 0%,
      rgba(43, 111, 188, 0.7) 40%,
      rgba(43, 111, 188, 1) 67%,
      rgba(43, 111, 188, 1) 100%
    ); /* Chrome10-25,Safari5.1-6 */
    background: linear-gradient(
      to bottom,
      rgba(43, 111, 188, 0) 0%,
      rgba(43, 111, 188, 0.7) 40%,
      rgba(43, 111, 188, 1) 67%,
      rgba(43, 111, 188, 1) 100%
    ); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
    filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#002b6fbc', endColorstr='#2b6fbc',GradientType=0 ); /* IE6-9 */
  }
  &:before {
    opacity: 0;
    z-index: 1;
    /* Permalink - use to edit and share this gradient: https://colorzilla.com/gradient-editor/#000000+0,000000+100&0+0,0.7+40,1+67,1+100 */
    background: -moz-linear-gradient(
      top,
      rgba(0, 0, 0, 0) 0%,
      rgba(0, 0, 0, 0.7) 40%,
      rgba(0, 0, 0, 1) 67%,
      rgba(0, 0, 0, 1) 100%
    ); /* FF3.6-15 */
    background: -webkit-linear-gradient(
      top,
      rgba(0, 0, 0, 0) 0%,
      rgba(0, 0, 0, 0.7) 40%,
      rgba(0, 0, 0, 1) 67%,
      rgba(0, 0, 0, 1) 100%
    ); /* Chrome10-25,Safari5.1-6 */
    background: linear-gradient(
      to bottom,
      rgba(0, 0, 0, 0) 0%,
      rgba(0, 0, 0, 0.7) 40%,
      rgba(0, 0, 0, 1) 67%,
      rgba(0, 0, 0, 1) 100%
    ); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
    filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#00000000', endColorstr='#000000',GradientType=0 ); /* IE6-9 */
  }
`;

export const Overlay = styled.div`
  display: flex;
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.4);
  z-index: -1;
  opacity: 0;
  transition: all 0.3s ease;
  border: solid 2px #31a8e3;
  align-items: center;
  justify-content: center;
  border-radius: 1.25rem;
  > * {
    transition: all 0.6s ease 0.1s;
    opacity: 0;
    width: 160px !important;
  }
`;

export const Content = styled.div`
  height: auto;
  padding: 2.8125rem;
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  z-index: 2;
  ${mediaMax.mdMax`
    padding: 1.5rem;
  `}
  ${mediaMax.xsMax`
    padding: 1rem;
  `}
`;

export const LinksContainer = styled.div`
  position: absolute;
  top: 2.8125rem;
  right: 2.8125rem;
  height: calc(100% - 5.625rem);
  z-index: 2;
  ${mediaMax.mdMax`
    top: 1.5rem;
    right: 1.5rem;
    height: calc(100% - 3rem);
  `}
  ${mediaMax.xsMax`
    top: 1rem;
    right: 0.5rem;
    height: calc(100% - 2rem);
  `}
  &.search {
    left: 2.8125rem;
    right: auto;
    ${mediaMax.mdMax`
      left: 1.5rem;
      right: auto;
    `}
    .socials {
      position: relative;
      bottom: -8px;
    }
  }
`;

export const Name = styled.h3`
  font-size: 2.1875rem;
  color: #fff;
  margin: 0;
  text-align: left;
  position: relative;
  z-index: 2;
  font-family: PFSquareSansPro-Medium, sans-serif;
  text-transform: ${p => (p.isNews ? 'initial' : 'uppercase')};
  word-spacing: ${p => (p.isNews ? 0 : '100vw')};
  font-weight: 400;
  line-height: 1;
  max-width: ${p => (p.isNews ? 'initial' : 'calc(100% - 4.6875rem)')};
  overflow: hidden;
  ${mediaMax.mdMax`
    max-width: ${p => (p.isNews ? 'initial' : 'calc(100% - 1.5rem)')};
    font-size: 1.5rem;
  `}
  ${mediaMax.xsMax`
    max-width: ${p => (p.isNews ? 'initial' : 'calc(100% - 1rem)')};
    font-size: 1rem;
  `}
  &.search {
    word-spacing: initial;
    max-width: none;
    font-size: 20px;
    bottom: 25px;
  }
`;

export const DateContaner = styled.div`
  color: white;
  padding: 0.25rem 0;
  display: flex;
  align-items: center;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  text-shadow: 1px 1px 1px #000, -1px -1px 1px #000;
  /* Permalink - use to edit and share this gradient: https://colorzilla.com/gradient-editor/#1e5799+20,2989d8+50,1e5799+80&0+0,0.8+15,1+19,1+81,0.8+85,0+100;Blue+Two+Sided+Transparent */
  background: -moz-linear-gradient(
    left,
    rgba(30, 87, 153, 0) 0%,
    rgba(30, 87, 153, 0.8) 15%,
    rgba(30, 87, 153, 1) 19%,
    rgba(30, 87, 153, 1) 20%,
    rgba(41, 137, 216, 1) 50%,
    rgba(30, 87, 153, 1) 80%,
    rgba(30, 87, 153, 1) 81%,
    rgba(30, 87, 153, 0.8) 85%,
    rgba(30, 87, 153, 0) 100%
  ); /* FF3.6-15 */
  background: -webkit-linear-gradient(
    left,
    rgba(30, 87, 153, 0) 0%,
    rgba(30, 87, 153, 0.8) 15%,
    rgba(30, 87, 153, 1) 19%,
    rgba(30, 87, 153, 1) 20%,
    rgba(41, 137, 216, 1) 50%,
    rgba(30, 87, 153, 1) 80%,
    rgba(30, 87, 153, 1) 81%,
    rgba(30, 87, 153, 0.8) 85%,
    rgba(30, 87, 153, 0) 100%
  ); /* Chrome10-25,Safari5.1-6 */
  background: linear-gradient(
    to right,
    rgba(30, 87, 153, 0) 0%,
    rgba(30, 87, 153, 0.8) 15%,
    rgba(30, 87, 153, 1) 19%,
    rgba(30, 87, 153, 1) 20%,
    rgba(41, 137, 216, 1) 50%,
    rgba(30, 87, 153, 1) 80%,
    rgba(30, 87, 153, 1) 81%,
    rgba(30, 87, 153, 0.8) 85%,
    rgba(30, 87, 153, 0) 100%
  ); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#001e5799', endColorstr='#001e5799',GradientType=1 ); /* IE6-9 */
  > img {
    width: 20px;
    margin-right: 0.3125rem;
  }
  ${mediaMax.xsMax`
    font-size: 0.75rem;
    > img {
      width: 1rem;
    }
  `}
`;
export const StatusIcon = styled.i`
  position: absolute;
  top: 1rem;
  right: 1rem;
  z-index: 2;
`;
