import React from 'react';

import * as SC from './styled';

const Title = () => <h1>Thank you for signing up!</h1>;

export default props => {
  return (
    <SC.Container>
      <div>
        <Title />
        <p>
          We have sent an email with a confirmation link to your email address.
          {/*  <Link to="/">resend</Link> email Confirmation.. */}
        </p>
      </div>
    </SC.Container>
  );
};
