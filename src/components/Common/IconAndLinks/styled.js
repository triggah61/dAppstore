import styled from 'styled-components';
import { DEFAULT_TRANSITION } from 'constants/config';
import { mediaMax } from '~/utils';

export const Media = styled.div`
  display: flex;
  flex-direction: ${p => (p.isColumn ? 'column' : 'row')};
  align-items: flex-start;
  justify-content: space-between;
  height: 100%;
  > div > * {
    margin: 0 0.45rem;
    ${mediaMax.xsMax`
      margin: 0 .25rem;
    `}
  }
`;
export const CryptoIcon = styled.img`
  height: 1.875rem;
  ${mediaMax.xsMax`
    width: 1.25rem;
    height: 1.5625rem;
  `}
`;
export const SocialLink = styled.a`
  display: inline-block;
  transition: ${DEFAULT_TRANSITION};
  font-size: 1.25rem;
  backface-visiblity: hidden;
  color: white;
  &:hover {
    transform: translateY(-2px) translateZ(0);
    color: ${p => p.color};
  }
  ${mediaMax.xsMax`
    font-size: 1.125rem;
  `}
`;
