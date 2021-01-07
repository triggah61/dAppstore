import React from 'react';
import { Redirect } from '@reach/router';

import * as SC from './styled';
import Loader from '~/components/Common/Loader';
import { SessionContext } from 'contexts/sessionContext';

export default props => {
  const { children } = props;

  return (
    <SessionContext.Consumer>
      {({ userProfile, isLogin }) =>
        isLogin ? (
          <Loader height="100vh" loading={!!userProfile}>
            {!!userProfile && (
              <SC.AuthPageContainer>
                {React.cloneElement(children, {
                  children: React.Children.map(
                    children.props.children,
                    child => {
                      console.log(userProfile);
                      return React.cloneElement(child, { userProfile });
                    }
                  ),
                })}
              </SC.AuthPageContainer>
            )}
          </Loader>
        ) : (
            <Redirect to="/login" noThrow />
          )
      }
    </SessionContext.Consumer>
  );
};
