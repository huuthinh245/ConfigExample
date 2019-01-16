import { takeLatest } from 'redux-saga/effects';
import loginSaga from './index';
import * as types from '../constrants';

export default function* watchSagaLogin() {
  yield takeLatest(types.LOGIN, loginSaga);
}
