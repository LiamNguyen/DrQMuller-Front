import { takeEvery, call, put, select } from 'redux-saga/effects';

import UserConstants from '../constants/UserConstants';
import UserRepository from '../repositories/UserRepository';
import Alert from '../lib/Alert';
import {
  authed,
  management,
  appointments,
  home,
  isNormalRoute,
  isManagementRoute
} from '../constants/RoutePathConstants';
import history from '../history';
import UserRoleConstants from '../constants/UserRoleConstants';

const { GET_OWN_INFO } = UserConstants;

export function* watchGetOwnInfo() {
  yield takeEvery(`${GET_OWN_INFO}_REQUEST`, function*() {
    yield call(getOwnInfo);
  });
}

export function* getOwnInfo() {
  try {
    const info = yield call(UserRepository.getOwnInfo);
    const { role } = info;
    const {
      location: { pathname: currentRoute }
    } = history;

    yield put({
      type: `${GET_OWN_INFO}_SUCCESS`,
      payload: { info }
    });
    history.push(
      `${
        role === UserRoleConstants.customerService
          ? isManagementRoute(currentRoute)
            ? currentRoute
            : `/${management}/${appointments}`
          : isNormalRoute(currentRoute)
            ? currentRoute
            : `/${authed}/${home}`
      }`
    );
  } catch (errors) {
    yield put({
      type: `${GET_OWN_INFO}_FAILURE`,
      payload: { errors }
    });
    const { locale } = yield select(state => state.Localization);
    Alert.apiError(locale, errors);
  }
}
