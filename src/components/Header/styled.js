import styled from 'styled-components';
import { Link } from '@reach/router';

import { DEFAULT_TRANSITION } from 'constants/config';
import { mediaMax, mediaMin } from '~/utils';

const alignMiddle = `
  display: flex;
  align-items: center;
`;

export const HeaderWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 80px;
  z-index: 1000;
  background: rgba(255, 255, 255, 0.05);
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  ${mediaMax.smMax`
    position: fixed;
    z-index:1000 !important;
  `}
`;

export const HeaderInner = styled.div`
  ${alignMiddle}
  justify-content: space-between;
  height: 5rem;
  margin: 0 auto;
  max-width: 73.125rem;
  width: 100%;
  padding: 0 0.9375rem;
  ${mediaMax.smMax`
    flex-wrap: wrap;
    background-color: #000;
    border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  `}
`;

export const LogoWrapper = styled(Link)`
  width: 11rem;
  > img {
    width: 100%;
  }
`;

export const LinksWrapper = styled.ul`
  ${alignMiddle}
  list-style: none;
  margin: 0;
  padding: 0;
  li {
    // padding: 0 2.5rem;
    padding: 0 2.3rem;
    ${mediaMax.mdMax`
      padding: 0 1.875rem;
    `}
    @media (max-width: 1100px) {
      padding: 0 1.125rem;
    }
  }
  ${mediaMin.md`margin-right: 3.75rem`}
  ${mediaMax.smMax`
    display: block;
  `}
`;

export const LinkItem = styled(Link)`
  height: 5rem;
  ${alignMiddle}
  position: relative;
  white-space: nowrap;
  color: rgba(255, 255, 255, 0.35) !important;
  transition: ${DEFAULT_TRANSITION};
  font-size: 1.125rem;
  text-decoration: none !important;
  ${mediaMax.smMax`height: 3.125rem;`}
  &:before {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 1px;
    background-color: white;
    transition: ${DEFAULT_TRANSITION};
    opacity: 0;
    transform: scaleX(0);
    ${mediaMin.md`content: '';`}
  }
  &[aria-current='page'],
  &:hover {
    color: white !important;
    &:before {
      transform: scaleX(1);
      opacity: 1;
    }
  }
  & svg {
    margin-right: 0.4375rem;
  }
`;

export const UtilsWrapper = styled.div`
  ${alignMiddle}
  justify-content: center;
`;

export const SearchWrapper = styled.div``;

export const SearchButton = styled(Link)`
  && {
    width: 2.1875rem;
    border-radius: 50%;
    background: none;
    padding: 7px;
    display: flex;
    border: 1px solid transparent;
    transition: ${DEFAULT_TRANSITION};
    cursor: pointer;
    :hover,
    &[aria-current='page'] {
      background: rgba(255, 255, 255, 0.1);
      border-color: rgba(255, 255, 255, 0.15);
    }
  }
`;

export const HeaderContainer = styled.div`
  ${alignMiddle}
  ${mediaMax.smMax`
    width: 100%;
    justify-content: space-between;
  `}
`;

export const MenuWrapper = styled.div`
  transition: all 0.3s ease ${p => (p.isOpen ? 0 : 0.3)}s;
  > div {
    transition: all 0.3s ease ${p => (p.isOpen ? 0.3 : 0)}s;
    ${mediaMin.md`${alignMiddle}`}
    ${mediaMax.smMax`
      background-color: #233158;
      width: 18.75rem;
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      box-shadow: -1px 0 5px -2px rgba(0,0,0,0.74);
      transform: translateX(${p => (p.isOpen ? 0 : '100%')});
    `}
  }
  ${mediaMax.smMax`
    position: fixed;
    right: 0;
    top: 5rem;
    bottom: 0;
    width: 100%;
    /* Permalink - use to edit and share this gradient: https://colorzilla.com/gradient-editor/#000000+0,000000+100&0+0,0.65+100 */
    background: -moz-linear-gradient(left,  rgba(0,0,0,0) 0%, rgba(0,0,0,0.65) 100%); /* FF3.6-15 */
    background: -webkit-linear-gradient(left,  rgba(0,0,0,0) 0%,rgba(0,0,0,0.65) 100%); /* Chrome10-25,Safari5.1-6 */
    background: linear-gradient(to right,  rgba(0,0,0,0) 0%,rgba(0,0,0,0.65) 100%); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
    filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#00000000', endColorstr='#a6000000',GradientType=1 ); /* IE6-9 */
    transform: translateX(${p => (p.isOpen ? 0 : '100%')});
    opacity: ${p => (p.isOpen ? 1 : 0)});
  `}
`;

export const ToggleButton = styled.div`
  height: 2.5rem;
  width: 2.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  ${mediaMin.md`display: none;`}
  > i {
    position: relative;
    width: 1.375rem;
    height 2px;
    background-color: ${p => (p.isOpen ? 'transparent' : 'white')};
    border-radius: 1px;
    transition: ${DEFAULT_TRANSITION};
    &:before, &:after {
      content: '';
      transition: ${DEFAULT_TRANSITION};
      height: 100%;
      width: 100%;
      position: absolute;
      left: 0;
      top: 0;
      border-radius: 1px;
      background-color: white;
      transform: ${p =>
    p.isOpen ? 'translate(0px, 0px) rotate(45deg)' : 'translateY(-6px)'};
    }

    &:after {
      transform: ${p =>
    p.isOpen ? 'translate(0px, 0px) rotate(-45deg)' : 'translateY(6px)'};
    }
  }
`;
export const AccountDropddownWrapper = styled.div`
  .dropdown {
    margin-left: 0.75rem;
    a {
      cursor: pointer;
    }
    .dropdown-menu:before {
      border-bottom-color: #009ee8 !important;
    }
  }
`;
export const UserName = styled.span`
  &&& {
    background: linear-gradient(to bottom, #009ee8, #0070fc);
    margin-top: -0.5rem;
    > small {
      color: white;
    }
  }
`;
export const LinkStyled = styled(Link)`
  padding: 1.657rem 0;
  margin: 0 1.25rem !important;
  white-space: nowrap;
  color: rgba(255, 255, 255, 0.35);
  transition: ${DEFAULT_TRANSITION};
  :hover {
    color: white;
  }
`;
