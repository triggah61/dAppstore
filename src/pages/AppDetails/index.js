import React from 'react';

import { TAGS, CATEGORIES } from 'constants/config';
import AppReviews from 'pages/Common/AppReviews';
import AppCards from 'pages/Common/AppCards';
import AppDetails from 'pages/Common/AppDetails';
import ContentContainer from 'components/Common/ContentContainer';
import Stats from 'pages/Common/Stats';
import assets from 'utils/assets';

const SECTION_BG = assets`images/g_text_bg.png`;

const AppDetailsContentContainer = props => (
  <ContentContainer
    noWhiteSpace // removes padding
    bg={SECTION_BG}
  >
    <AppDetails {...props} />
    <Stats {...props} />
    <AppReviews {...props} />
    <AppCards
      currentAppId={props.appId}
      type={CATEGORIES.GAMES}
      tag={TAGS.GRID}
    />
  </ContentContainer>
);

export default AppDetailsContentContainer;
