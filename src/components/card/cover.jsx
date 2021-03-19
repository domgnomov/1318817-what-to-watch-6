import React from 'react';
import {FilmValidation} from "../../validation/validation";
import {redirectToFilm} from "../../store/action";
import {AppRoute} from "../../const/const";
import {useDispatch} from "react-redux";

const Cover = (props) => {
  const {film} = props;

  const dispatch = useDispatch();

  const clickHandler = (evt) => {
    evt.preventDefault();
    dispatch(redirectToFilm(AppRoute.FILMS + `/` + film.id));
  };

  return (
    <>
      <div className="small-movie-card__image" onClick={clickHandler}>
        <img src={film.posterImage} alt={film.name} width="280" height="175"/>
      </div>
      <h3 className="small-movie-card__title">
        <a className="small-movie-card__link" href="movie-page.html" onClick={clickHandler}>{film.name}</a>
      </h3>
    </>
  );
};

Cover.propTypes = FilmValidation;

export default Cover;
