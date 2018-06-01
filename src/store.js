import { createStore, combineReducers, compose, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { createLogger } from "redux-logger";

import rootReducer from "./reducers/index";

const intialState = [];

const middleWare = [thunk];

// const loggerMiddleware = createLogger();

const store = createStore(
  rootReducer,
  intialState,
  compose(applyMiddleware(...middleWare))
);

export default store;
