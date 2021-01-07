import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import * as SC from './styled';

const ErrorMessage = ({ children }) => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const delay = setTimeout(() => {
      setShow(true);
    }, 30);
    return () => clearTimeout(delay);
  }, []);

  return <SC.Error show={show}>{children}</SC.Error>;
};

ErrorMessage.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ErrorMessage;
