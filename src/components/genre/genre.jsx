import React from 'react';
import {ActionCreator} from "../../store/action";
import {connect} from "react-redux";
import {FilmValidation} from "../validation/validation";
import PropTypes from "prop-types";

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
  const {films, genreTitle, activeGenre, onChangeGenre} = props;
  const genre = getGenreByTitle(genreTitle);
  return (
    <>
      <li className={`catalog__genres-item ${activeGenre === genre && `catalog__genres-item--active`}`}>
        <a href="#" className="catalog__genres-link" onClick={(e) => {
          onChangeGenre(genre, films);
          e.preventDefault();
        }}>{genre}</a>
      </li>
    </>
  );
};

const mapStateToProps = (state) => ({
  activeGenre: state.activeGenre
});

const mapDispatchToProps = (dispatch) => ({
  onChangeGenre(genre, films) {
    dispatch(ActionCreator.changeGenre(genre));
    dispatch(ActionCreator.getFilms(genre, films));
  },
});

Genre.propTypes = {
  films: PropTypes.arrayOf(FilmValidation),
  genreTitle: PropTypes.string.isRequired,
  activeGenre: PropTypes.string.isRequired,
  onChangeGenre: PropTypes.func.isRequired
};

export {Genre};
export default connect(mapStateToProps, mapDispatchToProps)(Genre);
