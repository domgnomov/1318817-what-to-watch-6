import {
  changeAllFilmsByActiveGenre,
  changeGenre,
  changeShowCount,
  getFilms, loadFilm,
  loadFilms, requireAuthorization,
  setAuthInfo
} from "./action";
import {AuthorizationStatus, DEFAULT_GENRE, DEFAULT_AUTH_INFO, SHOW_MORE_DEFAULT_COUNT, DEFAULT_FILM} from "../const";
import {createReducer} from "@reduxjs/toolkit/";

const initialState = {
  activeGenre: DEFAULT_GENRE,
  allFilms: [],
  currentFilm: DEFAULT_FILM,
  allFilmsByActiveGenre: [],
  filteredFilms: [],
  showCount: SHOW_MORE_DEFAULT_COUNT,
  isDataLoaded: false,
  authorizationStatus: AuthorizationStatus.NO_AUTH,
  authInfo: DEFAULT_AUTH_INFO
};

const rootReducer = createReducer(initialState, (builder) => {
  builder.addCase(changeGenre, (state, action) => {
    state.activeGenre = action.payload;
  });

  builder.addCase(getFilms, (state, action) => {
    state.filteredFilms = action.payload;
  });

  builder.addCase(changeShowCount, (state, action) => {
    state.showCount = action.payload;
  });

  builder.addCase(changeAllFilmsByActiveGenre, (state, action) => {
    state.allFilmsByActiveGenre = action.payload;
  });

  builder.addCase(setAuthInfo, (state, action) => {
    state.authInfo = action.payload;
  });

  builder.addCase(loadFilms, (state, action) => {
    state.allFilms = action.payload;
    state.allFilmsByActiveGenre = action.payload;
    state.filteredFilms = Array.from(action.payload).slice(0, SHOW_MORE_DEFAULT_COUNT);
    state.isDataLoaded = true;
  });

  builder.addCase(loadFilm, (state, action) => {
    state.currentFilm = action.payload;
  });

  builder.addCase(requireAuthorization, (state, action) => {
    state.authorizationStatus = action.payload;
  });

});

export {rootReducer};
