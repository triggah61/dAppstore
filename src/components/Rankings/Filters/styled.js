import styled from 'styled-components';

import { mediaMax } from '~/utils';
import { CUSTOM_FORM_CONTROL_STYLE } from '../styled';

export const FilterWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.5rem 1.5rem 1rem;
  border-top: 1px solid #292d30;
  color: #a2a3a3;
  ${mediaMax.xsMax`
    flex-wrap: wrap;
  `}
`;

export const FilterContainer = styled.div`
  p {
    font-size: 0.6875rem;
    margin-bottom: 0.3125rem;
  }
  .form-control {
    width: 9.375rem;
    ${CUSTOM_FORM_CONTROL_STYLE}
  }
`;

export const ButtonList = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
