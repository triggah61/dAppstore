import styled from 'styled-components';
import { mediaMax } from '~/utils';

export const Container = styled.div`
  padding: 4.375rem 0;
  background: transparent url(${p => p.bg}) no-repeat top center;
  background-size: cover;
  background-attachment: fixed;
  min-height: ${p => p.heightSize};
  display: flex;
  align-items: center;
  ${mediaMax.xsMax`
    min-height: ${p => p.xsHeightSize || p.heightSize || 'auto'};
  `}
`;
