import React from 'react';
import {useDispatch, useSelector} from "react-redux";

import {changeShowCount, changedDisplayedFilms} from "../../store/action";
import {SHOW_MORE_DEFAULT_COUNT} from "../../const";
import {updateDisplayedFilms} from "../model/filter";

const isShowMoreAvailable = (filteredFilms, allFilmsByActiveGenre) => {
  return filteredFilms.length < allFilmsByActiveGenre.length;
};

const ShowMore = () => {
  const dispatch = useDispatch();
  const {filteredFilms, activeGenre, allFilms, allFilmsByActiveGenre, showCount} = useSelector((state) => state.MAIN);
  return (
    <>
      {
        isShowMoreAvailable(filteredFilms, allFilmsByActiveGenre) && <button className="catalog__button" type="button" onClick={() => {
          const newShowCount = showCount + SHOW_MORE_DEFAULT_COUNT;
          dispatch(changeShowCount(newShowCount));
          updateDisplayedFilms(dispatch, allFilms, activeGenre, newShowCount);
        }}>Show more</button>
      }
    </>
  );
};

export {ShowMore};

