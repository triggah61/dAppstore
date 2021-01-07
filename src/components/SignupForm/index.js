import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { Formik, Form } from 'formik';
import * as yup from 'yup';
import Scroll from 'react-scroll';

import Checkbox from '~/components/Common/Checkbox';
import LabeledFormField from '~/components/Common/LabeledFormField';
import EntryContainer from '~/components/Common/EntryContainer';
import Button from '~/components/Common/Button';
import Alert from '~/components/Common/Alert';
import Loader from '~/components/Common/Loader';
import terms from '~/components/SignupForm/terms';

const { Element } = Scroll;
const { scroller } = Scroll;

const handleSubmit = (values, actions, onSubmit) => {
  onSubmit(values);
};

const requestSchema = yup.object().shape({
  terms: yup.boolean().oneOf([true], 'You must agree to terms'),
  email_address: yup
    .string()
    .email('Enter a valid email address')
    .required('Email address is required'),
  password: yup
    .string()
    .min(8, 'Password is too short')
    .required('Password is required'),
  pass_confirm: yup
    .string()
    .required('Password confirm is required')
    .oneOf([yup.ref('password'), null], 'Passwords must match'),
});

const SignupForm = ({ onSubmit, signupStatus, submitting, error, message }) => {
  useEffect(() => {
    scroller.scrollTo('signUpForm', {
      duration: 1000,
      delay: 50,
      smooth: true,
    });
  }, [submitting]);

  const successful = signupStatus === 201;

  return (
    <Element name="signUpForm">
      <EntryContainer title="Sign Up" pageHeight="75rem">
        {signupStatus && <Alert isError={error}>{message}</Alert>}
        {submitting && <Loader height="3.375rem" />}
        <Formik
          key={successful}
          initialValues={{
            terms_text: terms,
            terms: false,
            email_address: '',
            password: '',
            pass_confirm: '',
            first_name: 'john',
            last_name: 'doe',
          }}
          validationSchema={requestSchema}
          onSubmit={(values, actions) => {
            handleSubmit(values, actions, onSubmit);
          }}
        >
          <Form>
            <EntryContainer.Wrapper>
              <div>
                <LabeledFormField
                  label="View Terms"
                  name="terms_text"
                  component="textarea"
                  disabled
                />

                <Checkbox
                  error="You must agree to terms."
                  name="terms"
                  label="I confirm and agree to terms"
                  required
                />
              </div>

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

              <LabeledFormField
                label="Re-enter Password"
                name="pass_confirm"
                type="password"
                required
              />
            </EntryContainer.Wrapper>
            <EntryContainer.EntryNote>
              Please fill in at least 8 digits in combination of English,
              special characters
            </EntryContainer.EntryNote>
            <Button
              disabled={submitting}
              loading={submitting}
              block
              isRounded="0.25rem"
              type="submit"
            >
              Sign Up
            </Button>
          </Form>
        </Formik>
      </EntryContainer>
    </Element>
  );
};

SignupForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default SignupForm;
