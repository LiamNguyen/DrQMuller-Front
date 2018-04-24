import { fork, all } from 'redux-saga/effects';

import { watchSignin, watchSignup } from './auth';
import { watchGetAppointments } from './booking';

export default function* root() {
  yield all([fork(watchSignin), fork(watchSignup), fork(watchGetAppointments)]);
}
