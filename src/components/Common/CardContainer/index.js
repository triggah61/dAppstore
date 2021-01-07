import React from 'react';
import PropTypes from 'prop-types';

import { CATEGORIES } from 'constants/config';
import SectionTitle from '~/components/Common/SectionTitle';
import SectionAlert from '~/components/Common/SectionAlert';
import Fixed from './Fixed';
import Grid from './Grid';
import * as SC from './styled';

const CardContainer = props => {
  const allProps = { ...props };
  delete allProps.fixed;
  delete allProps.bg;
  delete allProps.height;
  delete allProps.xsHeight;

  const isNews =
    props.apps.length > 0 && props.apps[0].type === CATEGORIES.NEWS;

  // show apps with position key if not news
  if (!isNews) {
    allProps.apps = props.apps.filter(app => !!app.position);
  }

  return (
    <SC.Container
      heightSize={props.height}
      xsHeightSize={props.xsHeight}
      bg={props.bg}
    >
      {props.apps.length !== 0 ? (
        <div className="container">
          {props.title && <SectionTitle>{props.title}</SectionTitle>}
          {props.fixed ? <Fixed {...allProps} /> : <Grid {...allProps} />}
        </div>
      ) : (
        <SectionAlert>No apps found.</SectionAlert>
      )}
    </SC.Container>
  );
};

CardContainer.propTypes = {
  apps: PropTypes.array.isRequired,
  reverse: PropTypes.bool,
  fixed: PropTypes.bool,
  bg: PropTypes.string,
};

export default CardContainer;
