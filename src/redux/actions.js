import { createAction } from "@reduxjs/toolkit";
import { Type } from "./types";

export const addUserInfo = createAction(`${Type.ADD_USE_INFO}`);
