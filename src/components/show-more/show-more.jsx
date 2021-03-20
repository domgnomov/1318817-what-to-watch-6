import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {SHOW_MORE_DEFAULT_COUNT} from "../../const/const";
import {updateFilteredFilms} from "../../services/data";

const ShowMore = () => {
  const {filteredFilms, activeGenre, allFilms, allFilmsByActiveGenreCount, showCount} = useSelector((state) => state.FILM);

  const dispatch = useDispatch();

  const isShowMoreAvailable = (films, count) => {
    return films.length < count;
  };

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

