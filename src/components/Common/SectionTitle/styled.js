import styled from 'styled-components';
import { mediaMax } from '~/utils';

export const H1 = styled.h1`
  font-size: 2.5rem;
  color: #fff;
  margin-bottom: 3.4375rem;
  text-align: center;
  ${mediaMax.xsMax`
    font-size: 1.75rem;
    margin-bottom: 1.875rem;
    font-family: PFSquareSansPro-Medium, sans-serif;
  `}
`;
