import React from 'react';
import Genre from "../genre/genre";
import {FilmValidation} from "../validation/validation";
import {connect} from "react-redux";
import PropTypes from "prop-types";

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
  const {allFilms} = props;
  const genreTitles = new Set();
  genreTitles.add(`All genres`);
  allFilms.map((film) => getGenreTitle(film.genre)).forEach(genreTitles.add, genreTitles);
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
};

export {GenreList};
export default connect(mapStateToProps, null)(GenreList);
