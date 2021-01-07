import React from 'react';

import { actions, selectors } from './modules';
import { connect } from '~/containers/StatsContainer';

const StatsContainer = connect({ actions, selectors });

export default props => <StatsContainer {...props} />;
