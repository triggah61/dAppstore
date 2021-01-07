import React from 'react';
import { Redirect } from '@reach/router';
import { connect as rrconnect } from 'react-redux';

import ResetPasswordForm from '~/components/ResetPasswordForm';

const ResetPasswordContainer = props => {
  const { messageType } = props;

  return messageType === 'success' ? (
    <Redirect to="/reset-password-success" noThrow />
  ) : (
    <ResetPasswordForm {...props} />
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
    onSubmit: actions.resetPassword,
  };

  return rrconnect(mapStateToProps, mapDispatchToProps)(ResetPasswordContainer);
};

export default ResetPasswordContainer;
