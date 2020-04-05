import produce from 'immer';

const INITIAL_STATE = {
  deliverymen: [],
  page: 1,
  loading: false,
};

export default function delivery(state = INITIAL_STATE, action) {
  return produce(state, (draft) => {
    switch (action.type) {
      case '@deliveryman/GET_DATA_REQUEST': {
        draft.loading = true;
        break;
      }
      case '@deliveryman/GET_DATA_SUCCESS': {
        draft.loading = false;
        draft.deliverymen = action.payload.deliverymen;
        break;
      }
      default:
    }
  });
}
