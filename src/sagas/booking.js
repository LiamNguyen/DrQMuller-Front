import { takeEvery, select, put, call } from 'redux-saga/effects';
import { delay } from 'redux-saga';
import _ from 'lodash';

import BookingConstants from '../constants/BookingConstants';
import BookingRepository from '../repositories/BookingRepository';
import Alert from '../lib/Alert';
import history from '../history';
import {
  createAppointment,
  home,
  authed
} from '../constants/RoutePathConstants';

const {
  GET_APPOINTMENTS,
  GET_ALL_MACHINES,
  GET_AVAILABLE_TIME,
  CREATE_APPOINTMENT,
  CANCEL_APPOINTMENT
} = BookingConstants;

export function* watchGetAppointments() {
  yield takeEvery(`${GET_APPOINTMENTS}_REQUEST`, function*() {
    yield call(getAppointments);
  });
}

export function* watchGetAllMachines() {
  yield takeEvery(`${GET_ALL_MACHINES}_REQUEST`, function*() {
    try {
      const response = yield call(BookingRepository.getAllMachines);
      yield put({
        type: `${GET_ALL_MACHINES}_SUCCESS`,
        payload: { machines: response }
      });
    } catch (errors) {
      yield put({
        type: `${GET_ALL_MACHINES}_FAILURE`,
        payload: { errors }
      });
      const { locale } = yield select(state => state.Localization);
      Alert.apiError(locale, errors);
    }
  });
}

export function* watchGetAvailableTime() {
  yield takeEvery(`${GET_AVAILABLE_TIME}_REQUEST`, function*({
    payload: { options }
  }) {
    try {
      yield delay(1500);

      const response = yield call(BookingRepository.getAvailableTime, options);
      yield put({
        type: `${GET_AVAILABLE_TIME}_SUCCESS`,
        payload: { availableTime: response }
      });
    } catch (errors) {
      yield put({
        type: `${GET_AVAILABLE_TIME}_FAILURE`,
        payload: { errors }
      });
      const { locale } = yield select(state => state.Localization);
      Alert.apiError(locale, errors);
    }
  });
}

export function* watchCreateAppointment() {
  yield takeEvery(`${CREATE_APPOINTMENT}_REQUEST`, function*({
    payload: { options }
  }) {
    const { locale } = yield select(state => state.Localization);

    try {
      yield call(BookingRepository.createAppointment, options);
      yield put({
        type: `${CREATE_APPOINTMENT}_SUCCESS`
      });
      history.push(`/${authed}/${home}`);
      Alert.success(locale, 'appointment_created');
    } catch (errors) {
      yield put({
        type: `${CREATE_APPOINTMENT}_FAILURE`,
        payload: { errors }
      });
      Alert.apiError(locale, errors);
    }
  });
}

export function* watchCancelAppointment() {
  yield takeEvery(`${CANCEL_APPOINTMENT}_REQUEST`, function*({
    payload: { options }
  }) {
    const { locale } = yield select(state => state.Localization);

    try {
      yield call(BookingRepository.cancelAppointment, options);
      yield put({
        type: `${CANCEL_APPOINTMENT}_SUCCESS`
      });
      yield call(getAppointments);
      yield delay(2000);
      Alert.success(locale, 'appointment_cancelled');
    } catch (errors) {
      yield put({
        type: `${CANCEL_APPOINTMENT}_FAILURE`,
        payload: { errors }
      });
      Alert.apiError(locale, errors);
    }
  });
}

function* getAppointments() {
  try {
    const response = yield call(BookingRepository.getAppointments);
    yield put({
      type: `${GET_APPOINTMENTS}_SUCCESS`,
      payload: { appointments: response }
    });
    if (_.isEmpty(response)) {
      history.push(`/${authed}/${createAppointment}`);
    }
  } catch (errors) {
    yield put({
      type: `${GET_APPOINTMENTS}_FAILURE`,
      payload: { errors }
    });
    const { locale } = yield select(state => state.Localization);
    Alert.apiError(locale, errors);
  }
}
