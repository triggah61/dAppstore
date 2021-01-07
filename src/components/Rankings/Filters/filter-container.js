import React from 'react';

import * as SC from './styled';

export default props => (
  <SC.FilterContainer>
    <p>{props.title}</p>
    {props.children}
  </SC.FilterContainer>
);
