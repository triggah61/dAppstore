import React from 'react';
import styled from 'styled-components';
import { DEFAULT_TRANSITION } from 'constants/config';
import { Field } from 'formik';
import { mediaMax } from '~/utils';

export const FormFieldWrapper = styled(({ error, ...rest }) => (
  <Field {...rest} />
))`
  &&& {
    outline: none;
    width: 100%;
    height: 3.125rem;
    min-height: 3.125rem;
    padding: 0.625rem 1.25rem;
    font-size: 1.125rem;
    line-height: 1.42857143;
    color: #b4d6ec;
    font-family: PFSquareSansPro-Regular, sans-serif;
    border: 1px solid ${p => (p.error ? 'red!important' : 'transparent')};
    border-radius: 6px;
    background: #456487;
    transition: ${DEFAULT_TRANSITION};
    &[disabled],
    .disabled {
      background-color: #37506b;
      cursor: not-allowed;
    }
    ${mediaMax.xsMax`
      font-size: 1rem;
      height: 2.3125rem;
      border-radius: 0.25rem;
      padding: 0.375rem 0.625rem;
    `}
    &:focus {
      border-color: #4dbbef;
      background-color: #1d344e;
    }
    ::-webkit-scrollbar {
      width: 6px;
      height: 50px;
      border-radius: 3px;
    }
    ::-webkit-scrollbar-thumb {
      background: #fff;
      border-radius: 10px;
    }
    ::-webkit-scrollbar-track {
      border-radius: 10px;
    }
  }
`;
