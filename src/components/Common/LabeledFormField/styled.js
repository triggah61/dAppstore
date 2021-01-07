import styled from 'styled-components';
import { mediaMax } from '~/utils';

export const LabeledFormFieldWrapper = styled.div`
  position: relative;
  margin-bottom: 1.5625rem;
`;
export const LabelWrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
`;
export const Label = styled.label`
  font-size: 1.25rem;
  font-family: PFSquareSansPro-Regular, sans-serif;
  font-weight: normal;
  margin-bottom: 1rem;
  color: #fff;
  white-space: nowrap;
  ${mediaMax.xsMax`font-size: 1rem;`}
  > * {
    color: #31bbff;
  }
`;
