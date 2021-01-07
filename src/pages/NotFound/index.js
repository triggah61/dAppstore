import React from 'react';

import { Link } from '@reach/router';
import ContentContainer from 'components/Common/ContentContainer';
import * as SC from './styled';

const NotFound = () => (
  <ContentContainer>
    <SC.Container>
      <div>
        <img src="assets/images/app-logo.png" alt="App Logo" />
        <h1>404 Page not Found.</h1>
        <p>The page you requested could not be found</p>
        <p>
          <small>
            Return to <Link to="/">Home</Link>
          </small>
        </p>
      </div>
    </SC.Container>
  </ContentContainer>
);

export default NotFound;
