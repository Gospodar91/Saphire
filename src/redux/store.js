import { combineReducers } from "redux";
import { configureStore } from "@reduxjs/toolkit";
import { registerReducer } from "./reducers";

const rootReducer = combineReducers({
  registerReducer,
});

export const store = configureStore({ reducer: rootReducer });
