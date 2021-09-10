import { FILTER_STATE_KEY } from "../../constants/local-storage-keys";

import { defaultState } from "../../constants/initial-filters";

const initialState = JSON.parse(localStorage.getItem(FILTER_STATE_KEY)) || defaultState;

export default initialState;
