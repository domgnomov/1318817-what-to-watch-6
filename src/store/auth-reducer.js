import {requireAuthorization, setAuthInfo} from "./action";
import {AuthorizationStatus, DEFAULT_AUTH_INFO} from "../const/const";
import {createReducer} from "@reduxjs/toolkit";

const initialState = {
  authorizationStatus: AuthorizationStatus.NO_AUTH,
  authInfo: DEFAULT_AUTH_INFO
};

const authReducer = createReducer(initialState, (builder) => {
  builder.addCase(setAuthInfo, (state, action) => {
    state.authInfo = action.payload;
  });

  builder.addCase(requireAuthorization, (state, action) => {
    state.authorizationStatus = action.payload;
  });

});

export {authReducer};
