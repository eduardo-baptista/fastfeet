import { call, put, all, takeLatest } from 'redux-saga/effects';
import api from '~/services/api';

import formatId from '~/utils/formatId';

import * as actions from './actions';

export function* getData({ payload }) {
  const response = yield call(api.get, '/problems', {
    params: { q: payload.filter },
  });

  const problems = response.data.map((problem) => {
    problem.maskedDeliveryId = formatId(problem.delivery_id);
    problem.delivery.status = problem.delivery.status.toUpperCase();
    return problem;
  });

  yield put(actions.getDataSuccess(problems));
}

export default all([takeLatest('@problem/GET_DATA_REQUEST', getData)]);
