import { createStore, applyMiddleware, compose } from "redux";

import CombinedReducers from "./reducers";

const devTools =
  window &&
  window.__REDUX_DEVTOOLS_EXTENSION__ &&
  window.__REDUX_DEVTOOLS_EXTENSION__();
const appliedMiddleware = compose(devTools);
const store = createStore(CombinedReducers, appliedMiddleware);

export default store;
