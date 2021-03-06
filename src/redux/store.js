import { createStore, applyMiddleware } from "redux";
import ReduxPromise from "redux-promise";
import logger from "redux-logger";
import { composeWithDevTools } from "redux-devtools-extension";
import { persistStore } from "redux-persist";

import rootReducer from "./root-reducer";

const middlewares = [logger];

export const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(...middlewares, ReduxPromise))
);

export const persistor = persistStore(store);

export default store;
