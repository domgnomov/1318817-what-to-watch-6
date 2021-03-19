import React, {useEffect} from 'react';
import {FilmList} from "../lists/film-list";
import {GenreList} from "../genres/genre-list";
import {ShowMore} from "../show-more/show-more";
import {useDispatch, useSelector} from "react-redux";
import {AuthorizationStatus} from "../../const/const";
import {useHistory} from "react-router-dom";
import MyListButton from "../lists/my-list-button";
import Logo from "../logo/logo";
import UserBlock from "../user-block/user-block";
import {fetchFilm} from "../../store/api-actions";


const Main = ({promoFilm}) => {
  const {authorizationStatus} = useSelector((state) => state.AUTH);
  const film = promoFilm;
  const history = useHistory();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchFilm(promoFilm.id));
  }, []);

  const getMyLisBlock = () => {
    if (authorizationStatus === AuthorizationStatus.AUTH) {
      return <MyListButton/>;
    } else {
      return ``;
    }
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
            <UserBlock isMain={true}/>
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
                <span className="movie-card__year">{film.year}</span>
              </p>
              <div className="movie-card__buttons">
                <button className="btn btn--play movie-card__button" type="button" onClick={() => history.push(`/player/` + film.id)}>
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
          <GenreList/>
          <div className="catalog__movies-list">
            <FilmList/>
          </div>
          <div className="catalog__more">
            <ShowMore/>
          </div>
        </section>
      </div>
    </>
  );
};

export {Main};
