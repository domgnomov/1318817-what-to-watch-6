import {DEFAULT_GENRE} from "../const";
import {createAction} from "@reduxjs/toolkit";

export const ActionType = {
  CHANGE_GENRE: `changeGenre`,
  GET_FILMS: `getFilms`,
  CHANGE_SHOW_COUNT: `changeShowCount`,
  CHANGE_ALL_FILMS_BY_ACTIVE_GENRE: `changeAllFilmsByActiveGenre`,
  LOAD_FILMS: `loadFilms`,
  LOAD_FILM: `loadFilm`,
  REQUIRED_AUTHORIZATION: `requiredAuthorization`,
  REDIRECT_TO_ROUTE: `redirectToRoute`,
  REDIRECT_TO_FILM: `redirectToFilm`,
  REDIRECT_TO_NOT_FOUND: `redirectToNotFound`,
  SET_AUTH_INFO: `setAuthInfo`,
  RESET_FILTER: `resetFilter`,
  SET_DATA_LOAD_STATUS: `setDataLoadStatus`,
};

export const changeGenre = createAction(ActionType.CHANGE_GENRE, (genre) => {
  return {payload: genre};
});

export const getFilms = createAction(ActionType.GET_FILMS, (genre, allFilms, showCount) => {
  const filteredFilms = genre === DEFAULT_GENRE ? allFilms : Array.from(allFilms).filter((film) => film.genre === genre);
  const showedFilms = filteredFilms.slice(0, showCount);
  return {
    payload: showedFilms
  };
});

export const loadFilms = createAction(ActionType.LOAD_FILMS, (films) => {
  return {payload: films};
});

export const resetFilter = createAction(ActionType.RESET_FILTER, (films) => {
  return {payload: films};
});

export const setDataLoadStatus = createAction(ActionType.SET_DATA_LOAD_STATUS, (status) => {
  return {payload: status};
});

export const loadFilm = createAction(ActionType.LOAD_FILM, (film) => {
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

export const changeAllFilmsByActiveGenre = createAction(ActionType.CHANGE_ALL_FILMS_BY_ACTIVE_GENRE, (genre, allFilms) => {
  const allFilmsByActiveGenre = genre === DEFAULT_GENRE ? allFilms : Array.from(allFilms).filter((film) => film.genre === genre);
  return {payload: allFilmsByActiveGenre};
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
