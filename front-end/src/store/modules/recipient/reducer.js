import produce from 'immer';

const INITIAL_STATE = {
  recipients: [],
  page: 1,
  loading: false,
};

export default function recipient(state = INITIAL_STATE, action) {
  return produce(state, (draft) => {
    switch (action.type) {
      case '@recipient/GET_DATA_REQUEST': {
        draft.loading = true;
        break;
      }
      case '@recipient/GET_DATA_SUCCESS': {
        draft.loading = false;
        draft.recipients = action.payload.recipients;
        break;
      }
      default:
    }
  });
}
