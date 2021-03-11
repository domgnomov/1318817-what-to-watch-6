import {createAction} from "@reduxjs/toolkit";

export const ActionType = {
  CHANGE_GENRE: `changeGenre`,
  CHANGE_FILTERED_FILMS: `changedFilteredFilms`,
  CHANGE_FAVORITE_FILMS: `changedFavoriteFilms`,
  CHANGE_SHOW_COUNT: `changeShowCount`,
  CHANGE_ALL_FILMS_BY_ACTIVE_GENRE_COUNT: `changeAllFilmsByActiveGenreCount`,
  LOAD_FILMS: `loadFilms`,
  LOAD_FILM: `loadFilm`,
  LOAD_PROMO: `loadPromo`,
  REQUIRED_AUTHORIZATION: `requiredAuthorization`,
  REDIRECT_TO_ROUTE: `redirectToRoute`,
  REDIRECT_TO_FILM: `redirectToFilm`,
  REDIRECT_TO_NOT_FOUND: `redirectToNotFound`,
  REDIRECT_TO_NOT_AVAILABLE: `redirectToNotAvailable`,
  SET_AUTH_INFO: `setAuthInfo`,
  SET_DATA_LOAD_STATUS: `setDataLoadStatus`,
  SET_SERVER_ERROR: `setServerError`,
  SET_PLAYING_STATUS: `setPlayingStatus`,
  SET_PLAYING_TIME: `setPlayingTime`,
  SET_PLAYING_PROGRESS: `setPlayingProgress`,
  SET_REVIEWS: `setReviews`,
};

export const changeGenre = createAction(ActionType.CHANGE_GENRE, (genre) => {
  return {payload: genre};
});

export const changedFilteredFilms = createAction(ActionType.CHANGE_FILTERED_FILMS, (films) => {
  return {payload: films};
});

export const changedFavoriteFilms = createAction(ActionType.CHANGE_FAVORITE_FILMS, (films) => {
  return {payload: films};
});

export const loadFilms = createAction(ActionType.LOAD_FILMS, (films) => {
  return {payload: films};
});

export const setDataLoadStatus = createAction(ActionType.SET_DATA_LOAD_STATUS, (status) => {
  return {payload: status};
});

export const setServerError = createAction(ActionType.SET_SERVER_ERROR, (status) => {
  return {payload: status};
});

export const loadFilm = createAction(ActionType.LOAD_FILM, (film) => {
  return {payload: film};
});

export const loadPromo = createAction(ActionType.LOAD_PROMO, (film) => {
  return {payload: film};
});

export const requireAuthorization = createAction(ActionType.REQUIRED_AUTHORIZATION, (status) => {
  return {payload: status};
});

export const setAuthInfo = createAction(ActionType.SET_AUTH_INFO, (authInfo) => {
  return {payload: authInfo};
});

export const changeShowCount = createAction(ActionType.CHANGE_SHOW_COUNT, (showCount) => {
  return {payload: showCount};
});

export const changeAllFilmsByActiveGenreCount = createAction(ActionType.CHANGE_ALL_FILMS_BY_ACTIVE_GENRE_COUNT, (films) => {
  return {payload: films};
});

export const redirectToRoute = createAction(ActionType.REDIRECT_TO_ROUTE, (url) => {
  return {payload: url};
});

export const redirectToFilm = createAction(ActionType.REDIRECT_TO_FILM, (url) => {
  return {payload: url};
});

export const redirectToNotFound = createAction(ActionType.REDIRECT_TO_NOT_FOUND, (url) => {
  return {payload: url};
});

export const redirectToNotAvailable = createAction(ActionType.REDIRECT_TO_NOT_AVAILABLE, (url) => {
  return {payload: url};
});

export const setPlayingStatus = createAction(ActionType.SET_PLAYING_STATUS, (url) => {
  return {payload: url};
});

export const setPlayingTime = createAction(ActionType.SET_PLAYING_TIME, (url) => {
  return {payload: url};
});

export const setPlayingProgress = createAction(ActionType.SET_PLAYING_PROGRESS, (url) => {
  return {payload: url};
});

export const setReviews = createAction(ActionType.SET_REVIEWS, (url) => {
  return {payload: url};
});
