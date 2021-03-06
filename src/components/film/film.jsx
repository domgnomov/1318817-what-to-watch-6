import React, {useEffect} from 'react';
import {useHistory, useParams} from 'react-router-dom';
import {FilmValidation} from "../validation/validation";
import Tabs from "../tabs/tabs";
import LikeThisFilms from "../like-this-films/like-this-films";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {fetchFilm} from "../../store/api-actions";
import LoadingScreen from "../loading-screen/loading-screen";
import {AuthorizationStatus, DEFAULT_FILM} from "../../const";

const Film = (props) => {
  const {onLoadFilm, authorizationStatus, currentFilm} = props;
  const history = useHistory();
  const {id} = useParams();
  const film = currentFilm;
  useEffect(() => {
    onLoadFilm(id);
  }, [id]);

  if (film === DEFAULT_FILM) {
    return (
      <LoadingScreen />
    );
  }

  const getAddReviewButton = () => {
    if (authorizationStatus === AuthorizationStatus.AUTH) {
      return (
        <>
          <a href="add-review.html" className="btn movie-card__button" onClick={(e) => {
            history.push(`/films/` + film.id + `/review`);
            e.preventDefault();
          }}>Add review</a>
        </>
      );
    } else {
      return ``;
    }
  };

  return (
    <>
      <div>
        <section className="movie-card movie-card--full">
          <div className="movie-card__hero">
            <div className="movie-card__bg">
              <img src={film.previewImage} alt={film.name} />
            </div>
            <h1 className="visually-hidden">WTW</h1>
            <header className="page-header movie-card__head">
              <div className="logo">
                <a href="main.html" className="logo__link" onClick={(e) => {
                  history.push(`/`);
                  e.preventDefault();
                }}>
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
              <div className="movie-card__desc">
                <h2 className="movie-card__title">{film.name}</h2>
                <p className="movie-card__meta">
                  <span className="movie-card__genre">{film.genre}</span>
                  <span className="movie-card__year">{film.year}</span>
                </p>
                <div className="movie-card__buttons">
                  <button className="btn btn--play movie-card__button" type="button" onClick={(e) => {
                    history.push(`/player/` + film.id);
                    e.preventDefault();
                  }}>
                    <svg viewBox="0 0 19 19" width={19} height={19}>
                      <use xlinkHref="#play-s" />
                    </svg>
                    <span>Play</span>
                  </button>
                  <button className="btn btn--list movie-card__button " type="button" onClick={(e) => {
                    history.push(`/myList`);
                    e.preventDefault();
                  }}>
                    <svg viewBox="0 0 19 20" width={19} height={20}>
                      <use xlinkHref="#add" />
                    </svg>
                    <span>My list</span>
                  </button>
                  {getAddReviewButton()}
                </div>
              </div>
            </div>
          </div>
          <div className="movie-card__wrap movie-card__translate-top">
            <div className="movie-card__info">
              <div className="movie-card__poster movie-card__poster--big">
                <img src={film.posterImage} alt={film.name + `poster`} width={218} height={327} />
              </div>
              <Tabs film={film} />
            </div>
          </div>
        </section>
        <div className="page-content">
          <section className="catalog catalog--like-this">
            <h2 className="catalog__title">More like this</h2>
            <div className="catalog__movies-list">
              <LikeThisFilms genre={film.genre}/>
            </div>
          </section>
          <footer className="page-footer">
            <div className="logo">
              <a href="main.html" className="logo__link logo__link--light">
                <span className="logo__letter logo__letter--1">W</span>
                <span className="logo__letter logo__letter--2">T</span>
                <span className="logo__letter logo__letter--3">W</span>
              </a>
            </div>
            <div className="copyright">
              <p>© 2019 What to watch Ltd.</p>
            </div>
          </footer>
        </div>
      </div>
    </>
  );
};

Film.propTypes = {
  authorizationStatus: PropTypes.string.isRequired,
  currentFilm: PropTypes.oneOfType([
    FilmValidation,
    PropTypes.shape(DEFAULT_FILM).isRequired
  ]),
  onLoadFilm: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  currentFilm: state.currentFilm,
  authorizationStatus: state.authorizationStatus,
});

const mapDispatchToProps = (dispatch) => ({
  onLoadFilm(id) {
    dispatch(fetchFilm(id));
  },
});

export {Film};
export default connect(mapStateToProps, mapDispatchToProps)(Film);
