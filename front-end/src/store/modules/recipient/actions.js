export function getDataRequest(filter) {
  return {
    type: '@recipient/GET_DATA_REQUEST',
    payload: {
      filter,
    },
  };
}

export function getDataSuccess(recipients) {
  return {
    type: '@recipient/GET_DATA_SUCCESS',
    payload: {
      recipients,
    },
  };
}
