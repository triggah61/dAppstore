import React from 'react';
import { SessionContext } from 'contexts/sessionContext';

import SectionAlert from 'components/Common/SectionAlert';

import Percentage from './Percentage';
import Reviews from './Reviews';
import ReviewForm from './ReviewForm';

import * as SC from './AppReviews.styled';

const AppReviews = props => {
  const { reviews } = props;
  const filteredReviews = reviews && reviews.filter(r => !r.by_dnet);
  const reviewFormProps = { ...props };
  delete reviewFormProps.reviews;
  delete reviewFormProps.onFetchReviews;

  return (
    <SC.ReviewWrapper>
      <div className="container">
        <div className="row">
          <div className="col">
            <SC.Title>Reviews</SC.Title>
            <Percentage reviews={filteredReviews} />
            <SessionContext.Consumer>
              {({ userProfile, isLogin, isAdmin }) => (
                <>
                  <Reviews isAdmin={isAdmin} reviews={filteredReviews} />
                  {isLogin ? (
                    <ReviewForm
                      userProfile={userProfile}
                      {...reviewFormProps}
                    />
                  ) : (
                    <SC.AlertWrapper>
                      <SectionAlert>
                        Please login to make a review.
                      </SectionAlert>
                    </SC.AlertWrapper>
                  )}
                </>
              )}
            </SessionContext.Consumer>
          </div>
        </div>
      </div>
    </SC.ReviewWrapper>
  );
};

export default AppReviews;
