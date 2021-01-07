import { css } from 'styled-components';
/**
 * Styled component media templating
 * https://www.styled-components.com/docs/advanced#media-templates
 */
export const media = {
  lgMax: 1440,
  lg: 1200,
  mdMax: 1199,
  md: 992,
  smMax: 991,
  sm: 768,
  xsMax: 767,
  xs: 420,
};

// Iterate through the media and create a media template (max-width)
export const mediaMax = Object.keys(media).reduce((acc, label) => {
  acc[label] = (...args) => css`
    @media (max-width: ${media[label] / 16}em) {
      ${css(...args)}
    }
  `;
  return acc;
}, {});

// Iterate through the media and create a media template (min-width)
export const mediaMin = Object.keys(media).reduce((acc, label) => {
  acc[label] = (...args) => css`
    @media (min-width: ${media[label] / 16}em) {
      ${css(...args)}
    }
  `;
  return acc;
}, {});
