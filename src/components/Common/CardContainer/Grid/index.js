import React, { useState, useEffect } from 'react';
import Scroll from 'react-scroll';

import Card from '~/components/Common/Card';
import Button from '~/components/Common/Button';

import * as SC from './styled';

const { Element } = Scroll;
const { scroller } = Scroll;
const PER_PAGE_COUNT = 3;

export default props => {
  const { showMore = true, currentAppId } = props;
  const appLength = props.apps.length;
  const [noData, setNoData] = useState(false);
  const [page, setPage] = useState(1);
  const currentPageItems = page * PER_PAGE_COUNT;
  const isOdd = appLength % 2 === 1;

  useEffect(() => {
    setNoData(currentPageItems >= appLength);

    if (page > 1) {
      scroller.scrollTo('moreButtonWrapper', {
        duration: 1000,
        delay: 50,
        smooth: true,
        offset: -window.innerHeight / 1.5,
      });
    }
  }, [page, currentPageItems, appLength]);

  useEffect(() => {
    if (currentAppId) {
      setPage(1);
    }
  }, [currentAppId]);

  const onLoadeMoreClick = () => {
    setPage(page + 1);
  };

  return (
    <SC.Wrapper>
      {Array(page)
        .fill('')
        .map((_, i) => {
          const index = i * PER_PAGE_COUNT;
          return (
            <RenderApps
              key={i}
              apps={props.apps}
              isOdd={isOdd}
              start={index}
              end={index + PER_PAGE_COUNT}
              hideLinks={props.hideLinks}
              currentAppId={currentAppId}
            />
          );
        })}
      {showMore && (
        <Element name="moreButtonWrapper">
          <SC.ButtonWrapper>
            {showMore && !noData && (
              <Button onClick={onLoadeMoreClick} isLight>
                more
              </Button>
            )}
          </SC.ButtonWrapper>
        </Element>
      )}
    </SC.Wrapper>
  );
};

const RenderApps = ({ apps, start, end, hideLinks, currentAppId, isOdd }) => {
  const [show, setShow] = useState(false);
  useEffect(() => {
    setShow(true);
  }, [show]);

  return (
    <SC.AppRow show={show} className="row">
      {apps
        .filter(app => app.id !== parseInt(currentAppId))
        .slice(start, end)
        .map((offer, i) => (
          <Card
            key={i}
            {...offer}
            cols={`${
              isOdd && i === 0 && start === 0 ? 'col-12' : 'col-6'
            } col-sm-6 col-lg-4`}
            isFullBanner
            hideDesc
            contentHeight="22.5rem"
            contentXsHeight="11.875rem"
            hideLinks={hideLinks}
          />
        ))}
    </SC.AppRow>
  );
};
