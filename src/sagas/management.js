import { takeEvery, call, put, select } from 'redux-saga/effects';
import { delay } from 'redux-saga';
import SocketIOClient from 'socket.io-client';

import ManagementRepository from '../repositories/ManagementRepository';
import Alert from '../lib/Alert';
import ManagementConstants from '../constants/ManagementConstants';
import { appointmentConfirmed } from '../constants/SocketIOListenerConstants';
import config from '../config';

const {
  GET_MANAGEMENT_APPOINTMENTS,
  CONFIRM_APPOINTMENT
} = ManagementConstants;

export function* watchGetManagementAppointments() {
  yield takeEvery(`${GET_MANAGEMENT_APPOINTMENTS}_REQUEST`, function*() {
    yield call(getManagementAppointments);
  });
}

export function* watchConfirmAppointment() {
  yield takeEvery(`${CONFIRM_APPOINTMENT}_REQUEST`, function*({
    payload: { appointmentId }
  }) {
    const { locale } = yield select(state => state.Localization);

    try {
      yield call(ManagementRepository.confirmAppointment, {
        appointmentId
      });
      yield call(getManagementAppointments);
      yield delay(1000);
      Alert.success(locale, 'appointment_confirmed');
      SocketIOClient(config.apiHost).emit(appointmentConfirmed, appointmentId);
    } catch (errors) {
      yield put({
        type: `${CONFIRM_APPOINTMENT}_FAILURE`,
        payload: { errors }
      });
      Alert.apiError(locale, errors);
    }
  });
}

function* getManagementAppointments() {
  try {
    const appointments = yield call(
      ManagementRepository.getManagementAppointments
    );
    yield put({
      type: `${GET_MANAGEMENT_APPOINTMENTS}_SUCCESS`,
      payload: { appointments }
    });
  } catch (errors) {
    yield put({
      type: `${GET_MANAGEMENT_APPOINTMENTS}_FAILURE`,
      payload: { errors }
    });
    const { locale } = yield select(state => state.Localization);
    Alert.apiError(locale, errors);
  }
}
