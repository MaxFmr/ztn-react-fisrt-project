import { createStore, applyMiddleware } from "redux";
import ReduxPromise from "redux-promise";
import logger from "redux-logger";
import { composeWithDevTools } from "redux-devtools-extension";

import rootReducer from "./root-reducer";

const middlewares = [logger];

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(...middlewares, ReduxPromise))
);

export default store;
