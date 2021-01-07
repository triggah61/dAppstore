import React from 'react';

import { actions, selectors } from './modules';
import { connect } from '~/containers/SignupContainer';

const SignupContainer = connect({ actions, selectors });

export default () => <SignupContainer />;
