import React from 'react';

import Slider from 'pages/Common/Slider';
import AppCards from 'pages/Common/AppCards';

import { TAGS, CATEGORIES, IS_DEV } from 'constants/config';

import assets from 'utils/assets';
import SubmitYourStore from './SubmitYourStore';
import VideoModal from './VideoModal';

const COBA = assets`images/coba/coba_banner.jpg`;
const COBA_MB = assets`images/coba/20200318_COBA_dAppstoreBanner_Mobile.jpg`;
const COBA_THUMB = assets`images/coba/coba_thumb.jpg`;

// const STAYKINGV4 = assets`images/stayking4/BW-BANNERS-STAYKING4-05.png`;
// const STAYKINGV4_MB = assets`images/stayking4/kings4_mobile.png`;
// const STAYKINGV4_THUMB = assets`images/stayking4/kings4_thumb.png`;

// const PROBIT = assets`images/probit/probit.png`;
// const PROBIT_MB = assets`images/probit/probit_mobile.png`;
// const PROBIT_THUMB = assets`images/probit/probit_thumb.png`;

const TALKEN = assets`images/talken/talken.png`;
const TALKEN_MB = assets`images/talken/talken_mobile.png`;
const TALKEN_THUMB = assets`images/talken/talken_thumb.png`;

const XANGLE = assets`images/xangle/xangle.png`;
const XANGLE_MB = assets`images/xangle/xangle_mobile.png`;
const XANGLE_THUMB = assets`images/xangle/xangle_thumb.png`;

const DAPPSTORE = assets`images/dappstore/dappstore-banner.jpg`;
const DAPPSTORE_MB = assets`images/dappstore/dapps_mb.png`;
const DAPPSTORE_THUMB = assets`images/dappstore/dappstore-thumb.jpg`;

const MAKER_DAO = assets`images/maker-dao/Maker_Banner1.png`;
const MAKER_DAO_MB = assets`images/maker-dao/Maker_Banner1_mobile.png`;
const MAKER_DAO_THUMB = assets`images/maker-dao/Maker_Banner1_thumb.png`;

const CHAINFLIX = assets`images/chainflix/chainflix_banner.png`;
const CHAINFLIX_MB = assets`images/chainflix/chainflix_mobile.png`;
const CHAINFLIX_THUMB = assets`images/chainflix/chainflix_thumb.png`;

const CHK_CIRCLE = assets`images/check-circle2.png`;
const ICPc = assets`images/ic-pc.png`;
const ICViewMore = assets`images/ic-view-more.png`;

const cobaTest = {
  id: 10001,
  slideCustomClass: 'coba',
  banner: COBA,
  banner_mobile: COBA_MB,
  thumbnail: COBA_THUMB,
  buttons: [
    {
      link: 'https://coba.zone/downloads/COBAv1.exe',
      text: 'Download Demo',
      icon: ICViewMore,
    },
    {
      link: 'coba:',
      text: 'Run Demo',
      icon: ICViewMore,
    },
    {
      link: 'https://opensea.io/category/coba-crypto-online-battle-arena',
      text: 'Hero Auction',
      icon: ICViewMore,
      className: 'visit',
    },
    {
      link: 'https://coba.zone/',
      text: 'Join Closed-Beta',
      icon: ICViewMore,
      className: 'visit-opensea',
    },
  ],
};

const cobaProd = {
  id: 10001,
  slideCustomClass: 'coba',
  banner: COBA,
  banner_mobile: COBA_MB,
  thumbnail: COBA_THUMB,
  buttons: [
    {
      link: 'https://coba.zone/downloads/COBAv0.exe',
      text: 'Download Demo',
      icon: ICViewMore,
    },
    {
      link: 'https://opensea.io/category/coba-crypto-online-battle-arena',
      text: 'Hero Auction',
      icon: ICViewMore,
      className: 'visit',
    },
    {
      link: 'https://coba.zone/',
      text: 'Join Closed-Beta',
      icon: ICViewMore,
      className: 'visit-opensea',
    },
  ],
};

const slides = [
  IS_DEV ? cobaTest : cobaProd,
  // {
  //   slideCustomClass: 'stayking4',
  //   banner: STAYKINGV4,
  //   banner_mobile: STAYKINGV4_MB,
  //   thumbnail: STAYKINGV4_THUMB,
  //   name: '',
  //   description: '',
  //   buttons: [
  //     {
  //       link: 'https://www.probit.kr/ko-kr/',
  //       text: 'Read more',
  //       icon: ICPc,
  //       isLight: true,
  //       className: 'readmore'
  //     }, {
  //       link: 'https://www.bw.com/',
  //       text: 'Go to BW',
  //       icon: ICViewMore,
  //       className: 'visit'
  //     }, {
  //       link: 'https://www.probit.kr/ko-kr/',
  //       text: 'Go to Probit',
  //       icon: ICViewMore,
  //       className: 'go-to-probit'
  //     }
  //   ]
  // },
  // {
  //   slideCustomClass: 'probit',
  //   banner: PROBIT,
  //   banner_mobile: PROBIT_MB,
  //   thumbnail: PROBIT_THUMB,
  //   name: 'SPYCE IEO & Listing',
  //   description: 'We are happy to announce<br/>' +
  //     'SPYCE Listing & IEO @ Probit<br/>' +
  //     'IEO 1st - March 6th 12PM ~ 9th 00AM <br/>' +
  //     'IEO 2nd - March 10th 12PM ~ 12th 00AM <br/>' +
  //     'Trading Begins: Mar.13 15PM',
  //   buttons: [
  //     {
  //       link: 'https://www.probit.kr/ko-kr/ieo/spyce-round1/0',
  //       text: 'Get Yours Now!',
  //       icon: ICViewMore,
  //       className: 'readmore'
  //     }
  //   ]
  // },
  {
    id: 10002,
    slideCustomClass: 'xangle',
    banner: XANGLE,
    banner_mobile: XANGLE_MB,
    thumbnail: XANGLE_THUMB,
    buttons: [
      {
        link: 'https://xangle.io/',
        text: 'START',
        icon: ICViewMore,
        className: 'readmore',
      },
    ],
  },
  {
    id: 10003,
    slideCustomClass: 'talken',
    banner: TALKEN,
    banner_mobile: TALKEN_MB,
    thumbnail: TALKEN_THUMB,
    name: 'TALKEN',
    description:
      'We are happy to announce<br/>' +
      'TALK Public Sale and Events @Cobak<br/>' +
      'Cobak Live Event #1 - March 23th 6 PM (UTC+9)<br/>' +
      'Cobak Live Event #2 - March 24th 6 PM (UTC+9)<br/>' +
      'Cobak Public Sale - March 25th 2 PM (UTC+9)<br/>',
    buttons: [
      {
        link: `/app-details/games/${IS_DEV ? 57 : 61}`,
        text: 'VIEW MORE',
        icon: ICPc,
        isLight: true,
        className: 'readmore',
      },
      {
        link: 'https://talken.io/main',
        text: 'START',
        icon: ICViewMore,
        className: 'readmore',
      },
    ],
  },
  {
    id: 10004,
    slideCustomClass: 'chainflix',
    banner: CHAINFLIX,
    banner_mobile: CHAINFLIX_MB,
    thumbnail: CHAINFLIX_THUMB,
    name: 'Chainflix',
    description:
      'Chainflix is a Blockchain based Video Streaming Platform and it is aims to revolutionize the video sharing industry with a decentralized storage system and a novel Al-based storage controller. On Chainflix, viewers are rewarded with Chainflix coins for watching videos, content creators get to decide the coin distribution when uploading videos, and users have an opportunity to earn Chainflix coins by providing their storage. ',
    buttons: [
      {
        link: 'http://beta.chainflix.net',
        text: 'START',
        icon: ICViewMore,
      },
    ],
  },
  {
    id: 10005,
    slideCustomClass: 'maker-dao',
    banner: MAKER_DAO,
    banner_mobile: MAKER_DAO_MB,
    thumbnail: MAKER_DAO_THUMB,
    name: 'MakerDAO',
    description:
      'Maker is comprised of decentralized governance, ' +
      'the world’s first unbiased currency "Dai" and financial services ' +
      'that can be used by anyone, anywhere, anytime. ' +
      'Maker provides collateral loans called as "Vault" ' +
      'and the stablecoin based staking service "DSR" for its users.',
    buttons: [
      {
        link: 'https://oasis.app/',
        text: 'RUN',
        icon: ICViewMore,
      },
    ],
  },
];

const postCustomSlide = [
  {
    id: 10006,
    slideCustomClass: 'dappStoreSlide',
    banner: DAPPSTORE,
    banner_mobile: DAPPSTORE_MB,
    thumbnail: DAPPSTORE_THUMB,
    description:
      'Empower yourself through the web 3.0 gaming and applications experience powered by the Osiris net neutral browser. Freedom awaits you in the dAppstore Universe.',
    name: 'Build Your Dreams In the P2E World',
    position: 17,
    action: 1,
    buttons: [
      {
        icon: CHK_CIRCLE,
        link: '/dAppstore',
        text: 'HOW TO USE',
      },
    ],
    customComponent: <VideoModal />,
  },
];

// eslint-disable-next-line react/display-name
export default () => (
  <>
    <Slider
      showThumbnail
      type={CATEGORIES.GAMES}
      tag={TAGS.HOME_SLIDER}
      customSlide={slides}
      postCustomSlide={postCustomSlide}
    />
    <AppCards type={CATEGORIES.GAMES} tag={TAGS.FIXED} fixed />

    <Slider type={CATEGORIES.DAPPS} tag={TAGS.HOME_SLIDER} />
    <AppCards type={CATEGORIES.GAMES} tag={TAGS.GRID} />
    <SubmitYourStore />
  </>
);
