import {ActionType} from "./action";
import {AuthorizationStatus, DEFAULT_GENRE, DEFAULT_AUTH_INFO, SHOW_MORE_DEFAULT_COUNT, DEFAULT_FILM} from "../const";

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

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.CHANGE_GENRE:
      return {
        ...state,
        activeGenre: action.payload
      };

    case ActionType.GET_FILMS:
      return {
        ...state,
        filteredFilms: action.payload
      };

    case ActionType.CHANGE_SHOW_COUNT:
      return {
        ...state,
        showCount: action.payload
      };

    case ActionType.CHANGE_ALL_FILMS_BY_ACTIVE_GENRE:
      return {
        ...state,
        allFilmsByActiveGenre: action.payload
      };

    case ActionType.SET_AUTH_INFO:
      return {
        ...state,
        authInfo: action.payload
      };

    case ActionType.LOAD_FILMS:
      return {
        ...state,
        allFilms: action.payload,
        allFilmsByActiveGenre: action.payload,
        filteredFilms: Array.from(action.payload).slice(0, SHOW_MORE_DEFAULT_COUNT),
        isDataLoaded: true
      };

    case ActionType.LOAD_FILM:
      return {
        ...state,
        currentFilm: action.payload,
      };

    case ActionType.REQUIRED_AUTHORIZATION:
      return {
        ...state,
        authorizationStatus: action.payload,
      };
  }
  return state;
};

export {reducer};
