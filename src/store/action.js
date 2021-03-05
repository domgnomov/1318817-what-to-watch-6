import {DEFAULT_GENRE} from "../const";

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
  SET_AUTH_INFO: `setAuthInfo`
};

export const changeGenre = (genre) => ({
  type: ActionType.CHANGE_GENRE,
  payload: genre
});

export const getFilms = (genre, allFilms, showCount) => {
  const filteredFilms = genre === DEFAULT_GENRE ? allFilms : Array.from(allFilms).filter((film) => film.genre === genre);
  const showedFilms = filteredFilms.slice(0, showCount);
  return {
    type: ActionType.GET_FILMS,
    payload: showedFilms
  };
};

export const loadFilms = (films) => ({
  type: ActionType.LOAD_FILMS,
  payload: films
});

export const loadFilm = (film) => ({
  type: ActionType.LOAD_FILM,
  payload: film
});

export const requireAuthorization = (status) => ({
  type: ActionType.REQUIRED_AUTHORIZATION,
  payload: status,
});

export const setAuthInfo = (authInfo) => ({
  type: ActionType.SET_AUTH_INFO,
  payload: authInfo,
});

export const changeShowCount = (showCount) => ({
  type: ActionType.CHANGE_SHOW_COUNT,
  payload: showCount
});

export const changeAllFilmsByActiveGenre = (genre, allFilms) => {
  const allFilmsByActiveGenre = genre === DEFAULT_GENRE ? allFilms : Array.from(allFilms).filter((film) => film.genre === genre);
  return {
    type: ActionType.CHANGE_ALL_FILMS_BY_ACTIVE_GENRE,
    payload: allFilmsByActiveGenre
  };
};

export const redirectToRoute = (url) => ({
  type: ActionType.REDIRECT_TO_ROUTE,
  payload: url,
});

export const redirectToFilm = (url) => ({
  type: ActionType.REDIRECT_TO_FILM,
  payload: url,
});

export const redirectToNotFound = (url) => ({
  type: ActionType.REDIRECT_TO_NOT_FOUND,
  payload: url,
});
