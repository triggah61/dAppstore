import moment from 'moment';
import { CATEGORIES, STATUS } from 'constants/config';

import assets from './assets';

const FeaturedAppsBg = assets`images/g_text_bg.png`;
const SpecialOffertBG = assets`images/section_04_bg.png`;

export const index = data => {
  if (data) {
    const indexed = {};
    data.forEach(item => (indexed[item._id] = item));

    return indexed;
  }

  return undefined;
};

export const prepareStats = data => {
  const sortedDates = Object.keys(data).sort((a, b) => {
    return new Date(a) - new Date(b);
  });

  const sortedStats = {};
  sortedDates.forEach(value => (sortedStats[value] = data[value]));

  const stats = Object.keys(sortedStats);
  if (stats.length !== 0) {
    return stats.map(stat => {
      return {
        name: moment(stat, 'MMMM YYYY').format('MMM YYYY'),
        views: data[stat] || 0,
      };
    });
  }
  return null;
};

export const isEmpty = obj => {
  if (obj) {
    return !Object.keys(obj).length;
  }
  return true;
};

/**
 * Crate key for each fetched apps
 */
export const createKey = (type, tag) => {
  return `${type}${tag}`;
};

/**
 * Get Tag settings
 */
export const getContainerSetting = (type, tag) => {
  switch (tag) {
  case 3:
    return {
      title:
          type === CATEGORIES.NEWS
            ? 'Latest News Updates'
            : 'Featured & Recommended',
      bg: FeaturedAppsBg,
      height: '63.125rem',
      xsHeight: '51.5625rem',
    };
  case 4:
    return {
      title: type === CATEGORIES.NEWS ? "What's Hot" : 'Special Offers',
      bg: SpecialOffertBG,
      height: '30.9375rem',
      xsHeight: '42.8125rem',
    };
  default:
    return {
      title: undefined,
      bg: undefined,
      height: 0,
      xsHeight: 0,
    };
  }
};

/**
 * Return integer base on app type
 */
export const getAppTypeId = appType => {
  return appType === CATEGORIES.DAPPS ? 1 : 2;
};

/**
 * Return user's name or email
 */
export const getUserName = userProfile => {
  const fn = userProfile.first_name;
  const ln = userProfile.last_name;
  const em = userProfile.email_address;

  if (fn && ln) {
    return `${fn} ${ln}`;
  }
  return em.split('@')[0];
};

/**
 * Status setting
 */
export const statusSetting = status => {
  return STATUS.find(s => s.key === status);
};

/**
 * Button text for visit website
 */
export const getButtonText = (action, type) => {
  switch (true) {
  case action === 0:
    return `Download`;
  case action === 1:
    return `Play`;
  case action === 2:
    return 'Sign up';
  case action === 3:
    return 'Start';
  default:
    return 'Visit website';
  }
};

export const objectToArray = (items, key) =>
  items.reduce(
    (obj, item) => ({
      ...obj,
      [item[key]]: item,
    }),
    {}
  );
