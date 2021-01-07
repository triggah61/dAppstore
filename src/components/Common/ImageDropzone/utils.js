export const MAX_FILE_SIZE = 2097152; // 2MB, Max size per file

/**
 * function to check if there's any file that is larger than the set size
 * @param {array} value value from yup's test() function
 * @param {*} size desire max size in byte for each image to upload. If this prop is set in this function the
 *  component (ImageDropzone) should also have the same value of maxSize props
 */
export const checkLargeFile = (value, size = MAX_FILE_SIZE) => {
  if (value) {
    const hasLargeFile = value.findIndex(file => file.size > size);
    return hasLargeFile === -1;
  }
  return true;
};

/**
 * Convert files into base64
 */
const convertToBase64 = file => {
  return new Promise(resolve => {
    const reader = new FileReader();
    reader.onloadend = e => {
      resolve({
        result: e.target.result,
        error: e.target.error,
      });
    };
    reader.readAsDataURL(file);
  });
};

export const handleOnDrop = (acceptedFiles, form, field) => {
  const { setFieldValue, setFieldTouched } = form;
  const { name } = field;

  // Convert all selected files to base64
  Promise.all(acceptedFiles.map(file => convertToBase64(file))).then(data => {
    setFieldValue(
      name,
      acceptedFiles.map((file, i) =>
        Object.assign(file, {
          dataUrl: data[i].result,
        })
      )
    );

    // set the touch value
    setFieldTouched(name, true);
  });
};

export const handleRemoveImage = (e, props, i) => {
  // Prevent close button to trigger show dialog
  e.stopPropagation();

  // do removing
  const { name, value, setFieldValue } = props;
  value.splice(i, 1);
  setFieldValue(name, value.length > 0 ? value : null);
};
