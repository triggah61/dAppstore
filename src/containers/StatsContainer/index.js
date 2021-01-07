import React, { useEffect } from 'react';
import { connect as rrconnect } from 'react-redux';

import Stats from '~/components/Stats';
import SectionAlert from '~/components/Common/SectionAlert';
import Loader from '~/components/Common/Loader';

const StatsContainer = props => {
  const { appId, appType, onFetch, stats, fetching, onClear } = props;

  useEffect(() => {
    // clear before fetching
    onClear();
    onFetch(appType, appId);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [appId, appType]);

  return (
    <Loader
      height={!stats ? '15rem' : '31.25rem'}
      xsHeight="18.75rem"
      loading={!fetching}
    >
      {!fetching && !!stats ? (
        <Stats stats={stats} />
      ) : (
        <SectionAlert>No Stats yet.</SectionAlert>
      )}
    </Loader>
  );
};

export const connect = ({ actions, selectors }) => {
  const mapStateToProps = state => {
    return {
      stats: selectors.stats(state),
      status: selectors.status(state),
      error: selectors.error(state),
      fetching: selectors.fetching(state),
    };
  };

  const mapDispatchToProps = {
    onFetch: actions.fetchStats,
    onClear: actions.clearStats,
  };

  return rrconnect(mapStateToProps, mapDispatchToProps)(StatsContainer);
};
