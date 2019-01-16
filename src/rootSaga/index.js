import { all, fork } from 'redux-saga/effects';
import watchSagaLogin from '~/containers/Auth/sagas/watchSagas';

export default function* rootSaga() {
  yield all([fork(watchSagaLogin)]);
}
