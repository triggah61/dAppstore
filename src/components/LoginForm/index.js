import React from 'react';
import PropTypes from 'prop-types';
import { Formik, Form } from 'formik';
import { Link } from '@reach/router';
import * as yup from 'yup';

import Button from '~/components/Common/Button';
import Alert from '~/components/Common/Alert';
import EntryContainer from '~/components/Common/EntryContainer';
import LabeledFormField from '~/components/Common/LabeledFormField';

const handleLogin = (values, onLogin) => onLogin(values);

const requestSchema = yup.object().shape({
  email_address: yup
    .string()
    .email('Enter a valid email address.')
    .required('Email address is required.'),
  password: yup
    .string()
    .test(
      'len',
      'Password too short. Must be at least 8 character',
      val => val && val.length >= 8
    )
    .required('Password is required'),
});

const LoginForm = ({ onLogin, submitting, error }) => (
  <Formik
    initialValues={{
      email_address: '',
      password: '',
    }}
    validationSchema={requestSchema}
    onSubmit={values => handleLogin(values, onLogin)}
  >
    <EntryContainer>
      <Form>
        {!!error && <Alert isError>{error}</Alert>}
        <EntryContainer.Wrapper>
          <LabeledFormField
            label="Email"
            name="email_address"
            type="email"
            required
          />

          <LabeledFormField
            label="Password"
            name="password"
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
          Login
        </Button>
      </Form>
      <EntryContainer.FooterLinks>
        <Link to="/forgot-password">Forgot Password</Link>
        <Link to="/signup">Sign Up</Link>
      </EntryContainer.FooterLinks>
    </EntryContainer>
  </Formik>
);

LoginForm.propTypes = {
  onLogin: PropTypes.func.isRequired,
};

export default LoginForm;
