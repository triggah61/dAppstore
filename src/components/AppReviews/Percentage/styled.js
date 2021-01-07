import styled from 'styled-components';

export const ReviewStatsWrapper = styled.div`
  display: flex;
  justify-content: center
  margin-bottom: 2.5rem;
`;
export const ReviewStatsInner = styled.div`
  display: flex;
  justify-content: center
  align-items: center;
  width: 100%;
  max-width: 18.75rem;
  > div {
    padding: 0 1.875rem;
  }
`;
export const AverageWrapper = styled.div`
  text-align: center;
  > p {
    font-size: 3.75rem;
    color: rgb(38, 163, 225);
    margin: 0;
  }
  > span {
    font-size: 0.75rem;
    margin-bottom: 0.625rem;
    color: rgb(116, 156, 198);
    display: flex;
    align-items: center;
    justify-content: center;
    > i {
      margin-left: 0.3125rem;
    }
  }
`;
export const ProgressWrapper = styled.div``;
export const progress = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 7.1875rem;
  span {
    postion: relative;
    font-size: 0.875rem;
    color: rgba(255, 255, 255, 0.5);
  }
`;
export const ProgressPercent = styled.div`
  position: relative;
  height: 0.4375rem;
  background-color: rgba(204, 204, 204, 0.13);
  width: 6.25rem;
  &:after {
    position: absolute;
    content: '';
    top: 0;
    left: 0;
    width: ${p => p.percent};
    height: 100%;
    background-color: rgb(128, 145, 171);
  }
`;
