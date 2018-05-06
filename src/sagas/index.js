import { fork, all } from 'redux-saga/effects';

import { watchSignin, watchSignup, watchSignout } from './auth';
import {
  watchGetAppointments,
  watchGetAllMachines,
  watchGetAvailableTime,
  watchCreateAppointment,
  watchCancelAppointment
} from './booking';
import { watchGetOwnInfo } from './user';
import {
  watchGetManagementAppointments,
  watchConfirmAppointment
} from './management';

export default function* root() {
  yield all([
    fork(watchSignin),
    fork(watchSignup),
    fork(watchSignout),
    fork(watchGetAllMachines),
    fork(watchGetAppointments),
    fork(watchGetAvailableTime),
    fork(watchCreateAppointment),
    fork(watchCancelAppointment),
    fork(watchGetOwnInfo),
    fork(watchGetManagementAppointments),
    fork(watchConfirmAppointment)
  ]);
}
