import {
  INCREASE_COUNTER,
  DECREASE_COUNTER,
  RESET_COUNTER,
  SET_COUNTER,
  RANDOM_COUNTER,
} from "./types";

import initialState from "./state";

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case INCREASE_COUNTER:
      return state + 1;
    case DECREASE_COUNTER:
      return state - 1;
    case RESET_COUNTER:
      return initialState;
    case SET_COUNTER:
      return action.payload;
    case RANDOM_COUNTER:
      return Math.round(Math.random() * 10);

    default:
      break;
  }

  return state;
};

export default reducer;
