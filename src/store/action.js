export const ActionType = {
  CHANGE_GENRE: `changeGenre`,
  GET_FILMS: `getFilms`,
  CHANGE_SHOW_COUNT: `changeShowCount`
};

export const ActionCreator = {
  changeGenre: (genre) => ({
    type: ActionType.CHANGE_GENRE,
    payload: genre
  }),
  getFilms: (genre, allFilms, showCount) => {
    const showedFilms = Array.from(allFilms).slice(0, showCount);
    const filteredFilms = genre === `All genres` ? showedFilms : Array.from(showedFilms).filter((film) => film.genre === genre);
    return {
      type: ActionType.GET_FILMS,
      payload: filteredFilms
    };
  },
  changeShowCount: (showCount) => {
    return {
      type: ActionType.CHANGE_SHOW_COUNT,
      payload: showCount
    };
  },
};
