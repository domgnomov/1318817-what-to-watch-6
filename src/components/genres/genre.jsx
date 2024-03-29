import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import PropTypes from "prop-types";
import {SHOW_MORE_DEFAULT_COUNT} from "../../const/const";
import {updateFilms} from "../../services/data";

const Genre = (props) => {
  const {genre} = props;
  const {allFilms, activeGenre} = useSelector((state) => state.FILM);

  const dispatch = useDispatch();

  return (
    <>
      <li className={`catalog__genres-item ${activeGenre === genre && `catalog__genres-item--active`}`}>
        <a href="#" className="catalog__genres-link" onClick={(e) => {
          updateFilms(dispatch, allFilms, genre, SHOW_MORE_DEFAULT_COUNT);
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
