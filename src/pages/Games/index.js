import React from 'react';

import { TAGS, CATEGORIES } from 'constants/config';
import Slider from '../Common/Slider';
import AppCards from '../Common/AppCards';
import { CENTERED } from '~/components/Common/Slider';
import ContentContainer from '~/components/Common/ContentContainer';

export default () => (
  <ContentContainer>
    <Slider
      type={CATEGORIES.GAMES}
      tag={TAGS.TOP_SLIDER}
      slideType={CENTERED}
    />
    <AppCards type={CATEGORIES.GAMES} tag={TAGS.FIXED} fixed reverse />
    <AppCards type={CATEGORIES.GAMES} tag={TAGS.GRID} />
  </ContentContainer>
);
