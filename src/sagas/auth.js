import { takeEvery, put, call } from 'redux-saga/effects';
import Alert from 'react-s-alert';

import AuthConstants from '../constants/AuthConstants';
import AuthRepository from '../repositories/AuthRepository';
import AuthInfoManager from '../lib/AuthInfoManager';

const { SIGNIN } = AuthConstants;

export function* watchSignin() {
  yield takeEvery(`${SIGNIN}_REQUEST`, function*({ payload: { options } }) {
    try {
      const response = yield call(AuthRepository.signin, options);
      AuthInfoManager.setToken(response.loginToken, true);
      yield put({
        type: `${SIGNIN}_SUCCESS`
      });
    } catch (errors) {
      yield put({
        type: `${SIGNIN}_FAILURE`,
        payload: { errors }
      });
      Alert.error(errors.error_message);
    }
  });
}

export default {
  watchSignin
};
