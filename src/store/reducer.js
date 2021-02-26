import {ActionType} from "./action";
import films from "../mocks/films";

const initialState = {
  activeGenre: `All genres`,
  allFilms: films,
  filteredFilms: films
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
  }
  return state;
};

export {reducer};
