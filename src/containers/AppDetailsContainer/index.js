import React, { useEffect } from 'react';
import { connect as rrconnect } from 'react-redux';
import { Redirect } from '@reach/router';
import { APPROVED } from 'constants/config';
import AppDetails from '~/components/AppDetails';
import Loader from '~/components/Common/Loader';

const AppDetailsContainer = props => {
  const {
    appId,
    appType,
    appDetails,
    error,
    onFetch,
    onClear,
    reviews,
    userProfile: { isAdmin },
  } = props;

  useEffect(() => {
    onFetch(appType, appId);
    window.scrollTo(0, 0);
    return () => onClear();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [appId]);

  if (error || (!isAdmin && appDetails && appDetails.status !== APPROVED)) {
    return <Redirect to="404" noThrow />;
  }

  // adding app type
  if (appDetails) {
    appDetails.type = appType;
    appDetails.reviews = reviews;
  }

  return (
    <Loader height="81.25rem" loading={appDetails}>
      <AppDetails appDetails={appDetails || []} />
    </Loader>
  );
};

export const connect = ({ actions, selectors }) => {
  const mapStateToProps = state => {
    return {
      appDetails: selectors.appDetails(state),
      error: selectors.error(state),
      status: selectors.status(state),
      reviews: state.reviewsReducer.reviews, // TODO: should pass the selector instead. For some reason it doesn't work
    };
  };

  const mapDispatchToProps = {
    onFetch: actions.fetchAppDetails,
    onClear: actions.clearAppDetails,
  };

  return rrconnect(mapStateToProps, mapDispatchToProps)(AppDetailsContainer);
};

export default AppDetailsContainer;
