import React, { useEffect, useContext } from 'react';
import { connect as rrconnect } from 'react-redux';

import { createKey, getContainerSetting } from '~/utils';
import CardsContainer from '~/components/Common/CardContainer';
import Loader from '~/components/Common/Loader';
import { SessionContext } from 'contexts/sessionContext';

const AppCardsContainer = props => {
  const { userId } = useContext(SessionContext);
  const { currentAppId } = props;
  const key = createKey(props.type, props.tag);

  useEffect(() => {
    props.onFetch(props.type, props.tag, key, userId);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [userId]);

  // Get fetchedApps for the current slider from props.
  const fetchedApps = props.fetchedApps && props.fetchedApps[key];
  const fetching = props.fetching && props.fetching[key];
  const containerSetting = getContainerSetting(props.type, props.tag);
  if (fetchedApps) {
    // adding type of app
    fetchedApps.forEach(app => {
      app.type = props.type;
    });
  }

  if (props.noBg) {
    containerSetting.bg = '';
  }

  return (
    <Loader
      height={containerSetting.height}
      xsHeight={containerSetting.xsHeight}
      loading={!fetching}
    >
      {!fetching && (
        <CardsContainer
          {...containerSetting}
          currentAppId={currentAppId}
          apps={fetchedApps || []}
          reverse={props.reverse}
          fixed={props.fixed}
          showMore={props.showMore}
          hideLinks={props.hideLinks}
        />
      )}
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

  return rrconnect(mapStateToProps, mapDispatchToProps)(AppCardsContainer);
};
