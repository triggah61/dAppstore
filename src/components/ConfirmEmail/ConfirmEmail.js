import React from 'react';
import { Link } from '@reach/router';

import * as SC from './styled';

const ConfirmEmail = ({ error, status }) => (
  <SC.Container>
    <div>
      <h1>Email Confirmation.</h1>;
      <p>
        {status !== 200 ? (
          error
        ) : (
          <>
            Your email is confirmed. Please proceed to login
            <Link to="login">page</Link>
          </>
        )}
        .{' '}
      </p>
    </div>
  </SC.Container>
);

export default ConfirmEmail;
