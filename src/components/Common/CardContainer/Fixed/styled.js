import styled from 'styled-components';
import { mediaMax } from '~/utils';

export const Wrapper = styled.div`
  max-width: 75rem;
  margin: auto;
`;

export const Container = styled.div`
  ${mediaMax.xsMax`
    padding: 0.4375rem;
    h3 {
      font-size: 1.125rem
    }
  `}
`;
