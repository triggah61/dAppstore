import React from 'react';
import styled from 'styled-components';
import { Link as ILink } from '@reach/router';
import { DEFAULT_TRANSITION } from 'constants/config';
import { mediaMax } from '~/utils';

const setRadius = (value, radius = 0) => {
  if (typeof value === 'string') {
    return value;
  }

  if (typeof value === 'boolean') {
    return value ? radius : radius;
  }
  return 0;
};

const linkStyle = p => {
  return `
    &&& {
      ${p.minWidth ? `min-width: ${p.minWidth}` : ''}
      cursor: pointer;
      transition: ${DEFAULT_TRANSITION};
      background: linear-gradient(to bottom,#009ee8,#0070fc);
      background-size: 100% 150%;
      white-space: nowrap;
      height: 2.8125rem;
      border-radius: ${setRadius(p.isRounded, '2.8125rem')};
      text-decoration: none;
      text-transform: uppercase;
      color: white!important;
      display: ${p.block ? 'flex' : 'inline-flex'};
      ${p.block ? 'width: 100%;' : ''}
      align-items: center;
      justify-content: center;
      padding: 0 20px;
      border: 0;
      outline: none;
      &[disabled], .disabled {
        background: linear-gradient(to bottom,#009ee8,#009ee8);
        cursor: not-allowed;
      }
      > img {
        margin-right: 0.625rem;
      }
      &:hover {
        background-position: 0 100%;
        box-shadow: 1px 1px 24px 0 rgba(0, 156, 233, .2);
      }
      ${mediaMax.xsMax`
        font-size: .8125rem;
        height: 2.3125rem;
        border-radius: ${setRadius(p.isRounded, '2.3125rem')};
      `.join('')}
      ${
  p.size === 'sm'
    ? `
        height: 2.1875rem;
        border-radius: ${setRadius(p.isRounded, '2.1875rem')};
        ${mediaMax.xsMax`
          font-size: 0.875rem;
          height: 1.875rem;
          border-radius: ${setRadius(p.isRounded, '1.875rem')};
        `.join('')}
      `
    : null
}
    }
  `;
};

const outlineStyle = `
  &&& {
    background: white;
    border: 1px solid white;
    color: #001101!important;
    &:hover {
      background-color: #ddd;
      border-color: #ddd;
      box-shadow: 1px 1px 10px 0 rgba(255, 255, 255, .2);
    }
  }
`;

export const ExternalLink = styled.a`
  ${p => linkStyle(p)}
  ${p => (p.isLight ? outlineStyle : null)}
`;

export const Link = styled(({ isLight, isRounded, minWidth, ...rest }) => (
  <ILink {...rest} />
))`
  ${p => linkStyle(p)}
  ${p => (p.isLight ? outlineStyle : null)}
`;

export const Button = styled.button`
  ${p => linkStyle(p)}
  ${p => (p.isLight ? outlineStyle : null)}
`;
