import { UPDATE_FILTER, RESET_FILTER } from "./types";

import initialState from "./state";

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_FILTER:
      // TODO
      return state + 1;
    case RESET_FILTER:
      return initialState;
    default:
      break;
  }

  return state;
};

export default reducer;
