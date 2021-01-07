import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import * as SC from './styled';

const Loader = props => {
  const [show, setShow] = useState(false);

  // Show component on mount
  useEffect(() => {
    setShow(!!props.loading);
  }, [props.loading]);

  return (
    <SC.LoaderWrapper
      heightSize={props.height}
      xsHeightSize={props.xsHeight}
      backgroundColor={props.height ? props.backgroundColor : undefined}
    >
      {props.children && !!props.loading ? (
        <SC.FadeContent show={show}>{props.children}</SC.FadeContent>
      ) : (
        <SC.Loader size={props.size} />
      )}
    </SC.LoaderWrapper>
  );
};

Loader.propTypes = {
  children: PropTypes.node,
  height: PropTypes.string,
  xsHeight: PropTypes.string,
  backgroundColor: PropTypes.string,
  size: PropTypes.string,
};

export default Loader;
