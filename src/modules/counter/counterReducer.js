import { createReducer } from "@reduxjs/toolkit";
import counterAction from "./counterAction";

const counterReducer = createReducer(0, {
  [counterAction.increment]: (state) => state + 1,
})

export default counterReducer;
