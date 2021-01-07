import React, { useEffect, useContext } from 'react';
import { Formik, Form, FastField } from 'formik';
import styled from 'styled-components';

import * as yup from 'yup';

import { SessionContext } from 'contexts/sessionContext';
import Alert from 'components/Common/Alert';
import Button from 'components/Common/Button';
import Checkbox from 'components/Common/Checkbox';
import EntryContainer from 'components/Common/EntryContainer';
import LabeledFormField from 'components/Common/LabeledFormField';

const Wrapper = styled.div`
  button {
    margin-top: 1.875rem;
  }
`;
const CheckboxWrapper = styled.div`
  > div:not(:last-child) {
    margin-bottom: 0.625rem;
  }
`;
const requestSchema = yup.object().shape({
  first_name: yup
    .string()
    .trim()
    .required('First name is required Required'),
  last_name: yup
    .string()
    .trim()
    .required('Last name is required Required'),
});

const AccountForm = props => {
  const { updateSession } = useContext(SessionContext);
  const { account, onSubmitUserAccount, submitting, error, status } = props;

  useEffect(() => {
    // update session after account update
    if (account) {
      updateSession(account);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [account]);

  return (
    <EntryContainer title="Account">
      <Formik
        initialValues={{
          ...account,
          newsletter: account.newsletter,
          two_factor_auth: account.two_factor_auth,
        }}
        enableReinitialize
        validationSchema={requestSchema}
        onSubmit={values => onSubmitUserAccount(values)}
      >
        {() => (
          <Form>
            <Wrapper>
              {status && (
                <Alert isError={error}>
                  {status === 200 ? 'Account updated' : 'Account update failed'}
                </Alert>
              )}
              <FastField type="hidden" name="id" />

              <LabeledFormField
                label="First Name"
                name="first_name"
                id="firstName"
              />

              <LabeledFormField
                label="Last Name"
                name="last_name"
                id="lastName"
              />

              <LabeledFormField
                label="Email"
                name="email_address"
                id="pass"
                disabled
              />

              <CheckboxWrapper>
                <Checkbox
                  name="newsletter"
                  label="Subscribe to news letter"
                  id="newsletter"
                />

                <Checkbox
                  name="two_factor_auth"
                  label="Enable two factor Authentication"
                  id="two_factor_auth"
                />
              </CheckboxWrapper>

              <Button
                type="submit"
                disabled={submitting}
                loading={submitting}
                isRounded="4px"
                block
              >
                Submit form
              </Button>
            </Wrapper>
          </Form>
        )}
      </Formik>
    </EntryContainer>
  );
};

export default AccountForm;
