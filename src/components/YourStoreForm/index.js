import React, { useEffect } from 'react';
import { Formik, Form } from 'formik';
import * as yup from 'yup';
import Scroll from 'react-scroll';
// import styled from 'styled-components'

import EntryContainer from 'components/Common/EntryContainer';
import { CATEGOIES_TO_ARRAY } from 'constants/config';
import LabeledFormField from 'components/Common/LabeledFormField';
import Button from 'components/Common/Button';
import Alert from 'components/Common/Alert';
import ImageDropzone from 'components/Common/ImageDropzone';
import Loader from 'components/Common/Loader';

const BANNER = 'banner';
const THUMBNAIL = 'thumbnail';
const SCREENSHOTS = 'screenshots';
const SELECT_CATEGORY = '- Select Category -';
const SPYCE = 'spyce';
const ETH = 'eth';
const EOS = 'eos';
const TRON = 'tron';

const { Element } = Scroll;
const { scroller } = Scroll;

const handleSubmit = (values, onSubmitDapp) => {
  onSubmitDapp(values);
};

/**
 * Add select place holder
 */
const setSelectPlaceholder = formikProps => {
  const checkPlaceholderExist =
    CATEGOIES_TO_ARRAY.findIndex(cat => cat.text === SELECT_CATEGORY) === -1;
  if (!formikProps.values.category_id && checkPlaceholderExist) {
    CATEGOIES_TO_ARRAY.unshift({ value: '', text: SELECT_CATEGORY });
  }
};

const requestSchema = yup.object().shape({
  email_address: yup
    .string()
    .email('Enter a valid email address.')
    .required('Email address is required.'),
  name: yup.string().required('Name is required.'),
  description: yup.string().required('Description is required.'),
  website: yup.string().required('Website is required.'),
  category_id: yup.string().required('Category is required.'),
  blockchain: yup.string(),
  telegram: yup.string(),
  twitter: yup.string(),
  discord: yup.string(),
  weibo: yup.string(),
  [BANNER]: yup
    .mixed()
    .required('Banner is required')
    .test('fileSize', 'File size too large', value => {
      return ImageDropzone.checkLargeFile(value);
    }),
  [THUMBNAIL]: yup.mixed().test('fileSize', 'File size too large', value => {
    return ImageDropzone.checkLargeFile(value);
  }),
  [SCREENSHOTS]: yup
    .mixed()
    .required('Screenshots is required')
    .test('fileSize', 'File size too large', value => {
      return ImageDropzone.checkLargeFile(value);
    }),
  [`${SPYCE}_chk`]: yup.boolean(),
  [SPYCE]: yup.string().when(`${SPYCE}_chk`, {
    is: true,
    then: yup.string().required('Field is required'),
  }),
  [`${ETH}_chk`]: yup.boolean(),
  [ETH]: yup.string().when(`${ETH}_chk`, {
    is: true,
    then: yup.string().required('Field is required'),
  }),
  [`${EOS}_chk`]: yup.boolean(),
  [EOS]: yup.string().when(`${EOS}_chk`, {
    is: true,
    then: yup.string().required('Field is required'),
  }),
  [`${TRON}_chk`]: yup.boolean(),
  [TRON]: yup.string().when(`${TRON}_chk`, {
    is: true,
    then: yup.string().required('Field is required'),
  }),
});

const YourStoreForm = props => {
  const {
    onSubmitDapp,
    createDappStatus,
    createDappError,
    submitting,
    dappDetails,
  } = props;

  useEffect(() => {
    scroller.scrollTo('yourStoreForm', {
      duration: 600,
      delay: 0,
      smooth: true,
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [(dappDetails && dappDetails.id) || createDappError]);

  return (
    <Element name="yourStoreForm">
      <EntryContainer title="Register Dapp" pageHeight="75rem">
        {createDappStatus && (
          <Alert isError={!!createDappError}>
            {createDappError || 'Your dApp was successfully created.'}
          </Alert>
        )}
        {submitting && <Loader height="3.375rem" />}
        <Formik
          key={dappDetails && dappDetails.id}
          initialValues={{
            email_address: '',
            name: '',
            description: '',
            website: '',
            category_id: '',
            blockchain: '',
            telegram: '',
            twitter: '',
            discord: '',
            weibo: '',
            [BANNER]: null,
            [THUMBNAIL]: null,
            [SCREENSHOTS]: null,
            [`${SPYCE}_chk`]: false,
            [`${ETH}_chk`]: false,
            [`${EOS}_chk`]: false,
            [`${TRON}_chk`]: false,
            [SPYCE]: '',
            [ETH]: '',
            [EOS]: '',
            [TRON]: '',
          }}
          validationSchema={requestSchema}
          onSubmit={values => {
            handleSubmit(values, onSubmitDapp);
          }}
        >
          {formikProps => {
            setSelectPlaceholder(formikProps);

            return (
              <Form>
                <EntryContainer.Wrapper disabled={submitting}>
                  <EntryContainer.Title top>Basic</EntryContainer.Title>
                  <ImageDropzone title="Banner" name={BANNER} required />

                  <ImageDropzone title="Thumbnail" name={THUMBNAIL} />

                  <ImageDropzone
                    title="Screenshot"
                    name={SCREENSHOTS}
                    multiple
                    thumbSize="sm"
                    required
                  />

                  <LabeledFormField
                    label="Category"
                    name="category_id"
                    component="select"
                    required
                  >
                    {CATEGOIES_TO_ARRAY.map(cat => (
                      <option key={cat.value} value={cat.value}>
                        {cat.text}
                      </option>
                    ))}
                  </LabeledFormField>

                  <LabeledFormField
                    label="Email"
                    name="email_address"
                    type="email"
                    required
                  />

                  <LabeledFormField
                    label="Name"
                    name="name"
                    type="text"
                    required
                  />

                  <LabeledFormField
                    label="Description"
                    name="description"
                    component="textarea"
                    required
                  />

                  <LabeledFormField
                    label="Website"
                    name="website"
                    type="text"
                    required
                  />

                  <EntryContainer.Title>Social Network</EntryContainer.Title>
                  <LabeledFormField
                    label="Telegram"
                    name="telegram"
                    type="text"
                  />

                  <LabeledFormField
                    label="Twitter"
                    name="twitter"
                    type="text"
                  />

                  <LabeledFormField
                    label="Discord"
                    name="discord"
                    type="text"
                  />

                  <LabeledFormField label="Weibo" name="weibo" type="text" />
                </EntryContainer.Wrapper>
                <EntryContainer.EntryNote>
                  After passed you could edit DApp description with different
                  language in dapp detail page by click the 'EDIT MY DAPP'
                  button
                </EntryContainer.EntryNote>
                <Button
                  disabled={submitting}
                  loading={submitting}
                  block
                  isRounded="0.25rem"
                  type="submit"
                >
                  Submit
                </Button>
              </Form>
            );
          }}
        </Formik>
      </EntryContainer>
    </Element>
  );
};

export default YourStoreForm;
