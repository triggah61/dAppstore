import React from 'react';
import { Redirect } from '@reach/router';
import { connect as rrconnect } from 'react-redux';

import ForgotPasswordForm from '~/components/ForgotPasswordForm';

const ForgotPasswordContainer = props => {
  const { messageType } = props;

  return messageType === 'success' ? (
    <Redirect to="/forgot-password-success" noThrow />
  ) : (
    <ForgotPasswordForm {...props} />
  );
};

export const connect = ({ actions, selectors }) => {
  const mapStateToProps = state => {
    return {
      submitting: selectors.submitting(state),
      messageType: selectors.messageType(state),
      message: selectors.message(state),
    };
  };

  const mapDispatchToProps = {
    onSubmit: actions.forgotPassword,
  };

  return rrconnect(
    mapStateToProps,
    mapDispatchToProps
  )(ForgotPasswordContainer);
};

export default ForgotPasswordContainer;
