import { Alert } from 'react-native';
import { takeLatest, call, put, all } from 'redux-saga/effects';

// services
import api from '~/services/api';

// actions
import { signInSuccess, signFailure } from './action';

export function* signIn({ payload }) {
  try {
    const { id } = payload;

    const response = yield call(api.get, `deliverymen/${id}`);

    const user = response.data;

    yield put(signInSuccess(id, user));
  } catch (error) {
    Alert.alert(
      'Falha na autentificação',
      'Houve um erro no login, verifique seus dados'
    );

    yield put(signFailure());
  }
}

export default all([takeLatest('@auth/SIGN_IN_REQUEST', signIn)]);
