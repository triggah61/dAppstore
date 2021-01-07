import React from 'react';
import PropTypes from 'prop-types';

import { getButtonText } from 'utils';
import Button from 'components/Common/Button';

const VisitSiteButton = ({ link, action, type }) => (
  <Button
    type="button"
    onClick={() => window.open(link, '_blank')}
    icon="assets/images/ic-view-more.png"
  >
    {getButtonText(action, type)}
  </Button>
);

VisitSiteButton.propTypes = {
  link: PropTypes.string.isRequired,
  action: PropTypes.number.isRequired,
  type: PropTypes.string.isRequired,
};

export default VisitSiteButton;
