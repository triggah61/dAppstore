import React from 'react';
import { withFormik, ErrorMessage } from 'formik';
import { Editor, EditorState, convertToRaw } from 'draft-js';

import * as yup from 'yup';
import { getAppTypeId, getUserName } from '~/utils';
import Button from '~/components/Common/Button';
import Loader from '~/components/Common/Loader';
import StarRating from '~/components/Common/StarRating';
import LabeledFormField from '~/components/Common/LabeledFormField';
import Alert from '~/components/Common/Alert';
import Error from '~/components/Common/ErrorMessage';

import * as SC from './styled';

const formikEnhancer = withFormik({
  mapPropsToValues: ({ rating }) => ({
    editorState: new EditorState.createEmpty(),
    rating: rating || 0,
  }),
  validationSchema: yup.object().shape({
    editorState: yup
      .object()
      .test('has text', 'Please share your feedback', value => {
        return value.getCurrentContent().hasText();
      }),
    rating: yup
      .number()
      .required('Please click a rate')
      .min(1, 'Please click a rate'),
  }),
  handleSubmit: (values, props) => {
    const { editorState, rating } = values;
    const content = editorState.getCurrentContent();
    const messageRaw = JSON.stringify(convertToRaw(content));

    const {
      appId,
      appType,
      userProfile: { id },
      addReview,
    } = props.props;
    const payload = {
      user_id: id,
      rating,
      message: messageRaw,
      app_id: parseInt(appId),
      type: getAppTypeId(appType),
    };
    addReview(payload);
  },
  displayName: 'ReviewForm',
});

const Form = props => {
  const {
    values,
    handleSubmit,
    setFieldValue,
    error,
    userProfile,
    message,
    submitting,
    addStatus,
  } = props;

  const isAddSuccess = addStatus === 200;
  const { editorState, rating } = values;
  const label = getUserName(userProfile);

  return (
    <SC.FormRatings className="reviews">
      <form onSubmit={handleSubmit}>
        {addStatus && (
          <Alert isError={error}>
            {isAddSuccess ? 'Your review was successfully submitted.' : message}
          </Alert>
        )}
        <LabeledFormField
          label={label}
          name="editorState"
          customComponent={
            <Editor
              placeholder="Please share your feedback on this app with others. If you recommend this app, why?"
              editorState={editorState}
              onChange={editorState =>
                setFieldValue('editorState', editorState)
              }
            />
          }
          required
        />
        <div className="row">
          <div className="col-6">
            <StarRating
              starColor="#749cc6"
              emptyStarColor="#345888"
              name="rating"
              starCount={5}
              editing
              value={rating || 0}
              onStarClick={rating => setFieldValue('rating', rating)}
            />
            <SC.RatingError>
              <ErrorMessage
                name="rating"
                render={msg => <Error>{msg}</Error>}
              />
            </SC.RatingError>
          </div>
          <div className="col-6 d-flex justify-content-end">
            <Button type="submit" size="sm" disabled={submitting}>
              {submitting ? <Loader size="sm" /> : 'Submit'}
            </Button>
          </div>
        </div>
      </form>
    </SC.FormRatings>
  );
};

const ReviewForm = formikEnhancer(Form);

export default ReviewForm;
