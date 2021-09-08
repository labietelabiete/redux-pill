import {
  UPDATE_QUERY,
  FETCH_QUERY,
} from "./types";

export const updateQuery = () => ({ type: UPDATE_QUERY });
export const fetchQuery = () => ({ type: FETCH_QUERY });
