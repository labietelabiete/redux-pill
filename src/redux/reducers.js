import { combineReducers } from "redux";
import filterReducer from "./filter/reducer";
import propertiesDataReducer from "./propertiesData/reducer";

const reducers = combineReducers({
  filter: filterReducer,
  propertiesData: propertiesDataReducer,
});

export default reducers;
