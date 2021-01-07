import React from 'react';
import PropTypes from 'prop-types';

import * as SC from './styled';

const SectionTitle = ({ children }) => <SC.H1>{children}</SC.H1>;

SectionTitle.propTypes = {
  children: PropTypes.node.isRequired,
};

export default SectionTitle;
