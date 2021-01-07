import styled from 'styled-components';
import { DEFAULT_TRANSITION } from 'constants/config';
import { mediaMax } from '~/utils';

export const Row = styled.div`
  justify-content: center;
`;
export const AppRow = styled(Row)`
  transition: ${DEFAULT_TRANSITION};
  opacity: ${p => (p.show ? 1 : 0)};
  ${mediaMax.xsMax`padding: 0.4375rem;`}
`;
export const ButtonWrapper = styled.div`
  text-align: center;
  margin: 3.125rem auto 0;
  height: 3.75rem;
  > * {
    width: 11.5625rem;
  }
`;
export const Wrapper = styled.div`
  max-width: 75rem;
  margin: auto;
`;
