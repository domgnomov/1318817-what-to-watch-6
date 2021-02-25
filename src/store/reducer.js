import {ActionType} from "./action";
import {AuthorizationStatus, DEFAULT_GENRE, SHOW_MORE_DEFAULT_COUNT} from "../const";

const initialState = {
  activeGenre: DEFAULT_GENRE,
  allFilms: [],
  allFilmsByActiveGenre: [],
  filteredFilms: [],
  showCount: SHOW_MORE_DEFAULT_COUNT,
  isDataLoaded: false,
  authorizationStatus: AuthorizationStatus.NO_AUTH,
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

    case ActionType.LOAD_FILMS:
      return {
        ...state,
        allFilms: action.payload,
        allFilmsByActiveGenre: action.payload,
        filteredFilms: Array.from(action.payload).slice(0, SHOW_MORE_DEFAULT_COUNT),
        isDataLoaded: true
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
