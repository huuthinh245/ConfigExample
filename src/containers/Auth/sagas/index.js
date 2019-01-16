import { put, call } from 'redux-saga/effects';
import * as types from '../constrants';

export default function* loginSaga({ payload }) {
  yield put({ type: types.LOGIN_SUCCESS, payload });
}
