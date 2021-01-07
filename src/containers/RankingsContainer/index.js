import React, { useEffect, useContext } from 'react';
import { connect as rrconnect } from 'react-redux';

import { CATEGOIES_TO_ARRAY } from 'constants/config';
import Rankings from '~/components/Rankings';
import { isEmpty } from '~/utils';
import Loader from '~/components/Common/Loader';
import { SessionContext } from 'contexts/sessionContext';

const RankingsContainer = props => {
  const { fetchStatus, fetchedApps } = props;
  const { userId } = useContext(SessionContext);

  useEffect(() => {
    CATEGOIES_TO_ARRAY.map(type => props.onFetch(type.value, '', '', userId));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [userId]);

  // combined all fetch apps
  const allApps =
    !isEmpty(fetchStatus) &&
    Object.keys(fetchStatus).reduce((arrays, key) => {
      if (fetchStatus[key] === 200) {
        return arrays.concat(
          fetchedApps[key].map(app => {
            return {
              ...app,
              type: key, // add type of dapp as category key
            };
          })
        );
      }
      return {};
    }, []);

  return (
    <Loader height="80vh" loading={!isEmpty(fetchStatus)}>
      <Rankings allApps={allApps} />
    </Loader>
  );
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

  return rrconnect(mapStateToProps, mapDispatchToProps)(RankingsContainer);
};
