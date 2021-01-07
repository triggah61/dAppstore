import React from 'react';

import { actions, selectors } from './modules';
import { connect } from '~/containers/ForgotPasswordContainer';

const ForgotPasswordContainer = connect({ actions, selectors });

export default () => <ForgotPasswordContainer />;
