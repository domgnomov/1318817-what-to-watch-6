import React from 'react';
import Genre from "../genre/genre";
import {FilmValidation} from "../validation/validation";
import {connect} from "react-redux";
import PropTypes from "prop-types";
import {ActionCreator} from "../../store/action";
import {DEFAULT_GENRE, SHOW_MORE_DEFAULT_COUNT} from "../../const";

const getGenreTitle = (genre) => {
  switch (genre) {
    case `Comedy`:
      return `Comedies`;
    case `Drama`:
      return `Dramas`;
    case `Crime`:
      return `Crime`;
    default:
      return ``;
  }
};

const GenreList = (props) => {
  const {allFilms, changeGenre} = props;
  const genreTitles = new Set();
  genreTitles.add(DEFAULT_GENRE);
  allFilms.map((film) => getGenreTitle(film.genre)).forEach(genreTitles.add, genreTitles);
  changeGenre(allFilms);
  return (
    <>
      <ul className="catalog__genres-list">
        {
          Array.from(genreTitles.values()).map((genreTitle, id) => (<Genre key={id} genreTitle={genreTitle}/>))
        }
      </ul>
    </>
  );
};

const mapStateToProps = (state) => ({
  allFilms: state.allFilms
});

GenreList.propTypes = {
  allFilms: PropTypes.arrayOf(FilmValidation),
  changeGenre: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  changeGenre(allFilms) {
    dispatch(ActionCreator.changeGenre(DEFAULT_GENRE));
    dispatch(ActionCreator.changeShowCount(SHOW_MORE_DEFAULT_COUNT));
    dispatch(ActionCreator.changeAllFilmsByActiveGenre(DEFAULT_GENRE, allFilms));
    dispatch(ActionCreator.getFilms(DEFAULT_GENRE, allFilms, SHOW_MORE_DEFAULT_COUNT));
  },
});


export {GenreList};
export default connect(mapStateToProps, mapDispatchToProps)(GenreList);
