/**
 * Build from https://react-dropzone.js.org/#!/Previews example
 * `ImageDropzone` component uses Formik's `setFieldValue`.
 * See `src\components\YourStoreForm\index.js` for reference on how to use this component
 */
import React, { useState } from 'react';
import Dropzone from 'react-dropzone';
import { ErrorMessage, FastField } from 'formik';
import PropTypes from 'prop-types';

import Error from 'components/Common/ErrorMessage';

import {
  handleRemoveImage,
  handleOnDrop,
  checkLargeFile,
  MAX_FILE_SIZE,
} from './utils';
import * as SC from './styled';

const ImageDropzone = props => {
  const [values, setValues] = useState(null);
  const {
    name,
    multiple,
    title,
    error,
    thumbSize,
    note,
    maxSize,
    required,
  } = props;

  return (
    <FastField
      key={values}
      name={name}
      render={({ field, form }) => {
        const setFieldTouched = () => form.setFieldTouched(name, true);

        // Thumbnails
        const thumbs = field.value
          ? field.value.map((file, i) => (
            <SC.ThumbNail key={file.name}>
              <SC.Remove
                thumbSize={thumbSize}
                isMultiple={multiple}
                onClick={e => {
                  handleRemoveImage(e, { ...field, ...form }, i);
                  // Trick to re-render Formik's Fasfield when value change.
                  setValues(field.value);
                }}
              >
                <i className="fa fa-times" />
              </SC.Remove>
              <SC.ThumbNailInner
                thumbSize={thumbSize}
                isMultiple={multiple}
                hasError={file.size > (maxSize || MAX_FILE_SIZE)}
              >
                <img src={file.dataUrl} alt="" />
              </SC.ThumbNailInner>
            </SC.ThumbNail>
          ))
          : [];

        return (
          <SC.Container>
            <SC.TitleContainer>
              <SC.Title>
                {title}
                {required && <i>*</i>}
              </SC.Title>
              <ErrorMessage
                name={field.name}
                component={error ? () => <Error>{error}</Error> : undefined}
                render={!error ? msg => <Error>{msg}</Error> : undefined}
              />
            </SC.TitleContainer>
            <Dropzone
              multiple={multiple || false}
              accept="image/*"
              onDrop={files => handleOnDrop(files, form, field)}
              onFileDialogCancel={setFieldTouched}
              onDragEnter={setFieldTouched}
            >
              {({ getRootProps, getInputProps }) => (
                <SC.DropzoneContainer isMultiple={multiple} {...getRootProps()}>
                  <input name={field.name} {...getInputProps()} />
                  {thumbs.length > 0 ? (
                    thumbs
                  ) : (
                      <SC.ThumbNail>
                        <SC.ThumbNailInner thumbSize={thumbSize} isMultiple>
                          <img src="assets/images/thumbnail_img.png" alt="" />
                          <img src="assets/images/thumbnail_img2.png" alt="" />
                        </SC.ThumbNailInner>
                      </SC.ThumbNail>
                    )}
                </SC.DropzoneContainer>
              )}
            </Dropzone>
            <SC.Note>{note}</SC.Note>
          </SC.Container>
        );
      }}
    />
  );
};

ImageDropzone.propTypes = {
  name: PropTypes.string, // name is used to set in Formik` initialValues
  title: PropTypes.string,
  multiple: PropTypes.bool,
  error: PropTypes.string,
  maxSize: PropTypes.number, // Maximum file size (in bytes)
  thumbSize: PropTypes.oneOf(['sm']),
  required: PropTypes.bool,
};

ImageDropzone.checkLargeFile = checkLargeFile;
ImageDropzone.maxFileSize = MAX_FILE_SIZE;

export default ImageDropzone;
