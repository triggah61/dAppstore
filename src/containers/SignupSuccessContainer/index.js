import React, { useEffect } from 'react';
import { Redirect } from '@reach/router';
import { connect as rrconnect } from 'react-redux';
import SignupSuccess from '~/components/SignupSuccess';

const SignupSuccessContainer = props => {
  const { signupStatus, onReset } = props;
  useEffect(() => {
    return () => {
      onReset();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return signupStatus && signupStatus === 201 ? (
    <SignupSuccess {...props} />
  ) : (
    <Redirect to="/" noThrow />
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
    onReset: actions.singnupSuccessReset,
  };

  return rrconnect(mapStateToProps, mapDispatchToProps)(SignupSuccessContainer);
};

export default SignupSuccessContainer;
