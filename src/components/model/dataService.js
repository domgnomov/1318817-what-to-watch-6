import {DEFAULT_GENRE, MARK, SHOW_MORE_DEFAULT_COUNT} from "../../const";
import {
  changeAllFilmsByActiveGenreCount, changedFavoriteFilms,
  changedFilteredFilms, changeGenre, changeShowCount,
  loadFilms,
  setDataLoadStatus
} from "../../store/action";
import FilmData from "./film";
import FilmDetails from "../film-details/film-details";
import FilmReviews from "../film-reviews/film-reviews";
import FilmOverview from "../film-overview/film-overview";
import React from "react";

export const initFilms = (dispatch, data) => {
  const films = FilmData.parseFilms(data);
  dispatch(loadFilms(films));
  dispatch(setDataLoadStatus(true));
  updateFilms(dispatch, films, DEFAULT_GENRE, SHOW_MORE_DEFAULT_COUNT);
};

export const updateFilms = (dispatch, films, genre, showCount) => {
  dispatch(changeGenre(genre));
  dispatch(changeAllFilmsByActiveGenreCount(getFilmsByGenre(genre, films).length));
  updateFilteredFilms(dispatch, films, genre, showCount);
};

export const updateFilteredFilms = (dispatch, allFilms, genre, showCount) => {
  dispatch(changeShowCount(showCount));
  dispatch(changedFilteredFilms(getFilmsByGenre(genre, allFilms).slice(0, showCount)));
};

export const updateFavoriteFilms = (dispatch, data) => {
  const films = FilmData.parseFilms(data);
  dispatch(changedFavoriteFilms(films));
};

export const getFilmsByGenreAndLimit = (genre, allFilms, limit) => {
  return getFilmsByGenre(genre, allFilms).slice(0, limit);
};

const getFilmsByGenre = (genre, allFilms) => {
  return genre === DEFAULT_GENRE ? allFilms : Array.from(allFilms).filter((film) => film.genre === genre);
};
