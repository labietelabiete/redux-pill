import { UPDATE_QUERY } from "./types";

import initialState from "./state";

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_QUERY:
      return {
        ...state,
        ...action.payload,
      };
    default:
      break;
  }
  return state;
};

export default reducer;
