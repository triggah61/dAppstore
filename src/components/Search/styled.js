import styled from 'styled-components';

export const SearchWrapper = styled.div`
  min-height: 100vh;
  @media (max-width: 919px) {
    padding: 3.75rem 0;
  }
  @media (max-width: 799px) {
    padding: 5rem 0;
  }
`;
export const AppContainer = styled.div``;
export const AppInner = styled.div`
  height: 100%;
`;
export const SearchBoxWrapper = styled.div`
  padding: 2rem 1rem;
  > * {
    width: 37.5rem;
  }
`;
export const Title = styled.h3`
  color: white;
  font-size: 2.5rem;
  margin: 1rem 0 2rem;
`;
