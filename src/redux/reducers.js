import { combineReducers } from "redux";
import filterReducer from "./filter/reducer";

const reducers = combineReducers({
  filter: filterReducer,
});

export default reducers;
