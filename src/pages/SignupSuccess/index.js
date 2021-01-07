import React from 'react';
import { actions, selectors } from 'pages/Signup/modules';
import { connect } from '~/containers/SignupSuccessContainer';
import ContentContainer from '~/components/Common/ContentContainer';

const SignupSuccessContainer = connect({ actions, selectors });

export default () => (
  <ContentContainer>
    <SignupSuccessContainer />
  </ContentContainer>
);
