import produce from 'immer';

const INITIAL_STATE = {
  problems: [],
  page: 1,
  loading: false,
};

export default function problem(state = INITIAL_STATE, action) {
  return produce(state, (draft) => {
    switch (action.type) {
      case '@problem/GET_DATA_REQUEST': {
        draft.loading = true;
        break;
      }
      case '@problem/GET_DATA_SUCCESS': {
        draft.loading = false;
        draft.problems = action.payload.problems;
        break;
      }
      default:
    }
  });
}
