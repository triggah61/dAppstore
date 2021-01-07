import React from 'react';

import { TAGS, CATEGORIES } from 'constants/config';
import Slider from '../Common/Slider';
import AppCards from '../Common/AppCards';
import { CENTERED } from '~/components/Common/Slider';
import ContentContainer from '~/components/Common/ContentContainer';

export default () => (
  <ContentContainer>
    <Slider
      type={CATEGORIES.NEWS}
      tag={TAGS.TOP_SLIDER}
      hideLinks
      slideType={CENTERED}
    />
    <AppCards type={CATEGORIES.NEWS} tag={TAGS.FIXED} fixed reverse hideLinks />
    <AppCards type={CATEGORIES.NEWS} tag={TAGS.GRID} />
  </ContentContainer>
);
