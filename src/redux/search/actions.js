import {
  INCREASE_COUNTER,
  DECREASE_COUNTER,
  RESET_COUNTER,
  SET_COUNTER,
  RANDOM_COUNTER,
} from "./types";

export const increaseCounter = () => ({ type: INCREASE_COUNTER });
export const decreaseCounter = () => ({ type: DECREASE_COUNTER });
export const resetCounter = () => ({ type: RESET_COUNTER });
export const setCounter = (value) => ({ type: SET_COUNTER, payload: value });
