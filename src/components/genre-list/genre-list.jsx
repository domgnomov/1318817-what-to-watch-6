import React from 'react';
import Genre from "../genre/genre";
import {FilmsValidation} from "../validation/validation";

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
  const {films} = props;
  const genreTitles = new Set();
  genreTitles.add(`All genres`);
  films.map((film) => getGenreTitle(film.genre)).forEach(genreTitles.add, genreTitles);
  return (
    <>
      <ul className="catalog__genres-list">
        {
          Array.from(genreTitles.values()).map((genreTitle, id) => (<Genre key={id} genreTitle={genreTitle} films={films}/>))
        }
      </ul>
    </>
  );
};

GenreList.propTypes = FilmsValidation;

export default GenreList;
