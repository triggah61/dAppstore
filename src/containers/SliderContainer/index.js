import React, { useEffect, useContext } from 'react';
import { connect as rrconnect } from 'react-redux';

import { SessionContext } from 'contexts/sessionContext';
import { IS_DEV_STAGING } from 'constants/config';
import { createKey } from '~/utils';
import Slider, { SLIDER_SETTING, MAIN } from '~/components/Common/Slider';
import Loader from '~/components/Common/Loader';

const SliderContainer = props => {
  const { userId } = useContext(SessionContext);
  const { customSlide, postCustomSlide = [] } = props;
  const key = createKey(props.type, props.tag);

  useEffect(() => {
    props.onFetch(props.type, props.tag, key, userId);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [userId]);

  // Get fetchedApps for the current slider from props.
  const fetchedApps = props.fetchedApps && props.fetchedApps[key];
  const fetching = props.fetching && props.fetching[key];
  const slideSetting = SLIDER_SETTING[props.slideType || MAIN];
  if (fetchedApps) {
    // adding type of app
    fetchedApps.forEach(app => {
      app.type = props.type;
    });
  }

  let allApps = fetchedApps;

  if (!!customSlide && fetchedApps) {
    allApps = [...customSlide, ...fetchedApps, ...postCustomSlide];
    // allApps = customSlide.concat(fetchedApps);
  }

  const moveObject = (arr, targetKey, targetValue, newIndex) => {
    const target = arr.find(value => value[targetKey] === targetValue);
    if (target !== undefined) {
      const newArray = arr.filter(value => value[targetKey] !== targetValue);
      newArray.splice(newIndex, 0, target);
      return newArray;
    }
    return allApps;
  };

  const tarValue = IS_DEV_STAGING ? 65 : 64;

  if (allApps) {
    allApps = moveObject(allApps, 'id', tarValue, 1);
  }

  return (
    <Loader
      height={slideSetting.height}
      xsHeight={slideSetting.xsHeight}
      backgroundColor={props.backgroundColor}
      loading={!fetching}
    >
      {!fetching && (
        <Slider
          hideLinks={props.hideLinks}
          showThumbnail={props.showThumbnail}
          slideItems={allApps || []}
          type={props.slideType}
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

  return rrconnect(mapStateToProps, mapDispatchToProps)(SliderContainer);
};
