export function handleError(error) {
  console.warn(error.config);
  if (error.response) {
    // The request was made and the server responded with a status code
    // that falls out of the range of 2xx
    console.warn(error.response.data);
    console.warn(error.response.status);
    console.warn(error.response.headers);
    return error.response;
  }
  if (error.request) {
    // The request was made but no response was received
    // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
    // http.ClientRequest in node.js
    console.warn(error.request);
    return {
      data: { error: 'Something went wrong.' },
    };
  }
  // Something happened in setting up the request that triggered an Error
  console.warn('Error', error.message);
  return {
    data: { error: 'Something went wrong.' },
  };
}
