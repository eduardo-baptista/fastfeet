import { call, put, all, takeLatest } from 'redux-saga/effects';
import api from '~/services/api';

import formatId from '~/utils/formatId';

import * as actions from './actions';

export function* getData({ payload }) {
  const response = yield call(api.get, '/deliverymen', {
    params: { q: payload.filter },
  });

  const deliverymen = response.data.map((deliveryman) => {
    deliveryman.maskedId = formatId(deliveryman.id);
    return deliveryman;
  });

  yield put(actions.getDataSuccess(deliverymen));
}

export default all([takeLatest('@deliveryman/GET_DATA_REQUEST', getData)]);
