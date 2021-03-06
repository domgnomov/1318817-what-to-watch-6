import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import PropTypes from "prop-types";
import {SHOW_MORE_DEFAULT_COUNT} from "../../const";
import {updateFilms} from "../model/filter";

const Genre = (props) => {
  const dispatch = useDispatch();
  const {genre} = props;
  const {allFilms, activeGenre} = useSelector((state) => state.MAIN);

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
