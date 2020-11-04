import { createReducer } from "@reduxjs/toolkit";
import * as action from "./actions";
const initialState = {};
export const registerReducer = createReducer(initialState, {
  [action.addUserInfo]: (state, { payload }) => {
    return { ...state, ...payload };
  },
});
