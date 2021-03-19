import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {SHOW_MORE_DEFAULT_COUNT} from "../../const/const";
import {updateFilteredFilms} from "../../services/data";

const isShowMoreAvailable = (filteredFilms, allFilmsByActiveGenreCount) => {
  return filteredFilms.length < allFilmsByActiveGenreCount;
};

const ShowMore = () => {
  const dispatch = useDispatch();
  const {filteredFilms, activeGenre, allFilms, allFilmsByActiveGenreCount, showCount} = useSelector((state) => state.FILM);
  return (
    <>
      {
        isShowMoreAvailable(filteredFilms, allFilmsByActiveGenreCount) && <button className="catalog__button" type="button" onClick={() => {
          updateFilteredFilms(dispatch, allFilms, activeGenre, showCount + SHOW_MORE_DEFAULT_COUNT);
        }}>Show more</button>
      }
    </>
  );
};

export {ShowMore};

