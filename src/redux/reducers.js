import { combineReducers } from "redux";
import filterReducer from "./filter/reducer";
import propertiesDataReducer from "./propertiesData/reducer";
import loginReducer from "./login/reducer";

const reducers = combineReducers({
  filter: filterReducer,
  propertiesData: propertiesDataReducer,
  login: loginReducer,
});

export default reducers;
