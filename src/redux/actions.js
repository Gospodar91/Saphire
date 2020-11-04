import { createAction } from "@reduxjs/toolkit";
import { Type } from "./types";

export const addToken = createAction(`${Type.ADD_TOKEN}`);
