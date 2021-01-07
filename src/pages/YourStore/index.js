import React from 'react';

import { actions, selectors } from './modules';
import { connect } from '~/containers/YourStoreContainer';

const YourStoreContainer = connect({ actions, selectors });

export default props => <YourStoreContainer {...props} />;
