import React from 'react';
import StarRatingComponent from 'react-star-rating-component';

import * as SC from './styled';

export default props => (
  <SC.StarRatingWrapper editing={props.editing}>
    <StarRatingComponent {...props} />
  </SC.StarRatingWrapper>
);
