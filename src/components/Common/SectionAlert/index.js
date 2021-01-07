import React from 'react';
import PropTypes from 'prop-types';

import Alert from '~/components/Common/Alert';
import * as SC from './styled';

const SectionAlert = props => (
  <SC.SlideAlertWrapper className="container">
    <div className="row">
      <div className="col">
        <Alert alwaysShow error={props.error}>
          {props.children}
        </Alert>
      </div>
    </div>
  </SC.SlideAlertWrapper>
);

SectionAlert.propTypes = {
  children: PropTypes.node.isRequired,
  error: PropTypes.bool,
};

export default SectionAlert;
