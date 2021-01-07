import styled from 'styled-components';

export const Container = styled.div`
  background: transparent url(${p => p.bg}) no-repeat top center;
  background-size: cover;
  background-attachment: fixed;
  min-height: 100vh;
  ${p =>
    !p.noWhiteSpace
      ? `
    @media (min-width: 800px) {
      padding: 1.25rem 0;
    }

    @media (min-width: 920px) {
      padding: 5rem 0;
    }
  `
      : ``}
`;
export const Wrapper = styled.div`
  max-width: ${p => (p.isFullWidth ? 'auto' : '75rem')};
  margin: auto;
`;
