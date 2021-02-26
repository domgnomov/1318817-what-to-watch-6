import React from 'react';
import Genre from "../genre/genre";
import {FilmValidation} from "../validation/validation";
import {connect} from "react-redux";
import PropTypes from "prop-types";

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
};

export {GenreList};
export default connect(mapStateToProps, null)(GenreList);
