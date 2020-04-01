import { ValidationError } from 'yup';

export default (errors) => {
  // format yup errors
  if (errors instanceof ValidationError) {
    return errors.inner.reduce((obj, error) => {
      obj[error.path] = error.message;
      return obj;
    }, {});
  }

  return false;
};
