import React, {useEffect} from 'react';
import {useHistory, useParams} from 'react-router-dom';
import Tabs from "../tabs/tabs";
import {LikeThisFilms} from "../film-list/like-this-film-list";
import {useDispatch, useSelector} from "react-redux";
import {fetchFilm, fetchReviews} from "../../store/api-actions";
import LoadingScreen from "../loading-screen/loading-screen";
import {AppRoute, AuthorizationStatus, DEFAULT_FILM} from "../../const/const";
import MyListButton from "../film-list/my-list-button";
import Logo from "../logo/logo";
import UserBlock from "../user-block/user-block";

const Film = () => {
  const {authorizationStatus} = useSelector((state) => state.AUTH);
  const {currentFilm} = useSelector((state) => state.FILM);
  const film = currentFilm;

  const dispatch = useDispatch();

  const {id} = useParams();

  const history = useHistory();

  useEffect(() => {
    dispatch(fetchFilm(id));
    dispatch(fetchReviews(id));
  }, [id]);

  if (film === DEFAULT_FILM) {
    return (
      <LoadingScreen />
    );
  }

  window.scrollTo(0, 0);

  const getAddReviewButton = () => {
    if (authorizationStatus === AuthorizationStatus.AUTH) {
      return (
        <>
          <a href="add-review.html" className="btn movie-card__button" onClick={(e) => {
            history.push(AppRoute.FILMS + `/` + film.id + AppRoute.REVIEWS);
            e.preventDefault();
          }}>Add review</a>
        </>
      );
    } else {
      return ``;
    }
  };

  const getMyListButton = () => {
    if (authorizationStatus === AuthorizationStatus.AUTH) {
      return (
        <MyListButton/>
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
              <Logo/>
              <div className="user-block">
                <UserBlock/>
              </div>
            </header>
            <div className="movie-card__wrap">
              <div className="movie-card__desc">
                <h2 className="movie-card__title">{film.name}</h2>
                <p className="movie-card__meta">
                  <span className="movie-card__genre">{film.genre}</span>
                  <span className="movie-card__year">{film.released}</span>
                </p>
                <div className="movie-card__buttons">
                  <button className="btn btn--play movie-card__button" type="button" onClick={(e) => {
                    history.push(AppRoute.PLAYERS + `/` + film.id);
                    e.preventDefault();
                  }}>
                    <svg viewBox="0 0 19 19" width={19} height={19}>
                      <use xlinkHref="#play-s" />
                    </svg>
                    <span>Play</span>
                  </button>
                  {getMyListButton()}
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
            <div className="copyright">
              <p>© 2019 What to watch Ltd.</p>
            </div>
          </footer>
        </div>
      </div>
    </>
  );
};

export {Film};

