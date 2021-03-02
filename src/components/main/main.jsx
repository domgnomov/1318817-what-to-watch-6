import React from 'react';
import FilmList from "../film-list/film-list";
import {useHistory} from 'react-router-dom';
import {FilmValidation} from "../validation/validation";
import GenreList from "../genre-list/genre-list";
import ShowMore from "../show-more/show-more";
import PropTypes from "prop-types";
import {connect} from "react-redux";


const Main = (props) => {
  const {allFilms} = props;

  const name = allFilms[0].name;
  const genre = allFilms[0].genre;
  const year = allFilms[0].released;

  const history = useHistory();

  return (
    <>
      <section className="movie-card">
        <div className="movie-card__bg">
          <img src="img/bg-the-grand-budapest-hotel.jpg" alt="The Grand Budapest Hotel" />
        </div>
        <h1 className="visually-hidden">WTW</h1>
        <header className="page-header movie-card__head">
          <div className="logo">
            <a className="logo__link">
              <span className="logo__letter logo__letter--1">W</span>
              <span className="logo__letter logo__letter--2">T</span>
              <span className="logo__letter logo__letter--3">W</span>
            </a>
          </div>
          <div className="user-block">
            <div className="user-block__avatar">
              <img src="img/avatar.jpg" alt="User avatar" width={63} height={63} />
            </div>
          </div>
        </header>
        <div className="movie-card__wrap">
          <div className="movie-card__info">
            <div className="movie-card__poster">
              <img src="img/the-grand-budapest-hotel-poster.jpg" alt="The Grand Budapest Hotel poster" width={218} height={327} />
            </div>
            <div className="movie-card__desc">
              <h2 className="movie-card__title">{name}</h2>
              <p className="movie-card__meta">
                <span className="movie-card__genre">{genre}</span>
                <span className="movie-card__year">{year}</span>
              </p>
              <div className="movie-card__buttons">
                <button className="btn btn--play movie-card__button" type="button" onClick={() => history.push(`/player/1`)}>
                  <svg viewBox="0 0 19 19" width={19} height={19}>
                    <use xlinkHref="#play-s" />
                  </svg>
                  <span>Play</span>
                </button>
                <button className="btn btn--list movie-card__button" type="button" onClick={() => history.push(`/myList`)}>
                  <svg viewBox="0 0 19 20" width={19} height={20}>
                    <use xlinkHref="#add" />
                  </svg>
                  <span>My list</span>
                </button>
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

Main.propTypes = {
  allFilms: PropTypes.arrayOf(FilmValidation).isRequired
};

const mapStateToProps = (state) => ({
  allFilms: state.allFilms
});

export {Main};
export default connect(mapStateToProps, null)(Main);
