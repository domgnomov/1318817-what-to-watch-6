import React from 'react';
import {changeAllFilmsByActiveGenre, changeGenre, changeShowCount, getFilms} from "../../store/action";
import {connect} from "react-redux";
import {FilmValidation} from "../validation/validation";
import PropTypes from "prop-types";
import {SHOW_MORE_DEFAULT_COUNT} from "../../const";

const Genre = (props) => {
  const {allFilms, genre, activeGenre, onChangeGenre} = props;
  return (
    <>
      <li className={`catalog__genres-item ${activeGenre === genre && `catalog__genres-item--active`}`}>
        <a href="#" className="catalog__genres-link" onClick={(e) => {
          onChangeGenre(genre, allFilms);
          e.preventDefault();
        }}>{genre}</a>
      </li>
    </>
  );
};

const mapStateToProps = (state) => ({
  activeGenre: state.activeGenre,
  allFilms: state.allFilms
});

const mapDispatchToProps = (dispatch) => ({
  onChangeGenre(genre, allFilms) {
    dispatch(changeShowCount(SHOW_MORE_DEFAULT_COUNT));
    dispatch(changeGenre(genre));
    dispatch(changeAllFilmsByActiveGenre(genre, allFilms));
    dispatch(getFilms(genre, allFilms, SHOW_MORE_DEFAULT_COUNT));
  },
});

Genre.propTypes = {
  allFilms: PropTypes.arrayOf(FilmValidation),
  genre: PropTypes.string.isRequired,
  activeGenre: PropTypes.string.isRequired,
  onChangeGenre: PropTypes.func.isRequired
};

export {Genre};
export default connect(mapStateToProps, mapDispatchToProps)(Genre);
