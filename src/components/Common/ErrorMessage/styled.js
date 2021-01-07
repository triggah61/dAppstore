import styled from 'styled-components';
import { DEFAULT_TRANSITION } from 'constants/config';
import { mediaMax } from '~/utils';

export const Error = styled.div`
  position: relative;
  transition: ${DEFAULT_TRANSITION};
  opacity: ${p => (p.show ? 1 : 0)};
  color: red;
  display: flex;
  align-items: center;
  margin-bottom: 1rem;
  ${mediaMax.xsMax`
    font-size: 0.75rem;
    line-height: 1.5rem;
  `}
`;
