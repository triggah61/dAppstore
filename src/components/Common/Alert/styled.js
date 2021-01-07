import styled from 'styled-components';
import { DEFAULT_TRANSITION } from 'constants/config';

export const AlertContainer = styled.div`
  transition: ${DEFAULT_TRANSITION};
  opacity: ${p => (p.show ? 1 : 0)};
  max-height: ${p => (p.hide ? 0 : '10rem')};
  overflow: hidden;
  > div {
    color: ${p => (p.isError ? 'red' : '#00a8ff')};
    padding: 0.9375rem 1.25rem;
    background: #335f7b;
    border: 1px solid ${p => (p.isError ? 'red' : '#648ea9')};
    margin-bottom: 1.875rem;
    transition: ${DEFAULT_TRANSITION};
  }
`;
