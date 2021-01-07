import React from 'react';
import { EditorState, convertFromRaw } from 'draft-js';
import { Editor } from 'react-draft-wysiwyg';

import IconAndLinks from 'components/Common/IconAndLinks';
import Slider, { SCREENSHOT } from 'components/Common/Slider';
import VisitSiteButton from 'components/Common/VisitSiteButton';
import ReviewStars from 'components/AppReviews/ReviewStars';
import stripHtml from 'string-strip-html';

import * as SC from './styled';

const extractDnetReview = reviews => {
  const filtered = reviews && reviews.filter(r => r.by_dnet);
  if (filtered && filtered.length) {
    const { title, message, rating } = filtered[0];
    const fromRaw = convertFromRaw(JSON.parse(message));
    const editorState = fromRaw
      ? EditorState.createWithContent(fromRaw)
      : new EditorState.createEmpty();
    return { title, editorState, rating };
  }
  return null;
};
const AppDetails = ({ appDetails }) => {
  const {
    name,
    banner,
    banner_mobile: bannerMobile,
    description,
    website,
    twitter,
    weibo,
    telegram,
    discord,
    screenshots,
    action,
    type,
    reviews,
  } = appDetails;

  const dnetReview = extractDnetReview(reviews);

  const formatedName = name.toLowerCase().replace(/[^\w\s]| /gi, '-');

  return (
    <SC.AppDetailsWrapper>
      <SC.Section_01 bg={banner} bg_mb={bannerMobile}>
        <div className="container">
          <div className="row">
            <div className="col-12 d-flex align-items-center col-wrapper">
              <SC.Section_01_H1 className={formatedName}>
                {name}
              </SC.Section_01_H1>
            </div>
          </div>
        </div>
      </SC.Section_01>
      {screenshots.length > 0 && (
        <SC.SliderContainer>
          <Slider slideItems={screenshots} type={SCREENSHOT} />
        </SC.SliderContainer>
      )}
      <SC.Section_02>
        <div className="container">
          <div className="row">
            <div className="col-12 title">
              <SC.Title>{name}</SC.Title>
            </div>
            <div className="col-12 col-md-9">
              <SC.Desc>{stripHtml(description)} </SC.Desc>
            </div>
            <div className="col-12 col-md-3">
              <SC.WrapperLink>
                <VisitSiteButton link={website} action={action} type={type} />
              </SC.WrapperLink>
            </div>
          </div>
          <IconAndLinks
            twitter={twitter}
            weibo={weibo}
            telegram={telegram}
            discord={discord}
            isColumn={false}
          />
        </div>
      </SC.Section_02>
      {dnetReview && (
        <SC.Section_02>
          <div className="container">
            <SC.ReviewTitle>{dnetReview.title}</SC.ReviewTitle>
            <Editor editorState={dnetReview.editorState} readOnly />
            <SC.ReviewRating>
              <span>Rating:</span>
              <ReviewStars value={dnetReview.rating} />
            </SC.ReviewRating>
          </div>
        </SC.Section_02>
      )}
    </SC.AppDetailsWrapper>
  );
};

export default AppDetails;
