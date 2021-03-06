import React from 'react';
import {FilmValidation} from "../validation/validation";
import {useHistory} from "react-router-dom";

const Cover = (props) => {
  const {film} = props;

  const history = useHistory();

  return (
    <>
      <div className="small-movie-card__image" >
        <img src={film.posterImage} alt={film.name} width="280" height="175"/>
      </div>
      <h3 className="small-movie-card__title">
        <a className="small-movie-card__link" href="movie-page.html" onClick={(e) => {
          history.push(`/films/` + film.id);
          e.preventDefault();
        }}>{film.name}</a>
      </h3>
    </>
  );
};

Cover.propTypes = FilmValidation;

export default Cover;
