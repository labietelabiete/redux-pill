import { combineReducers } from "redux";
import filterReducer from "./filter/reducer";
import searchReducer from "./search/reducer";

const reducers = combineReducers({
  filter: filterReducer,
  search: searchReducer,
});

export default reducers;
