import Alert from 'react-s-alert';
import _ from 'lodash';

import Locale from '../Locale';

export default {
  apiError(locale, errors, timeout = 2500) {
    if (errors && !errors.error_code && !errors.message) return;
    Alert.closeAll();
    Alert.error(
      _.get(
        Locale[locale].apiErrors,
        errors && !errors.message ? errors.error_code || errors : 'server_error'
      ),
      { timeout }
    );
  },
  error(locale, key, timeout = 2500) {
    Alert.closeAll();
    Alert.error(_.get(Locale[locale].errors, key), { timeout });
  }
};
