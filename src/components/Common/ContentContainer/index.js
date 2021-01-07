import React from 'react';
import PropTypes from 'prop-types';

import * as SC from './styled';

const Section04BG = 'assets/images/section_04_bg.png';

const PageContainer = ({ children, bg, noWhiteSpace }) => (
  <SC.Container noWhiteSpace={noWhiteSpace} bg={bg || Section04BG}>
    {children}
  </SC.Container>
);

const Wrapper = ({ children, fullWidth }) => (
  <SC.Wrapper isFullWidth={fullWidth}>{children}</SC.Wrapper>
);

PageContainer.propTypes = {
  children: PropTypes.node.isRequired,
  bg: PropTypes.string,
  fullWidth: PropTypes.bool,
};

PageContainer.Wrapper = Wrapper;

export default PageContainer;
