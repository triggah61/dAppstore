import React from 'react';

import { actions, selectors } from './modules';
import { connect } from '~/containers/AppDetailsContainer';

const AppDetailsContainer = connect({ actions, selectors });

export default props => <AppDetailsContainer {...props} />;
