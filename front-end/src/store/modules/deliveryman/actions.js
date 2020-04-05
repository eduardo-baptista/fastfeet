export function getDataRequest(filter) {
  return {
    type: '@deliveryman/GET_DATA_REQUEST',
    payload: {
      filter,
    },
  };
}

export function getDataSuccess(deliverymen) {
  return {
    type: '@deliveryman/GET_DATA_SUCCESS',
    payload: {
      deliverymen,
    },
  };
}
