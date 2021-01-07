import React from 'react';

import ContentContainer from 'components/Common/ContentContainer';
import * as SC from './styled';

export default function ShowError({ errorHeading, errorSubheading }) {
  return (
    <ContentContainer>
      <SC.Container>
        <div>
          <img src="assets/images/app-logo.png" alt="" />
          <h1>{errorHeading}</h1>
          <p>{errorSubheading}</p>
        </div>
      </SC.Container>
    </ContentContainer>
  );
}
