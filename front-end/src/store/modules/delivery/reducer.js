import produce from 'immer';

const INITIAL_STATE = {
  deliveries: [],
  page: 1,
  loading: false,
};

export default function delivery(state = INITIAL_STATE, action) {
  return produce(state, (draft) => {
    switch (action.type) {
      case '@deliveries/GET_DATA_REQUEST': {
        draft.loading = true;
        break;
      }
      case '@deliveries/GET_DATA_SUCCESS': {
        draft.loading = false;
        draft.deliveries = action.payload.deliveries;
        break;
      }
      default:
    }
  });
}
