import {DEFAULT_GENRE} from "../../const";
import {changeAllFilmsByActiveGenre, changedDisplayedFilms} from "../../store/action";

export const updateAllFilmsByActiveGenre = (dispatch, allFilms, genre) => {
  const filteredByGenreFilms = getFilmsByGenre(genre, allFilms);
  dispatch(changeAllFilmsByActiveGenre(filteredByGenreFilms));
};

export const updateDisplayedFilms = (dispatch, allFilms, genre, showCount) => {
  const filteredFilms = getFilmsByGenre(genre, allFilms);
  const displayedFilms = filteredFilms.slice(0, showCount);
  dispatch(changedDisplayedFilms(displayedFilms));
};

const getFilmsByGenre = (genre, allFilms) => {
  return genre === DEFAULT_GENRE ? allFilms : Array.from(allFilms).filter((film) => film.genre === genre);
};
