export const ActionType = {
  CHANGE_GENRE: `changeGenre`,
  GET_FILMS: `getFilms`,
};

export const ActionCreator = {
  changeGenre: (genre) => ({
    type: ActionType.CHANGE_GENRE,
    payload: genre
  }),
  getFilms: (genre, films) => {
    const filteredFilms = genre === `All genres` ? films : Array.from(films).filter((film) => film.genre === genre);
    return {
      type: ActionType.GET_FILMS,
      payload: filteredFilms
    };
  }
};
