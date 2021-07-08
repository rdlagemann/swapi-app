import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";

import swApi from "../utils/apis/sw.api";
import rootReducer from "./rootReducer";

function configureStore() {
  let composeEnhancers = compose;

  if (process.env.NODE_ENV !== "production" && typeof window === "object") {
    /* eslint-disable no-underscore-dangle */
    if (window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__)
      composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({});
  }

  const middlewares = [thunk.withExtraArgument(swApi)];
  const enhancers = [applyMiddleware(...middlewares)];

  const store = createStore(rootReducer, composeEnhancers(...enhancers));

  return store;
}

export default configureStore();
