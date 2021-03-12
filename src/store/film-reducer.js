import {
  changeAllFilmsByActiveGenreCount,
  changeGenre,
  changeShowCount,
  changedFilteredFilms,
  loadFilms,
  setDataLoadStatus,
  loadPromo,
  changedFavoriteFilms,
  setReviews, setServerError,
} from "./action";
import {DEFAULT_GENRE, SHOW_MORE_DEFAULT_COUNT, DEFAULT_FILM, ALL_FILMS_BY_ACTIVE_GENRE_DEFAULT_COUNT} from "../const";
import {createReducer} from "@reduxjs/toolkit";

const initialState = {
  activeGenre: DEFAULT_GENRE,
  allFilms: [],
  currentFilm: DEFAULT_FILM,
  promoFilm: DEFAULT_FILM,
  allFilmsByActiveGenreCount: ALL_FILMS_BY_ACTIVE_GENRE_DEFAULT_COUNT,
  filteredFilms: [],
  favoriteFilms: [],
  showCount: SHOW_MORE_DEFAULT_COUNT,
  isDataLoaded: false,
  playingStatus: true,
  playingTime: ``,
  playingProgress: 0,
  reviews: [],
  serverError: false
};

const filmReducer = createReducer(initialState, (builder) => {
  builder.addCase(changeGenre, (state, action) => {
    state.activeGenre = action.payload;
  });

  builder.addCase(setServerError, (state, action) => {
    state.serverError = action.payload;
  });

  builder.addCase(changedFilteredFilms, (state, action) => {
    state.filteredFilms = action.payload;
  });

  builder.addCase(changedFavoriteFilms, (state, action) => {
    state.favoriteFilms = action.payload;
  });

  builder.addCase(changeShowCount, (state, action) => {
    state.showCount = action.payload;
  });

  builder.addCase(changeAllFilmsByActiveGenreCount, (state, action) => {
    state.allFilmsByActiveGenreCount = action.payload;
  });

  builder.addCase(loadFilms, (state, action) => {
    state.allFilms = action.payload;
  });

  builder.addCase(setDataLoadStatus, (state, action) => {
    state.isDataLoaded = action.payload;
  });

  builder.addCase(loadPromo, (state, action) => {
    state.promoFilm = action.payload;
  });

  builder.addCase(setReviews, (state, action) => {
    state.reviews = action.payload;
  });

});

export {filmReducer};
