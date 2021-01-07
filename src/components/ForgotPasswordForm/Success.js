import React from 'react';

import * as SC from './Success.styled';

const Title = () => <h1>Reset Link Sent</h1>;

const Success = () => {
  return (
    <SC.Container>
      <div>
        <Title />
        <p>
          We have sent an email with a reset link to your email address.
          {/*  <Link to="/">resend</Link> email Confirmation.. */}
        </p>
      </div>
    </SC.Container>
  );
};

export default Success;
