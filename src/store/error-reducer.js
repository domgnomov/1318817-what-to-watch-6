import {setServerError} from "./action";
import {createReducer} from "@reduxjs/toolkit";

const initialState = {
  serverError: false,
};

const errorReducer = createReducer(initialState, (builder) => {
  builder.addCase(setServerError, (state, action) => {
    state.serverError = action.payload;
  });

});

export {errorReducer};
