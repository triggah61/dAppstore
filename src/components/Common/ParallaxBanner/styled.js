import styled from 'styled-components';
import { animated } from 'react-spring';

import { mediaMax } from 'utils';

const DAPPSTORE_IMG = 'assets/images/dappstore-bg.jpg';

const setBg = bannerBg => {
  switch (bannerBg) {
  case false: // BUGGY
    return '';
  case undefined:
    return DAPPSTORE_IMG;
  default:
      return bannerBg;
  }
};
export const ParallaxBanner = styled.div`
  overflow: hidden;
  position: relative;
  background-size: cover;
  background: transparent url(${p => setBg(p.bannerBg)}) no-repeat top center;
  ${mediaMax.smMax`
    padding-top: ${p => (p.isTopBanner ? '5rem' : 0)};
  `}
`;
export const ParallaxBannerInner = styled.div`
  height: ${p => p.bannerHeight || '500px'};
  display: flex;
  align-items: center;
  ${mediaMax.mdMax`
    height: ${p => p.bannerHeightMd || p.bannerHeight || '500px'};
  `}
  ${mediaMax.xsMax`
    text-shadow: 0 0 4px black
    height: ${p =>
      p.bannerHeightXs || p.bannerHeightMd || p.bannerHeight || '500px'};
  `}
`;

export const ImgContainer = styled.div`
  position: absolute;
  right: 1rem;
  top: 0;
  width: ${p => p.imageItemWidth || '50%'};
  height: ${p => p.bannerHeight || '500px'};
  backface-visibility: hidden;
  ${mediaMax.mdMax`
    height: ${p => p.bannerHeightMd || p.bannerHeight || '500px'};
  `}
  ${mediaMax.xsMax`
    height: ${p =>
      p.bannerHeightXs || p.bannerHeightMd || p.bannerHeight || '500px'};
  `}
`;

export const ImgItem = styled(animated.div)`
  position: absolute;
  background-size: 100% auto;
  background-position: center center;
  background-repeat: no-repeat;

  width: 100px;
  height: 100%;
`;
