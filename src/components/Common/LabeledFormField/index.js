import React from 'react';
import { ErrorMessage, Field } from 'formik';
import PropTypes from 'prop-types';

import FormField from 'components/Common/FormField';
import Error from 'components/Common/ErrorMessage';
import * as SC from './styled';

const LabeledFormField = props => {
  const allProps = { ...props };
  delete allProps.label;
  delete allProps.hideError;
  delete allProps.errorMessage;
  delete allProps.required;
  const {
    errorMessage: error,
    label = null,
    required,
    name,
    customComponent = null,
    hideError,
  } = props;

  return (
    <SC.LabeledFormFieldWrapper>
      <SC.LabelWrapper>
        <SC.Label>
          {label}
          {required && <i>*</i>}
        </SC.Label>
        {!hideError && (
          <ErrorMessage
            name={name}
            component={error ? () => <Error>{error}</Error> : undefined}
            render={!error ? msg => <Error>{msg}</Error> : undefined}
          />
        )}
      </SC.LabelWrapper>
      {customComponent || (
        <Field
          render={({ _, form }) => (
            <FormField
              error={
                !props.hideError &&
                !!form.errors[props.name] &&
                form.touched[props.name]
              }
              {...allProps}
            />
          )}
        />
      )}
    </SC.LabeledFormFieldWrapper>
  );
};

LabeledFormField.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string,
  errorMessage: PropTypes.string,
  required: PropTypes.bool,
};

export default LabeledFormField;
