import { takeEvery, select, put, call } from 'redux-saga/effects';
import _ from 'lodash';

import AuthConstants from '../constants/AuthConstants';
import AuthRepository from '../repositories/AuthRepository';
import AuthInfoManager from '../lib/AuthInfoManager';
import { trimObjectProps } from '../lib/Helper';
import SignupFormValidator from '../lib/validators/SignupFormValidator';
import Alert from '../lib/Alert';
import history from '../history';
import { signin } from '../constants/RoutePathConstants';
import { getOwnInfo } from './user';

const { SIGNIN, SIGNUP, SIGNOUT } = AuthConstants;

export function* watchSignin() {
  yield takeEvery(`${SIGNIN}_REQUEST`, function*({ payload: { options } }) {
    try {
      const response = yield call(AuthRepository.signin, options);
      yield call(login, response.loginToken);
    } catch (errors) {
      yield put({
        type: `${SIGNIN}_FAILURE`,
        payload: { errors }
      });
      const { locale } = yield select(state => state.Localization);
      Alert.apiError(locale, errors);
    }
  });
}

export function* watchSignup() {
  yield takeEvery(`${SIGNUP}_REQUEST`, function*({ payload: { options } }) {
    try {
      const trimmedOptions = trimObjectProps(options);
      const validationErrors = SignupFormValidator.validate(trimmedOptions);

      if (!_.isEmpty(validationErrors)) throw validationErrors;

      const response = yield call(AuthRepository.signup, trimmedOptions);
      yield call(login, response.loginToken);
    } catch (errors) {
      yield put({
        type: `${SIGNUP}_FAILURE`,
        payload: { errors }
      });
      const { locale } = yield select(state => state.Localization);
      Alert.apiError(locale, errors);
    }
  });
}

export function* watchSignout() {
  yield takeEvery(`${SIGNOUT}_REQUEST`, function*() {
    try {
      yield call(AuthRepository.signout);
      yield put({
        type: `${SIGNOUT}_SUCCESS`
      });
      AuthInfoManager.reset();
      history.push(`/${signin}`);
    } catch (errors) {
      yield put({
        type: `${SIGNOUT}_FAILURE`,
        payload: { errors }
      });
      const { locale } = yield select(state => state.Localization);
      Alert.apiError(locale, errors);
    }
  });
}

function* login(loginToken) {
  AuthInfoManager.setToken(loginToken, true);
  yield call(getOwnInfo);
  yield put({
    type: `${SIGNIN}_SUCCESS`
  });
}
