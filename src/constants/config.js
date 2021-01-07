const APP_NAME = 'dAppStore';

export const SESSION_ID = `${APP_NAME}SessionId`;

const DEV_BASE_URL = 'https://dappstore-test.decenternet.com';
const PROD_BASE_URL = 'https://dappstore.decenternet.com';
export const API_URL = 'https://dappstore-test.decenternet.com/api/v1'; // unused??

const PATH_PREFIX = '/api/v1';

export const GOOGLE_ANALYTICS_ID = 'UA-159540561-5';

export const IS_TEST = process.env.NODE_ENV === 'test';
export const IS_DEV = process.env.NODE_ENV === 'development';
export const IS_STAGING = window.location.href.includes('-test');
export const IS_DEV_STAGING = IS_DEV || IS_STAGING;

export const ENABLE_PRESALE = IS_DEV_STAGING;

export const API_BASE_URL = `${
  IS_DEV_STAGING ? DEV_BASE_URL : PROD_BASE_URL
}${PATH_PREFIX}`;

export const CURRENCY_CODE = 'USD';

// export const PAYPAL_CLIENT_ID = "AXwNoUSi3KoHqISDij_CouHyNcSk99U2gcvqiGLJt9JskNm7yoLlkrkCfI76J1dBKph6k17r1so_I2Dr"
export const PAYPAL_CLIENT_ID =
  'AekyBjehwjZb080-lupUPF0cCbDrv-MGCDGuQC67dIe7QaPtAupIaWXdioaZEzRi7ervDHMLGYAKd1jz';

/**
 * Styles
 */
export const DEFAULT_TRANSITION = 'all .3s ease 0s';
export const BASE_COLOR = '#00275b';

/**
 * Slider settings
 */
export const SLIDER_HEIGHT = '50rem';
export const BACKGROUND_COLOR = 'linear-gradient(173deg,#00082f,#001743)';

/**
 * Tag types
 */
export const TAGS = {
  HOME_SLIDER: 1,
  TOP_SLIDER: 2,
  FIXED: 3,
  GRID: 4,
};

/**
 * Categories
 */
export const CATEGORIES = {
  DAPPS: 'dapps',
  GAMES: 'games',
  NEWS: 'news',
};

export const CATEGOIES_TO_ARRAY = Object.keys(CATEGORIES)
  .filter(item => item !== 'NEWS') // remove news
  .map(item => {
    return {
      value: CATEGORIES[item],
      text: item,
    };
  });

/**
 * Status setting
 */
export const BLOCKED = 'blocked';
export const APPROVED = 'approved';
export const PENDING = 'pending';

export const STATUS = [
  {
    key: APPROVED,
    text: 'approve',
    color: 'success',
    icon: 'fa-check',
    tooltip: `App is ${APPROVED}`,
  },
  {
    key: PENDING,
    text: 'pending',
    color: 'warning',
    icon: 'fa-clock',
    tooltip: `App is ${PENDING}`,
  },
  {
    key: BLOCKED,
    text: 'block',
    color: 'danger',
    icon: 'fa-exclamation-triangle',
    tooltip: `App is ${BLOCKED}`,
  },
];
