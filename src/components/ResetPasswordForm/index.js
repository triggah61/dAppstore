import React from 'react';
import PropTypes from 'prop-types';
import { Formik, Form } from 'formik';
import { Link } from '@reach/router';
import * as yup from 'yup';

import Button from '~/components/Common/Button';
import Alert from '~/components/Common/Alert';
import EntryContainer from '~/components/Common/EntryContainer';
import LabeledFormField from '~/components/Common/LabeledFormField';

const handleSubmit = (values, actions, token, onSubmit) => {
  onSubmit({ token, ...values });
};

const requestSchema = yup.object().shape({
  password: yup
    .string()
    .min(8, 'Password is too short')
    .required('Password is required'),
  pass_confirm: yup
    .string()
    .required('Password confirm is required')
    .oneOf([yup.ref('password'), null], 'Passwords must match'),
});

const ResetPasswordForm = ({
  token,
  onSubmit,
  message,
  messageType,
  submitting,
}) => {
  return (
    <Formik
      initialValues={{
        password: '',
        pass_confirm: '',
      }}
      validationSchema={requestSchema}
      onSubmit={(values, actions) => {
        handleSubmit(values, actions, token, onSubmit);
      }}
    >
      {() => (
        <EntryContainer title="Reset Your Password">
          <Form>
            {message && (
              <Alert isError={messageType === 'error'}>{message}</Alert>
            )}

            <EntryContainer.Wrapper>
              <LabeledFormField
                label="Password"
                name="password"
                type="password"
                required
              />

              <LabeledFormField
                label="Re-enter Password"
                name="pass_confirm"
                type="password"
                required
              />
            </EntryContainer.Wrapper>
            <Button
              type="submit"
              disabled={submitting}
              loading={submitting}
              isRounded="0.25rem"
              block
            >
              Reset
            </Button>
          </Form>
          <EntryContainer.FooterLinks>
            <Link to="/login">Login</Link>
            <Link to="/signup">Sign Up</Link>
          </EntryContainer.FooterLinks>
        </EntryContainer>
      )}
    </Formik>
  );
};

ResetPasswordForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default ResetPasswordForm;
