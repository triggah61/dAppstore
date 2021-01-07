import React from 'react';

import * as SC from './styled';
import Card from '~/components/Common/Card';

export default props => (
  <SC.Container>
    <Card
      isFullBanner
      cols="col-12"
      contentHeight="27.5rem"
      hideDesc
      {...props}
    />
  </SC.Container>
);
