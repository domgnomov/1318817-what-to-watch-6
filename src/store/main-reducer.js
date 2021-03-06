import {
  changeAllFilmsByActiveGenre,
  changeGenre,
  changeShowCount,
  changedDisplayedFilms, loadFilm,
  loadFilms, resetFilter, setDataLoadStatus,
} from "./action";
import {DEFAULT_GENRE, SHOW_MORE_DEFAULT_COUNT, DEFAULT_FILM} from "../const";
import {createReducer} from "@reduxjs/toolkit";

const initialState = {
  activeGenre: DEFAULT_GENRE,
  allFilms: [],
  currentFilm: DEFAULT_FILM,
  allFilmsByActiveGenre: [],
  filteredFilms: [],
  showCount: SHOW_MORE_DEFAULT_COUNT,
  isDataLoaded: false,
};

const mainReducer = createReducer(initialState, (builder) => {
  builder.addCase(changeGenre, (state, action) => {
    state.activeGenre = action.payload;
  });

  builder.addCase(changedDisplayedFilms, (state, action) => {
    state.filteredFilms = action.payload;
  });

  builder.addCase(changeShowCount, (state, action) => {
    state.showCount = action.payload;
  });

  builder.addCase(changeAllFilmsByActiveGenre, (state, action) => {
    state.allFilmsByActiveGenre = action.payload;
  });

  builder.addCase(loadFilms, (state, action) => {
    state.allFilms = action.payload;
  });

  builder.addCase(setDataLoadStatus, (state, action) => {
    state.isDataLoaded = action.payload;
  });

  builder.addCase(resetFilter, (state, action) => {
    state.filteredFilms = action.payload;
  });

  builder.addCase(loadFilm, (state, action) => {
    state.currentFilm = action.payload;
  });

});

export {mainReducer};
