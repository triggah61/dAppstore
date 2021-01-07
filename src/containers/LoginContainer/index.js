import React from 'react';
import { connect as rrconnect } from 'react-redux';
import { Redirect } from '@reach/router';

import { SessionContext } from 'contexts/sessionContext';
import LoginForm from '~/components/LoginForm';

const LoginContainer = props => (
  <SessionContext.Consumer>
    {({ isLogin }) =>
      isLogin ? <Redirect to="/" noThrow /> : <LoginForm {...props} />
    }
  </SessionContext.Consumer>
);

export const connect = ({ actions, selectors }) => {
  const mapStateToProps = state => {
    return {
      submitting: selectors.submitting(state),
      loginStatus: selectors.loginStatus(state),
      error: selectors.error(state),
    };
  };

  const mapDispatchToProps = {
    onLogin: actions.login,
  };

  return rrconnect(mapStateToProps, mapDispatchToProps)(LoginContainer);
};

export default LoginContainer;
