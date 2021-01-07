import React from 'react';

import { actions, selectors } from 'modules/session';
import { connect } from '~/containers/LoginContainer';

const LoginContainer = connect({ actions, selectors });

export default () => <LoginContainer />;
