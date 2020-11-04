import { createReducer } from "@reduxjs/toolkit";
import * as action from "./actions";
const initialState = {
  name: "Sergei",
  token: false,
};
export const registerReducer = createReducer(initialState, {
  [action.addToken]: (state, { payload }) => {
    return { ...state, token: payload };
  },
});
