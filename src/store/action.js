export const ActionType = {
  CHANGE_GENRE: `changeGenre`,
  GET_FILMS: `getFilms`,
  CHANGE_SHOW_COUNT: `changeShowCount`,
  CHANGE_ALL_FILMS_BY_ACTIVE_GENRE: `changeAllFilmsByActiveGenre`
};

export const ActionCreator = {
  changeGenre: (genre) => ({
    type: ActionType.CHANGE_GENRE,
    payload: genre
  }),
  getFilms: (genre, allFilms, showCount) => {
    const filteredFilms = genre === `All genres` ? allFilms : Array.from(allFilms).filter((film) => film.genre === genre);
    const showedFilms = filteredFilms.slice(0, showCount);
    return {
      type: ActionType.GET_FILMS,
      payload: showedFilms
    };
  },
  changeShowCount: (showCount) => {
    return {
      type: ActionType.CHANGE_SHOW_COUNT,
      payload: showCount
    };
  },
  changeAllFilmsByActiveGenre: (genre, allFilms) => {
    const allFilmsByActiveGenre = genre === `All genres` ? allFilms : Array.from(allFilms).filter((film) => film.genre === genre);
    return {
      type: ActionType.CHANGE_ALL_FILMS_BY_ACTIVE_GENRE,
      payload: allFilmsByActiveGenre
    };
  }
};
