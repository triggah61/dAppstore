import React from 'react';
import StarRating from '~/components/Common/StarRating';

export default props => (
  <StarRating
    starColor="#749cc6"
    emptyStarColor="#345888"
    name="defaultStarRatingName"
    starCount={5}
    value={props.value}
    editing={props.editing || false}
  />
);
