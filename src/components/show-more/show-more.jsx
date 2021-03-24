import React from 'react';
import {useSelector} from "react-redux";

const ShowMore = ({updateShowCount}) => {
  const {filteredFilms, allFilmsByActiveGenreCount} = useSelector((state) => state.FILM);

  const isShowMoreAvailable = (films, count) => {
    return films.length < count;
  };

  return (
    <>
      {
        isShowMoreAvailable(filteredFilms, allFilmsByActiveGenreCount) && <button className="catalog__button" type="button" onClick={() => {
          updateShowCount();
        }}>Show more</button>
      }
    </>
  );
};

export {ShowMore};

