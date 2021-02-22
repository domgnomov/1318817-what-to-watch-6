import {ActionType} from "./action";
import films from "../mocks/films";
import {SHOW_MORE_DEFAULT_COUNT} from "../const";

const initialState = {
  activeGenre: `All genres`,
  allFilms: films,
  allFilmsByActiveGenre: films,
  filteredFilms: Array.from(films).slice(0, SHOW_MORE_DEFAULT_COUNT),
  showCount: SHOW_MORE_DEFAULT_COUNT,
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
  }
  return state;
};

export {reducer};
