import React, { useEffect, useState } from 'react';
import clsx from 'clsx';
import ParallaxBanner from 'components/Common/ParallaxBanner';
import assets from 'utils/assets';
import timer from 'utils/timer';
import styles from './PresaleCountdown.module.scss';

const BANNER_IMAGE_ITEMS = [
  {
    img: assets`images/dappstore-preorder/dappstore-cards.png`,
    width: '63%',
    top: '-10%',
    xPos: -100,
    yPos: 60,
    left: '30%',
  },
];

const PresaleCountdown = () => {
  const targetDate = new Date('2020-05-29');
  const [timeLeft, setTimeLeft] = useState(timer(targetDate));

  useEffect(() => {
    const time = setTimeout(() => {
      setTimeLeft(timer(targetDate));
    }, 1000);

    return () => clearTimeout(time);
  }, [targetDate]);

  const timeValueCname = clsx(
    styles.timeValue,
    'sm:ds-px-2 md:ds-px-2 sm:ds-pt-2 md:ds-pt-6 md:ds-pt-0'
  );

  return (
    <ParallaxBanner
      imageItem={BANNER_IMAGE_ITEMS}
      isTopBanner
      bannerWidth="60%"
      bannerHeight="40.25rem"
      bannerHeightMd="35rem"
      bannerHeightXs="24.75rem"
    >
      <div className="ds-m-0">
        <h3 className="ds-text-5xl ds-font-bold ds-text-white ds-mt-48">
          Pre - Order Now
        </h3>
        <p className="ds-text-white">
          Be on of our pioneers. Pre-Order your dappstore card now and get our
          exclusive <br /> pre-order bonuses!
        </p>
      </div>
      <div className="ds-my-20">
        <h3 className={styles.timeLeft}>Time Left Until Launching</h3>
        <div className="ds-flex ds-flex-wrap ds-h-56 text-uppercase ds-text-white sm:mb-10">
          {timeLeft &&
            Object.keys(timeLeft).map(key => (
              <div key={key} className={timeValueCname}>
                <div className={styles.content}>
                  <div className="ds-w-100 sm:ds-text-4x1 md:ds-text-5xl lg:ds-text-6xl sm:ds-pt-5 md:ds-pt-0 lg:ds-pt-5">
                    {timeLeft[key]}
                  </div>
                  <div className="ds-text-sm sm:mt-5">{key} </div>
                </div>
              </div>
            ))}
        </div>
        <br />
      </div>
    </ParallaxBanner>
  );
};

export default PresaleCountdown;
