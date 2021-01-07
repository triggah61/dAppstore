import React from 'react';

import { actions, selectors } from './modules';
import { connect } from '~/containers/AppReviewsContainer';

const AppReviewsContainer = connect({ actions, selectors });

export default props => <AppReviewsContainer {...props} />;
