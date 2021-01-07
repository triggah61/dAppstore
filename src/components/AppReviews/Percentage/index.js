import React from 'react';
import * as SC from './styled';

import ReviewStars from '../ReviewStars';

const setPercentage = value => {
  if (value % 1 === 0) {
    return value;
  }
  return parseFloat(value).toFixed(1);
};
export default ({ reviews }) => {
  const reviewsObjKeys = reviews && Object.keys(reviews);

  // get total reviews
  const totalReviews = reviewsObjKeys && reviewsObjKeys.length;

  // get average reviews from star
  const averageReviews =
    reviewsObjKeys &&
    reviewsObjKeys.reduce((sum, item) => {
      return sum + reviews[item].rating;
    }, 0) / totalReviews;

  // get each star count from review
  const getStarCounts = Array(5)
    .fill('star')
    .map((item, i) => {
      return {
        [item]: i + 1,
        count:
          reviewsObjKeys &&
          reviewsObjKeys.filter(item => reviews[item].rating === i + 1).length,
      };
    });

  // get highest count of rating
  const highestRatingCount = Math.max(...getStarCounts.map(c => c.count));

  // convert star counts to percentage
  const countToPercentage = getStarCounts.map(item => {
    return {
      ...item,
      percent: `${(item.count / highestRatingCount) * 100}%`,
    };
  });

  return reviews && reviews.length > 0 ? (
    <SC.ReviewStatsWrapper>
      <SC.ReviewStatsInner>
        <SC.AverageWrapper>
          <p>{averageReviews ? setPercentage(averageReviews) : 0}</p>
          <ReviewStars value={averageReviews} />
          <span>
            {totalReviews}
            <i className="fas fa-user" />
          </span>
        </SC.AverageWrapper>
        <SC.ProgressWrapper>
          {countToPercentage.reverse().map(item => (
            <SC.progress key={item.star}>
              <span>{item.star}</span>
              <SC.ProgressPercent percent={item.percent} />
            </SC.progress>
          ))}
        </SC.ProgressWrapper>
      </SC.ReviewStatsInner>
    </SC.ReviewStatsWrapper>
  ) : null;
};
