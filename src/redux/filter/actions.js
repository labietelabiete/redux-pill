import { UPDATE_FILTER, RESET_FILTER, FETCH_RESULTS } from "./types";

export const updateFilter = (value) => ({
  type: UPDATE_FILTER,
  payload: value,
});
export const resetFilter = () => ({ type: RESET_FILTER });
export const fetchResults = () => ({ type: FETCH_RESULTS });
