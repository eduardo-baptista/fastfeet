import { call, put, all, takeLatest } from 'redux-saga/effects';
import api from '~/services/api';

import formatId from '~/utils/formatId';

import * as actions from './actions';

export function* getData({ payload }) {
  const response = yield call(api.get, '/recipients', {
    params: { q: payload.filter },
  });

  const recipients = response.data.map((recipient) => {
    recipient.maskedId = formatId(recipient.id);
    return recipient;
  });

  yield put(actions.getDataSuccess(recipients));
}

export default all([takeLatest('@recipient/GET_DATA_REQUEST', getData)]);
