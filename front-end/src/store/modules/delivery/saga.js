import { call, put, all, takeLatest } from 'redux-saga/effects';
import api from '~/services/api';

import formatId from '~/utils/formatId';

import * as actions from './actions';

export function* getData({ payload }) {
  const response = yield call(api.get, '/orders', {
    params: { q: payload.filter },
  });

  const deliveries = response.data.map((delivery) => {
    delivery.status = delivery.status.toUpperCase();
    delivery.maskedId = formatId(delivery.id);
    return delivery;
  });

  yield put(actions.getDataSuccess(deliveries));
}

export default all([takeLatest('@deliveries/GET_DATA_REQUEST', getData)]);
