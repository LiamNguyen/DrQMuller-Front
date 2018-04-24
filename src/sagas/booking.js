import { takeEvery, select, put, call } from 'redux-saga/effects';
import _ from 'lodash';

import BookingConstants from '../constants/BookingConstants';
import BookingRepository from '../repositories/BookingRepository';
import Alert from '../lib/Alert';
import history from '../history';
import { createAppointment } from '../constants/RoutePathConstants';

const { GET_APPOINTMENTS } = BookingConstants;

export function* watchGetAppointments() {
  yield takeEvery(`${GET_APPOINTMENTS}_REQUEST`, function*() {
    try {
      const response = yield call(BookingRepository.getAppointments);
      yield put({
        type: `${GET_APPOINTMENTS}_SUCCESS`,
        payload: { appointments: response }
      });
      if (_.isEmpty(response)) {
        history.push(`/${createAppointment}`);
      }
    } catch (errors) {
      yield put({
        type: `${GET_APPOINTMENTS}_FAILURE`,
        payload: { errors }
      });
      const { locale } = yield select(state => state.Localization);
      Alert.apiError(locale, errors);
    }
  });
}
