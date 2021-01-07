import styled from 'styled-components';
import { DEFAULT_TRANSITION } from 'constants/config';

export const ReviewListWrapper = styled.div`
  position: relative;
  margin-bottom: 2.5rem;
`;
export const ReviewItem = styled.div`
  padding: 2.5rem 0;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  h3 {
    font-size: 1.25rem;
    font-family: PFSquareSansPro-Medium, sans-serif;
    color: rgb(255, 255, 255);
    margin-bottom: 0;
  }
  > p {
    color: white;
    margin: 0;
  }
`;
export const RatingWrapper = styled.div`
  margin-bottom: 1rem;
  display: inline-flex;
  align-items: center;
  justify-content: space-between;
  line-height: 1;
  > div {
    margin-right: 2.1875rem;
  }
  > span {
    font-size: 0.875rem;
    color: rgba(255, 255, 255, 0.5);
  }
`;
export const ReviewHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 0.625rem;
`;
export const ReviewEvents = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  > *:not(:first-child) {
    margin-left: 0.625rem;
  }
  .fas {
    color: #808ea8;
    transition: ${DEFAULT_TRANSITION};
  }
`;
export const LikeButton = styled.button`
  &&& {
    border: 0;
    background-color: transparent;
    padding: 0;
    position: relative;
    margin: 0 1rem;
    outline: none;
    > span {
      position: absolute;
      bottom: 0;
      left: 50%;
      transform: translate(-50%, 100%);
      color: white;
      font-size: 0.75rem;
    }
    &:hover {
      .fas {
        color: white;
      }
    }
  }
`;
