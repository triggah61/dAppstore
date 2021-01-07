import styled from 'styled-components';
import { Link } from '@reach/router';

import { mediaMax } from '~/utils';

export const Footer = styled.div`
  background-image: linear-gradient(173deg, #00082f, #001743);
  padding-top: 2.5rem;
  color: var(--text-color);
  b {
    font-family: PFSquareSansPro-Medium, sans-serif;
    color: #fff;
    margin-right: 5px;
    font-weight: normal;
  }
`;

export const H2 = styled.h3`
  font-family: PFSquareSansPro-Medium, sans-serif;
  margin-bottom: 1.875rem;
  font-size: 1.125rem;
  color: #fff;
  display: inline-block;
  > img {
    width: 100%;
  }
  ${mediaMax.xsMax`
    height: 2.5rem;
    line-height: 2.5rem;
    margin-bottom: 0.9375rem;
  `}
`;

export const AnchorViewDetails = styled.a`
  && {
    color: #00a8ff;
    display: inline-flex;
    align-items: center;
    text-decoration: none;
    > i {
      margin-left: 5px;
    }
    ${mediaMax.xsMax`
      margin-bottom: 0.9375rem;
      font-size: 0.875rem;
    `}
    &:hover {
      color: white;
    }
  }
`;

export const Info = styled.div`
  margin-top: 1.875rem;
  padding-top: 1.875rem;
  padding-bottom: 1.875rem;
  border-top: 1px solid #233158;
  > div {
    > p {
      margin-bottom: 0;
      padding: 0;
      font-size: 0.8125rem;
      color: rgba(164, 177, 215, 0.5);
    }
  }
`;

export const LinkContainer = styled.div`
  ${mediaMax.xsMax`
    font-size: 0.875rem;
  `}
`;
export const Logo = styled(Link)`
  width: 12.5rem;
  display: inline-block;
  > img {
    width: 100%;
  }
`;
