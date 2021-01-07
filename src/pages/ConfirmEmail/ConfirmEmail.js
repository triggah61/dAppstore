import React from 'react';

import ContentContainer from 'components/Common/ContentContainer';

import { connect } from 'containers/ConfirmEmailContainer';
import { actions, selectors } from './modules';

const ConfirmEmailContainer = connect({ actions, selectors });

const ConfirmEmail = props => (
  <ContentContainer>
    <ConfirmEmailContainer {...props} />
  </ContentContainer>
);

export default ConfirmEmail;
