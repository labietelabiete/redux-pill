import { UPDATE_FILTER, RESET_FILTER, FETCH_RESULTS } from "./types";

import initialState from "./state";

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_FILTER:
      return {
        ...state,
        ...action.payload,
      };
    case RESET_FILTER:
      return initialState;
    case FETCH_RESULTS:
      return initialState;
    default:
      break;
  }

  return state;
};

export default reducer;
