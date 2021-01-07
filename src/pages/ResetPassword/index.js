import React from 'react';

import { actions, selectors } from './modules';
import { connect } from '~/containers/ResetPasswordContainer';

const ResetPasswordContainer = connect({ actions, selectors });

export default props => <ResetPasswordContainer {...props} />;
