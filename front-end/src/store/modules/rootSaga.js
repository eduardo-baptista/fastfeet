import { all } from 'redux-saga/effects';

import auth from './auth/saga';
import delivery from './delivery/saga';
import deliveryman from './deliveryman/saga';

export default function* rootSaga() {
  return yield all([auth, delivery, deliveryman]);
}
