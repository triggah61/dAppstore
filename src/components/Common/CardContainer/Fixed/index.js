import React from 'react';
import PropTypes from 'prop-types';

import Card from '~/components/Common/Card';
import * as SC from './styled';

const FixedContainer = props => {
  const appList = props.apps.slice(0, 5); // ensures that only first 5 will show
  const isReversed = props.reverse;
  const orderedApps = isReversed
    ? appList.sort((a, b) => {
      // reverse sorting
      return b.position - a.position;
    })
    : appList;

  return (
    <SC.Wrapper>
      <SC.Container className="row">
        {orderedApps.map((item, i) => {
          const isMain = i === (isReversed ? 4 : 0);
          return (
            <Card
              key={i}
              isFullBanner={isMain}
              cols={isMain ? 'col-12 col-lg-8' : undefined}
              hideLinks={props.hideLinks}
              {...item}
            />
          );
        })}
      </SC.Container>
    </SC.Wrapper>
  );
};

FixedContainer.propTypes = {
  apps: PropTypes.array.isRequired,
  reverse: PropTypes.bool,
};

export default FixedContainer;
