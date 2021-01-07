import React from 'react';

import { actions, selectors } from 'modules/apps';
import { connect } from '~/containers/RankingsContainer';

const RankingsContainer = connect({ actions, selectors });

export default props => <RankingsContainer {...props} />;
