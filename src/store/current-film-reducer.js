
import {DEFAULT_FILM} from "../const";
import {createReducer} from "@reduxjs/toolkit";
import {loadFilm} from "./action";

const initialState = {
  currentFilm: DEFAULT_FILM
};

const currentFilmReducer = createReducer(initialState, (builder) => {
  builder.addCase(loadFilm, (state, action) => {
    state.currentFilm = action.payload;
  });

});

export {currentFilmReducer};
