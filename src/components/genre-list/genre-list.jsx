import React from 'react';
import Genre from "../genre/genre";
import {FilmValidation} from "../validation/validation";
import {connect} from "react-redux";
import PropTypes from "prop-types";
import {ActionCreator} from "../../store/action";
import {DEFAULT_GENRE, SHOW_MORE_DEFAULT_COUNT} from "../../const";

const GenreList = (props) => {
  const {allFilms} = props;
  const genres = new Set();
  genres.add(`All genres`);
  allFilms.map((film) => film.genre).forEach(genres.add, genres);
  return (
    <>
      <ul className="catalog__genres-list">
        {
          Array.from(genres.values()).map((genre, id) => (<Genre key={id} genre={genre}/>))
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
