import _isEmpty from 'lodash/isEmpty';
import ValidationHelper from '../ValidationHelper';

export default {
  validate(fields) {
    let errors = {};

    ['username', 'password'].forEach(field => {
      if (_isEmpty(fields[field])) {
        errors[field] = `errors.${field}.empty`;
      }
    });

    if (fields.username && !ValidationHelper.isValidUsername(fields.username)) {
      errors.username = 'errors.username.pattern_fail';
    }

    if (fields.password && !ValidationHelper.isStrong(fields.password)) {
      errors.password = 'errors.password.pattern_fail';
    }

    return errors;
  }
};
