import React from 'react';
import PropTypes from 'prop-types';

import Loader from 'components/Common/Loader';
import * as SC from './styled';

const isCoba = value => value.indexOf('coba:') === 0;

const isExternalLink = urlString => {
  if (urlString)
    return (
      urlString.indexOf('http://') === 0 ||
      urlString.indexOf('https://') === 0 ||
      isCoba(urlString)
    );
  return true;
};

const Button = ({
  children,
  icon,
  link,
  onClick,
  isLight = false,
  isRounded = false,
  type,
  disabled,
  size,
  block,
  loading,
  minWidth,
  className,
}) => {
  if (type === 'button' || type === 'submit') {
    return (
      <SC.Button
        className={className}
        minWidth={minWidth}
        type={type}
        block={block}
        size={size}
        disabled={disabled}
        onClick={onClick}
        isLight={isLight}
        isRounded={isRounded}
      >
        {icon && !loading && <img src={icon} alt="" />}
        {loading ? <Loader size="sm" /> : children}
      </SC.Button>
    );
  }

  return isExternalLink(link) ? (
    <SC.ExternalLink
      className={className}
      minWidth={minWidth}
      block={block}
      size={size}
      disabled={disabled}
      href={link}
      onClick={onClick}
      isLight={isLight}
      isRounded={isRounded}
      target={typeof link !== 'undefined' && isCoba(link) ? null : '_blank'}
      rel="noopener noreferrer"
    >
      {icon && !loading && <img src={icon} alt="" />}
      {loading ? <Loader size="sm" /> : children}
    </SC.ExternalLink>
  ) : (
    <SC.Link
      minWidth={minWidth}
      block={block}
      size={size}
      disabled={disabled}
      to={link}
      isLight={isLight}
      isRounded={isRounded}
      onClick={onClick}
    >
      {icon && !loading && <img src={icon} alt="" />}
      {loading ? <Loader size="sm" /> : children}
    </SC.Link>
  );
};

Button.propTypes = {
  children: PropTypes.node.isRequired,
  icon: PropTypes.string,
  link: PropTypes.string,
  onClick: PropTypes.func,
  isLight: PropTypes.bool,
  isRounded: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
  type: PropTypes.oneOf(['button', 'submit', undefined]),
  disabled: PropTypes.bool,
  size: PropTypes.oneOf(['sm']),
  block: PropTypes.bool,
  loading: PropTypes.bool,
  minWidth: PropTypes.string,
};

export default Button;
