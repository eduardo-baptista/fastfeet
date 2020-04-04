import { all } from 'redux-saga/effects';

import auth from './auth/saga';
import delivery from './delivery/saga';

export default function* rootSaga() {
  return yield all([auth, delivery]);
}
