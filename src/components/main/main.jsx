import React, {useEffect, useState} from 'react';
import {FilmList} from "../film-list/film-list";
import {Genres} from "../genres/genres";
import {ShowMore} from "../show-more/show-more";
import {useDispatch, useSelector} from "react-redux";
import {AppRoute, AuthorizationStatus, SHOW_MORE_DEFAULT_COUNT} from "../../const/const";
import {useHistory} from "react-router-dom";
import MyListButton from "../film-list/my-list-button";
import Logo from "../logo/logo";
import UserBlock from "../user-block/user-block";
import {fetchFilm} from "../../store/api-actions";
import {FilmValidation} from "../../validation/validation";
import {updateFilteredFilms} from "../../services/data";

const Main = ({film}) => {
  const {authorizationStatus} = useSelector((state) => state.AUTH);
  const {activeGenre, allFilms} = useSelector((state) => state.FILM);
  const [shCount, setShCount] = useState(SHOW_MORE_DEFAULT_COUNT);

  const dispatch = useDispatch();

  const history = useHistory();

  useEffect(() => {
    dispatch(fetchFilm(film.id));
  }, []);

  useEffect(() => {
    updateFilteredFilms(dispatch, allFilms, activeGenre, shCount);
  }, [shCount]);

  const getMyLisBlock = () => {
    if (authorizationStatus === AuthorizationStatus.AUTH) {
      return <MyListButton/>;
    } else {
      return ``;
    }
  };

  const updateShowCount = () => {
    setShCount(shCount + SHOW_MORE_DEFAULT_COUNT);
  };

  return (
    <>
      <section className="movie-card">
        <div className="movie-card__bg">
          <img src={film.backgroundImage} alt={film.name} />
        </div>
        <h1 className="visually-hidden">WTW</h1>
        <header className="page-header movie-card__head">
          <link rel="shortcut icon" href="#"/>
          <Logo/>
          <div className="user-block">
            <UserBlock/>
          </div>
        </header>
        <div className="movie-card__wrap">
          <div className="movie-card__info">
            <div className="movie-card__poster">
              <img src={film.posterImage} alt={film.name + `poster`} width={218} height={327} />
            </div>
            <div className="movie-card__desc">
              <h2 className="movie-card__title">{film.name}</h2>
              <p className="movie-card__meta">
                <span className="movie-card__genre">{film.genre}</span>
                <span className="movie-card__year">{film.released}</span>
              </p>
              <div className="movie-card__buttons">
                <button className="btn btn--play movie-card__button" type="button" onClick={() => history.push(AppRoute.PLAYERS + `/` + film.id)}>
                  <svg viewBox="0 0 19 19" width={19} height={19}>
                    <use xlinkHref="#play-s" />
                  </svg>
                  <span>Play</span>
                </button>
                {getMyLisBlock()}
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="page-content">
        <section className="catalog">
          <h2 className="catalog__title visually-hidden">Catalog</h2>
          <Genres/>
          <div className="catalog__movies-list">
            <FilmList/>
          </div>
          <div className="catalog__more">
            <ShowMore updateShowCount={updateShowCount}/>
          </div>
        </section>
      </div>
    </>
  );
};

Main.propTypes = FilmValidation;

export {Main};
