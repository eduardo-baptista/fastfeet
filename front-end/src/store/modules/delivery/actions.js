export function getDataRequest(filter) {
  return {
    type: '@deliveries/GET_DATA_REQUEST',
    payload: {
      filter,
    },
  };
}

export function getDataSuccess(deliveries) {
  return {
    type: '@deliveries/GET_DATA_SUCCESS',
    payload: {
      deliveries,
    },
  };
}
