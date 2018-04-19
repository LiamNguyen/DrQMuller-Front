import { fork, all } from 'redux-saga/effects';

import Auth from './auth';

const { watchSignin } = Auth;

export default function* root() {
  yield all([fork(watchSignin)]);
}
