import { SET_DATA, CLEAR_DATA } from "./types";

import initialState from "./state";

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_DATA:
      return action.payload;
    case CLEAR_DATA:
      return initialState;
    default:
      break;
  }

  return state;
};

export default reducer;
