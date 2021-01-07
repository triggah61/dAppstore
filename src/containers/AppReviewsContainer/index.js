import React, { useEffect, useContext } from 'react';
import { connect as rrconnect } from 'react-redux';

import AppReviews from '~/components/AppReviews';
import Loader from '~/components/Common/Loader';
import { SessionContext } from 'contexts/sessionContext';

const AppReviewsContainer = props => {
  const { userId } = useContext(SessionContext);
  const { appType, appId, fetching, claerReviews } = props;

  useEffect(() => {
    claerReviews();
    props.onFetchReviews(appType, appId, userId || 0);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [userId, appId, appType]);

  return (
    <Loader height="37.5rem" loading={!fetching}>
      {!fetching && <AppReviews {...props} />}
    </Loader>
  );
};
export const connect = ({ actions, selectors }) => {
  const mapStateToProps = state => {
    return {
      reviews: selectors.reviews(state),
      addStatus: selectors.addStatus(state),
      submitting: selectors.submitting(state),
      fetching: selectors.fetching(state),
      reviewStatus: selectors.reviewStatus(state),
      reviewId: selectors.reviewId(state),
      message: selectors.message(state),
      error: selectors.error(state),
    };
  };

  const mapDispatchToProps = {
    onFetchReviews: actions.fetchAppReviews,
    addReview: actions.addAppReview,
    claerReviews: actions.cleaAppReviews,
  };

  return rrconnect(mapStateToProps, mapDispatchToProps)(AppReviewsContainer);
};

export default AppReviewsContainer;
