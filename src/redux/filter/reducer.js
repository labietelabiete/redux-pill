import { UPDATE_FILTER, RESET_FILTER, FETCH_RESULTS } from "./types";

import initialState from "./state";
import { defaultState } from "../../constants/initial-filters";

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_FILTER:
      return {
        ...state,
        ...action.payload,
      };
    case RESET_FILTER:
      return defaultState;
    case FETCH_RESULTS:
      return initialState;
    default:
      break;
  }

  return state;
};

export default reducer;
