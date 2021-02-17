import React from 'react';
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
          history.push(`/films/1`);
          e.preventDefault();
        }}>{film.name}</a>
      </h3>
    </>
  );
};

export default Cover;
