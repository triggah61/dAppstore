import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Swiper from 'react-id-swiper';
import { Pagination, Autoplay } from 'swiper/dist/js/swiper.esm';

import SectionAlert from 'components/Common/SectionAlert';
import assets from 'utils/assets';
import SlidesMain from './Slides/Main';
import SlidesCentered from './Slides/Centered';
import SlidesScreenshot from './Slides/Screenshot';
import * as SC from './styled';
import 'react-id-swiper/lib/styles/css/swiper.css';

/**
 * Type of slides
 */
export const MAIN = 'main';
export const CENTERED = 'centered';
export const SCREENSHOT = 'screenshot';
const SLIDER_TIMER = 25000;

export const SLIDER_SETTING = {
  [MAIN]: {
    height: '50rem',
    xsHeight: '37.5rem',
  },
  [CENTERED]: {
    height: '35rem',
    xsHeight: undefined,
  },
};

const handleMouseEnter = swiper => {
  swiper && swiper.autoplay.stop();
};

const handleMouseLeave = swiper => {
  swiper && swiper.autoplay.start();
};

const Slider = ({
  slideItems,
  type = MAIN,
  autoplay,
  showThumbnail = false,
  ...rest
}) => {
  const hasThumbnail = type === MAIN && showThumbnail;

  const [swiper, updateSwiper] = useState(null);

  const isMain = type === MAIN;
  const isScreenshot = type === SCREENSHOT;

  // Slider default settings
  const sliderParams = {
    modules: [Pagination, Autoplay],
    slidesPerView: isMain ? 1 : 'auto',
    centeredSlides: true,
    autoplay: {
      delay: autoplay || SLIDER_TIMER,
      disableOnInteraction: false,
    },
    pagination: {
      el: `.swiper-pagination`,
      clickable: true,
      renderBullet: (index, className) => {
        const thumbImage =
          !isScreenshot &&
          showThumbnail &&
          slideItems[index] &&
          (slideItems[index].thumbnail || slideItems[index].banner);
        return `
          <div class="${showThumbnail ? 'has-thumbnail' : ''} ${className}">
            <div class="thumb" style="background-image: url('${thumbImage}');"></div>
          </div>`;
      },
    },
    speed: 800,
    loop: true,
    spaceBetween: 0,
  };

  const goNext = () => {
    if (swiper !== null) {
      swiper.slideNext();
    }
  };

  const goPrev = () => {
    if (swiper !== null) {
      swiper.slidePrev();
    }
  };

  if (slideItems.length === 0) {
    return <SectionAlert>Empty slides.</SectionAlert>;
  }

  if (!!slideItems[0].path && type !== SCREENSHOT) {
    return (
      <SectionAlert>
        Slides invalid. Maybe Change the slide `type`.
      </SectionAlert>
    );
  }

  return (
    <SC.SliderWrapper
      isMain={isMain}
      showThumbnail={
        hasThumbnail
      } /* Ensures that the thumbnail will only show on main type */
      type={type}
      onMouseEnter={() => handleMouseEnter(swiper)}
      onMouseLeave={() => handleMouseLeave(swiper)}
    >
      <Swiper {...sliderParams} getSwiper={updateSwiper}>
        {slideItems.map((item, i) => (
          <div key={i}>
            {(() => {
              // BUGGY!!!
              switch (type) {
                case CENTERED:
                  return <SlidesCentered {...rest} {...item} />;
                case SCREENSHOT:
                  return <SlidesScreenshot path={item.path} />;
                default:
                return <SlidesMain {...rest} {...item} />;
              }
            })()}
          </div>
        ))}
      </Swiper>
      <SC.Control type={type} onClick={goPrev}>
        <img src={assets`images/ic-vs-arrow-left.png`} alt="Previous" />
      </SC.Control>
      <SC.Control type={type} isNext onClick={goNext}>
        <img src={assets`images/ic-vs-arrow-right.png`} alt="Next" />
      </SC.Control>
    </SC.SliderWrapper>
  );
};

Slider.propTypes = {
  slideItems: PropTypes.array.isRequired,
  type: PropTypes.oneOf([MAIN, CENTERED, SCREENSHOT]),
  showThumbnail: PropTypes.bool,
};

export default Slider;
