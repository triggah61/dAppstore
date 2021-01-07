import styled from 'styled-components';
import { DEFAULT_TRANSITION } from 'constants/config';

export const StarRatingWrapper = styled.div`
  &&& {
    display: inline-block;
    .dv-star-rating {
      display: inline-flex !important;
      align-items: center;
      flex-direction: row-reverse;
      line-height: 1;
      .dv-star-rating-star {
        font-size: 1.125rem;
        margin-bottom: 0;
        line-height: 1;
        transition: ${DEFAULT_TRANSITION};
        float: none !important;
        ${p =>
    p.editing
      ? `
          &:hover {
            color: rgb(116, 156, 198) !important;
            & ~ label {
              color: rgb(116, 156, 198) !important;
            }
          }

        `
      : null}
      }
    }
  }
`;
