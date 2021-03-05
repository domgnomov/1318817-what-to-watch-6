import React from 'react';
import {changeAllFilmsByActiveGenre, changeGenre, changeShowCount, getFilms} from "../../store/action";
import {useDispatch, useSelector} from "react-redux";
import PropTypes from "prop-types";
import {SHOW_MORE_DEFAULT_COUNT} from "../../const";

const Genre = (props) => {
  const dispatch = useDispatch();
  const {genre} = props;
  const {allFilms, activeGenre} = useSelector((state) => state.MAIN);

  return (
    <>
      <li className={`catalog__genres-item ${activeGenre === genre && `catalog__genres-item--active`}`}>
        <a href="#" className="catalog__genres-link" onClick={(e) => {
          dispatch(changeShowCount(SHOW_MORE_DEFAULT_COUNT));
          dispatch(changeGenre(genre));
          dispatch(changeAllFilmsByActiveGenre(genre, allFilms));
          dispatch(getFilms(genre, allFilms, SHOW_MORE_DEFAULT_COUNT));
          e.preventDefault();
        }}>{genre}</a>
      </li>
    </>
  );
};

Genre.propTypes = {
  genre: PropTypes.string.isRequired,
};

export {Genre};
