import { IS_DEV, IS_STAGING } from 'constants/config';

const uid = Math.random()
  .toString(36)
  .substring(7);
function assets(imgPath) {
  const path = `${imgPath}?${uid}`;

  if (IS_DEV) {
    return `http://localhost:${process.env.PORT || 8000}/assets/${path}`;
  }

  if (IS_STAGING) {
    return `https://dappstore-test.decenternet.com/assets/${path}`;
  }

  return `https://dappstore.decenternet.com/assets/${path}`;
}

export default assets;
