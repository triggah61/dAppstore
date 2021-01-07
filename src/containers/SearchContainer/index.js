import React, { useEffect, useContext } from 'react';
import { connect as rrconnect } from 'react-redux';

import { CATEGOIES_TO_ARRAY } from 'constants/config';
import { SessionContext } from 'contexts/sessionContext';
import Search from 'components/Search';

const SearchContainer = props => {
  const { userId } = useContext(SessionContext);

  useEffect(() => {
    CATEGOIES_TO_ARRAY.map(type => props.onFetch(type.value, '', '', userId));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [userId]);

  return <Search {...props} />;
};

export const connect = ({ actions, selectors }) => {
  const mapStateToProps = state => {
    return {
      fetchedApps: selectors.fetchedApps(state),
      error: selectors.error(state),
      fetchStatus: selectors.fetchStatus(state),
      fetching: selectors.fetching(state),
    };
  };

  const mapDispatchToProps = {
    onFetch: actions.fetchApps,
  };

  return rrconnect(mapStateToProps, mapDispatchToProps)(SearchContainer);
};
