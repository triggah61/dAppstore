import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';

import { SESSION_ID } from 'constants/config';
import {
  loginSuccess,
  loginFailure,
  logoutSuccess,
  relogin,
} from 'modules/session/actions';
import { userProfile } from 'modules/session/selectors';
import { SessionContext } from 'contexts/sessionContext';
import { loadSession, purgeSession, saveSession } from './session/localStorage';

export default function withSession() {
  return WrappedComponent => {
    const WithSession = props => {
      const allProps = { ...props };
      delete allProps.userProfile;
      const localSession = loadSession(SESSION_ID);
      const [session, setSession] = useState(localSession);
      const { loginSuccess, logoutSuccess, userProfile, relogin } = props;

      // get local storage data
      useEffect(() => {
        // add localSession in reuducer
        loginSuccess(localSession);
        setSession(localSession);
        // eslint-disable-next-line react-hooks/exhaustive-deps
      }, [userProfile.id]);

      // update token
      useEffect(() => {
        // update local storage
        saveSession(SESSION_ID, userProfile);
        // update context
        setSession(userProfile);
        // update reducer
        loginSuccess(userProfile);
        // eslint-disable-next-line react-hooks/exhaustive-deps
      }, [userProfile.token]);

      const clearStorageOnLogout = () => {
        saveSession('cartItems', []);
      };

      return (
        <SessionContext.Provider
          value={{
            userProfile: session,
            isLogin: session && !!session.token,
            userId: session ? session.id : 0,
            isAdmin: session && session.isAdmin,
            relogin,
            updateSession: account => {
              const updatedSession = {
                ...session,
                first_name: account.first_name,
                last_name: account.last_name,
                newsletter: account.newsletter,
                two_factor_auth: account.two_factor_auth,
              };
              // update local storage
              saveSession(SESSION_ID, updatedSession);
              // update context
              setSession(updatedSession);
              // update reducer
              loginSuccess(updatedSession);
            },
            logout: () => {
              // remove local storage value
              purgeSession(SESSION_ID);
              // update context
              setSession(null);
              // remove reducer value
              logoutSuccess();
              // clear cart
              clearStorageOnLogout();
            },
          }}
        >
          <WrappedComponent {...props} />
        </SessionContext.Provider>
      );
    };

    const mapStateToProps = state => {
      return {
        userProfile: userProfile(state),
      };
    };

    const mapDispatchToProps = {
      loginSuccess,
      logoutSuccess,
      loginFailure,
      relogin,
    };

    const WithSessionConnected = connect(
      mapStateToProps,
      mapDispatchToProps
    )(WithSession);

    return WithSessionConnected;
  };
}
