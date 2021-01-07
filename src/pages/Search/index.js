import React from 'react';

import { actions, selectors } from 'modules/apps';
import { connect } from '~/containers/SearchContainer';
import ContentContainer from '~/components/Common/ContentContainer';

const SearchContainer = connect({ actions, selectors });

export default props => (
  <ContentContainer>
    <SearchContainer {...props} />
  </ContentContainer>
);
