import {
  setReviews,
  setIsFormDisabled
} from "./action";
import {createReducer} from "@reduxjs/toolkit";

const initialState = {
  reviews: [],
  isFormDisabled: false
};

const reviewReducer = createReducer(initialState, (builder) => {
  builder.addCase(setReviews, (state, action) => {
    state.reviews = action.payload;
  });

  builder.addCase(setIsFormDisabled, (state, action) => {
    state.isFormDisabled = action.payload;
  });

});

export {reviewReducer};
