import Alert from 'react-s-alert';
import _ from 'lodash';

import Locale from '../Locale';

export default {
  apiError(locale, errors) {
    if (errors && !errors.error_code && !errors.message) return;
    Alert.error(
      _.get(
        Locale[locale].apiErrors,
        errors && !errors.message ? errors.error_code || errors : 'serverErrors'
      )
    );
  }
};
