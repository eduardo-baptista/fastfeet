export function getDataRequest(filter) {
  return {
    type: '@problem/GET_DATA_REQUEST',
    payload: {
      filter,
    },
  };
}

export function getDataSuccess(problems) {
  return {
    type: '@problem/GET_DATA_SUCCESS',
    payload: {
      problems,
    },
  };
}
