import {DEFAULT_GENRE, SHOW_MORE_DEFAULT_COUNT} from "../../const";
import {
  changeAllFilmsByActiveGenre,
  changedDisplayedFilms, changeGenre, changeShowCount,
  loadFilms,
  setDataLoadStatus
} from "../../store/action";
import FilmData from "./film";

export const initFilms = (dispatch, data) => {
  const films = FilmData.parseFilms(data);
  dispatch(loadFilms(films));
  dispatch(setDataLoadStatus(true));
  updateFilms(dispatch, films, DEFAULT_GENRE, SHOW_MORE_DEFAULT_COUNT);
};

export const updateFilms = (dispatch, films, genre, count) => {
  updateAllFilmsByActiveGenre(dispatch, films, genre);
  updateDisplayedFilms(dispatch, films, genre, count);
};

export const updateAllFilmsByActiveGenre = (dispatch, allFilms, genre) => {
  dispatch(changeGenre(genre));
  const filteredByGenreFilms = getFilmsByGenre(genre, allFilms);
  dispatch(changeAllFilmsByActiveGenre(filteredByGenreFilms));
};

export const updateDisplayedFilms = (dispatch, allFilms, genre, showCount) => {
  dispatch(changeShowCount(showCount));
  const filteredFilms = getFilmsByGenre(genre, allFilms);
  const displayedFilms = filteredFilms.slice(0, showCount);
  dispatch(changedDisplayedFilms(displayedFilms));
};

export const getFilmsByGenreAndLimit = (genre, allFilms, limit) => {
  return getFilmsByGenre(genre, allFilms).slice(0, limit);
};

const getFilmsByGenre = (genre, allFilms) => {
  return genre === DEFAULT_GENRE ? allFilms : Array.from(allFilms).filter((film) => film.genre === genre);
};
