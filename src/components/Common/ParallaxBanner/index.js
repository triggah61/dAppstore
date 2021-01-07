import React from 'react';
import PropTypes from 'prop-types';
import { Container, Row, Col } from 'react-bootstrap';
import { useSpring } from 'react-spring';

import * as SC from './styled';

const calc = (x, y) => [x - window.innerWidth / 2, y - window.innerHeight / 2];

const ParallaxBanner = props => {
  const {
    bannerBg,
    bannerHeight,
    bannerHeightMd,
    bannerHeightXs,
    children,
    imageItem,
    imageItemWidth,
    isTopBanner = false,
  } = props;
  const [position, setPosition] = useSpring(() => ({
    xy: [0, 0],
    config: { mass: 10, tension: 550, friction: 140 },
  }));

  return (
    <SC.ParallaxBanner
      isTopBanner={isTopBanner}
      bannerBg={bannerBg}
      onMouseMove={({ clientX: x, clientY: y }) =>
        setPosition({ xy: calc(x, y) })
      }
    >
      <Container>
        <Row>
          <Col>
            <SC.ImgContainer
              bannerHeight={bannerHeight}
              bannerHeightMd={bannerHeightMd}
              bannerHeightXs={bannerHeightXs}
              imageItemWidth={imageItemWidth}
            >
              {imageItem.map((item, i) => (
                <SC.ImgItem
                  key={i}
                  style={{
                    transform: position.xy.interpolate(
                      (x, y) =>
                        `translate3d(${x / (item.xPos || 10)}px,${y /
                          (item.yPos || 10)}px,0)`
                    ),
                    backgroundImage: `url(${item.img})`,
                    left: item.left || '5%',
                    top: item.top || '0',
                    width: item.width,
                    height: item.height,
                  }}
                />
              ))}
            </SC.ImgContainer>
          </Col>
        </Row>
      </Container>
      <SC.ParallaxBannerInner
        bannerHeightMd={bannerHeightMd}
        bannerHeightXs={bannerHeightXs}
        bannerHeight={bannerHeight}
      >
        <Container>
          <Row>
            <Col>{children}</Col>
          </Row>
        </Container>
      </SC.ParallaxBannerInner>
    </SC.ParallaxBanner>
  );
};

ParallaxBanner.propTypes = {
  bannerHeight: PropTypes.string,
  bannerBg: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
  children: PropTypes.node.isRequired,
  imageItemWidth: PropTypes.string,
  isTopBanner: PropTypes.bool,
  imageItem: PropTypes.arrayOf(
    PropTypes.shape({
      img: PropTypes.string.isRequired,
      xPos: PropTypes.number,
      yPos: PropTypes.number,
      left: PropTypes.string,
      top: PropTypes.string,
      width: PropTypes.string,
      height: PropTypes.string,
    })
  ).isRequired,
};

export default ParallaxBanner;
