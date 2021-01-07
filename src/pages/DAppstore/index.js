import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import MediaQuery from 'react-responsive';

import assest from 'utils/assets';

import ParallaxBanner from 'components/Common/ParallaxBanner';
import Button from 'components/Common/Button';
import * as SC from './styled';

const OSIRIS_IMG = assest`images/osiris.png`;
const CHK_ICON = assest`images/check-circle2.png`;
const DAPP_IMAGES = assest`images/dappstore/dapp-images.png`;
const COMPUTER = assest`images/dappstore/computer.png`;
const DAPPSTORE_STEPS = assest`images/dappstore-steps/dappstore-steps.png`;
const DAPPSTORE_STEPS_OBILE = assest`images/dappstore-steps/dappstore-steps_m.png`;
const ARROW_ICON = assest`images/ic-view-more.png`;

const OPEN_SEA = assest`images/market-place/open-sea.png`;
const OPEN_BAZAAR = assest`images/market-place/open-bazaar.png`;
const RARE_BITS = assest`images/market-place/rare-bits.png`;
const MOON_MARKET = assest`images/market-place/moon-market.png`;
const KNOWNORIGIN = assest`images/market-place/knownorigin.png`;
const AUCTIONITY = assest`images/market-place/auctionity.png`;
const OPSKINS = assest`images/market-place/opskins.png`;
const KYBER_NETWORK = assest`images/market-place/kyber-network.png`;

const MARKET_PLACE_ITEMS = [
  {
    link: 'https://opensea.io/',
    icon: OPEN_SEA,
  },
  {
    link: 'https://openbazaar.org/',
    icon: OPEN_BAZAAR,
  },
  {
    link: 'https://rarebits.io/',
    icon: RARE_BITS,
  },
  {
    link: 'http://www.emoon.io',
    icon: MOON_MARKET,
  },
  {
    link: 'https://knownorigin.io/',
    icon: KNOWNORIGIN,
  },
  {
    link: 'https://www.auctionity.com/',
    icon: AUCTIONITY,
  },
  {
    link: 'https://opskins.com/',
    icon: OPSKINS,
  },
  {
    link: 'https://kyber.network/',
    icon: KYBER_NETWORK,
  },
];
const BANNER_IMAGE_ITEMS = [
  {
    img: COMPUTER,
    width: '65%',
    xPos: -100,
    yPos: 100,
  },
  {
    img: DAPP_IMAGES,
    width: '120%',
    left: '-15%',
    top: '5%',
    xPos: 120,
    yPos: -80,
  },
];

export default function DAppstore() {
  return (
    <SC.Container>
      <ParallaxBanner
        imageItem={BANNER_IMAGE_ITEMS}
        isTopBanner
        bannerWidth="60%"
        bannerHeight="46.875rem"
        bannerHeightMd="37.5rem"
        bannerHeightXs="34rem"
      >
        <SC.BannerContent>
          <h4>
            dAppstore is the world’s first consumer ready <br />
            Web 3.0 marketplace fully integrated into the <br />
            Osiris web browser, allowing dApps to run seamlessly <br />
            without the hassle of installing extra extensions
            <br />
            and plug-ins. Create, Discover and Earn your freedom in <br />
            the World’s first Play-to-Earn Marketplace
          </h4>
          <Button link="https://playdapp.store" icon={CHK_ICON}>
            Explore dAppstore
          </Button>
        </SC.BannerContent>
      </ParallaxBanner>
      <SC.OsirisContentContainer>
        <Container>
          <Row>
            <Col>
              <SC.OCTitle>
                <img src={OSIRIS_IMG} alt="Osiris" />
                <span>
                  Discover, Create and Reward Yourself. <br />
                  dAppstore powered by the Osiris web 3.0 browser.
                </span>
              </SC.OCTitle>
              <SC.OCInner>
                <Row>
                  <Col md={12} lg={4}>
                    <h4>Download the Osiris Browser</h4>
                    <p>
                      Forget complicated installation of wallets,
                      <br />
                      extension and plug-ins. Experience native 3.0 <br />
                      through Osiris on your desktop.
                    </p>
                  </Col>
                  <Col md={12} lg={4}>
                    <h4>Register / Log In</h4>
                    <p>
                      Sign up in the dAppstore and <br />
                      automatically obtain a spyce wallet.
                    </p>
                  </Col>
                  <Col md={12} lg={4}>
                    <h4 className="uppercase">Play to Earn</h4>
                    <p>
                      In P2E Play means to Produce Value. <br />
                      Cash out earned tokens in multiple <br />
                      marketplaces listed on the dAppstore.
                    </p>
                  </Col>
                </Row>
              </SC.OCInner>
              <Button link="https://browseosiris.com/" icon={ARROW_ICON}>
                Osiris Download
              </Button>
            </Col>
          </Row>
        </Container>
      </SC.OsirisContentContainer>
      <SC.DappstoreStepsContainer>
        <Container>
          <Row>
            <Col>
              <h1>How it works</h1>
              <SC.DappstoreStepsInner>
                <MediaQuery minWidth={768}>
                  <img src={DAPPSTORE_STEPS} alt="dappstore steps" />
                </MediaQuery>
                <MediaQuery maxWidth={767}>
                  <img src={DAPPSTORE_STEPS_OBILE} alt="dappstore steps" />
                </MediaQuery>
              </SC.DappstoreStepsInner>
            </Col>
          </Row>
        </Container>
      </SC.DappstoreStepsContainer>
      <SC.MarketPlaceContainer>
        <SC.MarketPlaceInner>
          <Container>
            <Row>
              <Col>
                <SC.MarketPlaceTitle>
                  <h1>Marketplace for Crypto Collectibles</h1>
                  <p>Buy, sell, and discover rare digital items</p>
                </SC.MarketPlaceTitle>
                <SC.MarketPlaceItems>
                  {MARKET_PLACE_ITEMS.map(item => (
                    <div key={item.link}>
                      <a
                        href={item.link}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <img src={item.icon} alt="" />
                      </a>
                    </div>
                  ))}
                </SC.MarketPlaceItems>
              </Col>
            </Row>
          </Container>
        </SC.MarketPlaceInner>
      </SC.MarketPlaceContainer>
    </SC.Container>
  );
}
