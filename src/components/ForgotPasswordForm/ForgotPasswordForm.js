import React from 'react';
import PropTypes from 'prop-types';
import { Formik, Form } from 'formik';
import { Link } from '@reach/router';
import * as yup from 'yup';

import Button from 'components/Common/Button';
import Alert from 'components/Common/Alert';
import EntryContainer from 'components/Common/EntryContainer';
import LabeledFormField from 'components/Common/LabeledFormField';

const handleSubmit = (values, actions, onSubmit) => {
  onSubmit(values);
};

const requestSchema = yup.object().shape({
  email_address: yup
    .string()
    .email('Enter a valid email address.')
    .required('Email address is required.'),
});

const ForgotPasswordForm = ({ onSubmit, message, messageType, submitting }) => {
  return (
    <Formik
      initialValues={{
        email_address: '',
      }}
      validationSchema={requestSchema}
      onSubmit={(values, actions) => {
        handleSubmit(values, actions, onSubmit);
      }}
    >
      {() => (
        <EntryContainer title="Get a New Password">
          <Form>
            {message && (
              <Alert isError={messageType === 'error'}>{message}</Alert>
            )}
            <EntryContainer.Wrapper>
              <LabeledFormField
                label="Email"
                name="email_address"
                type="email"
                placeholer="Enter Email"
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
              Confirm
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

ForgotPasswordForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default ForgotPasswordForm;
