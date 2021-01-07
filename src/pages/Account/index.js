import React from 'react';

import { actions, selectors } from './modules';
import { connect } from '~/containers/AccountContainer';

const AccountContainer = connect({ actions, selectors });

export default () => <AccountContainer />;
