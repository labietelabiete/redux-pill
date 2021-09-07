import { UPDATE_FILTER, RESET_FILTER } from "./types";

export const updateFilter = (value) => ({
  type: UPDATE_FILTER,
  payload: value,
});
export const resetFilter = () => ({ type: RESET_FILTER });
