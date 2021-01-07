import React from 'react';
import PropTypes from 'prop-types';
import { FastField } from 'formik';
import Error from '~/components/Common/ErrorMessage';

import * as SC from './styled';

const Checkbox = props => (
  <FastField name={props.name}>
    {({ field, form }) => {
      const { name } = props;
      const error = form.errors[name];
      const touched = form.touched[name];
      return (
        <SC.CheckboxWrapper>
          {error && touched && <Error>{error}</Error>}
          <SC.CheckLabel
            onClick={() => {
              form.setFieldValue(name, !field.value);
              form.setFieldTouched(name, true);
            }}
          >
            <input
              type="checkbox"
              name={props.name}
              checked={field.value}
              onChange={() => {
                form.setFieldValue(name, field.value);
                form.setFieldTouched(name, true);
              }}
            />
            <SC.CheckMark>
              {props.required && <i>*</i>}
              {props.label}
            </SC.CheckMark>
          </SC.CheckLabel>
        </SC.CheckboxWrapper>
      );
    }}
  </FastField>
);

Checkbox.propTypes = {
  name: PropTypes.string.isRequired,
  error: PropTypes.string,
  label: PropTypes.node,
  required: PropTypes.bool,
};

export default Checkbox;
