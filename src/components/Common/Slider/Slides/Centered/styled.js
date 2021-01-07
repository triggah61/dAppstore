import styled from 'styled-components';
import { mediaMin } from '~/utils';

export const Container = styled.div`
  max-width: 48.75rem;
  width: 100%;
  height: 27.5rem;
  margin: 0 auto;
  display: flex;
  align-items: center;
  padding: 1rem;

  &&& {
    > div {
      margin: 0;
      padding: 0;
      .card-content {
        padding-right: 0.9375rem;
        padding-left: 0.9375rem;
        ${mediaMin.md`padding: 1.875rem 1.5625rem;`}
        h3 {
          font-size: 1.875rem;
        }
      }
    }
  }
`;
