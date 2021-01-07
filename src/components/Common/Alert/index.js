import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import * as SC from './styled';

const Alert = ({ children, isError, alwaysShow = false }) => {
  const [show, setShow] = useState(false);
  const [hide, setHide] = useState(false);

  useEffect(() => {
    const delay = setTimeout(() => {
      setShow(true);
    }, 30);
    return () => clearTimeout(delay);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (!alwaysShow) {
      const delay = setTimeout(() => {
        if (show) {
          setHide(true);
        }
      }, 3000);
      return () => clearTimeout(delay);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [show]);

  return (
    <SC.AlertContainer hide={hide} isError={isError} show={show}>
      <div>{children}</div>
    </SC.AlertContainer>
  );
};

Alert.propTypes = {
  children: PropTypes.node.isRequired,
  isError: PropTypes.bool,
};

// TODO:
export default Alert;
