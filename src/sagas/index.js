import { fork, all } from 'redux-saga/effects';

import { watchSignin, watchSignup, watchSignout } from './auth';
import { watchGetAppointments, watchGetAllMachines } from './booking';

export default function* root() {
  yield all([
    fork(watchSignin),
    fork(watchSignup),
    fork(watchSignout),
    fork(watchGetAllMachines),
    fork(watchGetAppointments)
  ]);
}
