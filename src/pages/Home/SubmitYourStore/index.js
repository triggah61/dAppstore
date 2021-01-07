import React from 'react';

import Button from 'components/Common/Button';
import * as SC from './styled';

const SubmitYourStore = () => (
  <SC.Container>
    <SC.Content>
      <h1>Register Dapp</h1>
      <p>Register your DApps, Apps, Games to dAppstore</p>
      <Button icon="assets/images/ic-view-more.png" link="/your-store">
        Register
      </Button>
    </SC.Content>
  </SC.Container>
);

export default SubmitYourStore;
