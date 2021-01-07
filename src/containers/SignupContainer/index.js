import React from 'react';
import { connect as rrconnect } from 'react-redux';
import { Redirect } from '@reach/router';

import SignupForm from 'components/SignupForm';
import { SessionContext } from 'contexts/sessionContext';

const SignupContainer = props => {
  const { signupStatus } = props;

  if (signupStatus === 201) {
    return <Redirect to="/signup-success" noThrow />;
  }

  return (
    <SessionContext.Consumer>
      {({ isLogin }) =>
        isLogin ? <Redirect to="/" noThrow /> : <SignupForm {...props} />
      }
    </SessionContext.Consumer>
  );
};

export const connect = ({ actions, selectors }) => {
  const mapStateToProps = state => {
    return {
      signupStatus: selectors.signupStatus(state),
      submitting: selectors.submitting(state),
      error: selectors.error(state),
      message: selectors.message(state),
    };
  };

  const mapDispatchToProps = {
    onSubmit: actions.signup,
  };

  return rrconnect(mapStateToProps, mapDispatchToProps)(SignupContainer);
};

export default SignupContainer;
