import React from 'react';
import { Link } from '@reach/router';

import * as SC from './styled';

const Title = () => <h1>Reset Password Successful</h1>;

export default props => {
  return (
    <SC.Container>
      <div>
        <Title />
        <p>
          We have successfully reset your password.{' '}
          <Link to="/login">Login</Link> now.
          {/*  <Link to="/">resend</Link> email Confirmation.. */}
        </p>
      </div>
    </SC.Container>
  );
};
