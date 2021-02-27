import {DEFAULT_GENRE} from "../const";

export const ActionType = {
  CHANGE_GENRE: `changeGenre`,
  GET_FILMS: `getFilms`,
  CHANGE_SHOW_COUNT: `changeShowCount`,
  CHANGE_ALL_FILMS_BY_ACTIVE_GENRE: `changeAllFilmsByActiveGenre`,
  LOAD_FILMS: `loadFilms`,
  REQUIRED_AUTHORIZATION: `requiredAuthorization`,
  REDIRECT_TO_ROUTE: `redirectToRoute`,
  SET_AUTH_INFO: `setAuthInfo`
};

export const ActionCreator = {
  changeGenre: (genre) => ({
    type: ActionType.CHANGE_GENRE,
    payload: genre
  }),
  getFilms: (genre, allFilms, showCount) => {
    const filteredFilms = genre === DEFAULT_GENRE ? allFilms : Array.from(allFilms).filter((film) => film.genre === genre);
    const showedFilms = filteredFilms.slice(0, showCount);
    return {
      type: ActionType.GET_FILMS,
      payload: showedFilms
    };
  },
  loadFilms: (films) => {
    return {
      type: ActionType.LOAD_FILMS,
      payload: films
    };
  },
  requireAuthorization: (status) => {
    return {
      type: ActionType.REQUIRED_AUTHORIZATION,
      payload: status,
    };
  },
  setAuthInfo: (authInfo) => {
    return {
      type: ActionType.SET_AUTH_INFO,
      payload: authInfo,
    };
  },
  changeShowCount: (showCount) => {
    return {
      type: ActionType.CHANGE_SHOW_COUNT,
      payload: showCount
    };
  },
  changeAllFilmsByActiveGenre: (genre, allFilms) => {
    const allFilmsByActiveGenre = genre === DEFAULT_GENRE ? allFilms : Array.from(allFilms).filter((film) => film.genre === genre);
    return {
      type: ActionType.CHANGE_ALL_FILMS_BY_ACTIVE_GENRE,
      payload: allFilmsByActiveGenre
    };
  },
  redirectToRoute: (url) => ({
    type: ActionType.REDIRECT_TO_ROUTE,
    payload: url,
  })
};
