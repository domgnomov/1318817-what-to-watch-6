import React from 'react';
import {ActionCreator} from "../../store/action";
import {connect} from "react-redux";
import {FilmValidation} from "../validation/validation";
import PropTypes from "prop-types";
import {SHOW_MORE_COUNTER} from "../../const";

const getGenreByTitle = (genreTitle) => {
  switch (genreTitle) {
    case `Comedies`:
      return `Comedy`;
    case `Dramas`:
      return `Drama`;
    case `Crime`:
      return `Crime`;
    default:
      return `All genres`;
  }
};

const Genre = (props) => {
  const {allFilms, genreTitle, activeGenre, onChangeGenre} = props;
  const genre = getGenreByTitle(genreTitle);
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
  allFilms: state.allFilms,
  showCount: state.showCount
});

const mapDispatchToProps = (dispatch) => ({
  onChangeGenre(genre, allFilms) {
    dispatch(ActionCreator.changeShowCount(SHOW_MORE_COUNTER));
    dispatch(ActionCreator.changeGenre(genre));
    dispatch(ActionCreator.changeAllFilmsByActiveGenre(genre, allFilms));
    dispatch(ActionCreator.getFilms(genre, allFilms, SHOW_MORE_COUNTER));
  },
});

Genre.propTypes = {
  allFilms: PropTypes.arrayOf(FilmValidation),
  genreTitle: PropTypes.string.isRequired,
  activeGenre: PropTypes.string.isRequired,
  onChangeGenre: PropTypes.func.isRequired
};

export {Genre};
export default connect(mapStateToProps, mapDispatchToProps)(Genre);
