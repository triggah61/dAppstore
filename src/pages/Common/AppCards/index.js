import React from 'react';

import { actions, selectors } from 'modules/apps';
import { connect } from '~/containers/AppCardsContainer';

const AppCardsContainer = connect({ actions, selectors });

export default props => <AppCardsContainer {...props} />;
