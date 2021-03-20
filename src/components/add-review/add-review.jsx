import React from 'react';
import {AddReviewForm} from "./add-review-form";
import Logo from "../logo/logo";
import UserBlock from "../user-block/user-block";
import {useDispatch, useSelector} from "react-redux";
import {fetchFilm} from "../../store/api-actions";
import {useParams} from "react-router-dom";
import {DEFAULT_FILM} from "../../const/const";

const AddReview = () => {
  const {currentFilm} = useSelector((state) => state.CURRENT_FILM);
  const film = currentFilm;

  const dispatch = useDispatch();

  const {id} = useParams();

  if (film === DEFAULT_FILM) {
    dispatch(fetchFilm(id));
  }

  return (
    <>
      <section className="movie-card movie-card--full">
        <div className="movie-card__header">
          <div className="movie-card__bg">
            <img src={film.previewImage} alt={film.name} />
          </div>
          <h1 className="visually-hidden">WTW</h1>
          <header className="page-header">
            <Logo/>
            <nav className="breadcrumbs">
              <ul className="breadcrumbs__list">
                <li className="breadcrumbs__item">
                  <a href="movie-page.html" className="breadcrumbs__link">{film.name}</a>
                </li>
                <li className="breadcrumbs__item">
                  <a className="breadcrumbs__link">Add review</a>
                </li>
              </ul>
            </nav>
            <div className="user-block">
              <UserBlock/>
            </div>
          </header>
          <div className="movie-card__poster movie-card__poster--small">
            <img src={film.posterImage} alt={film.name + ` poster`} width={218} height={327} />
          </div>
        </div>
        <div className="add-review">
          <AddReviewForm filmId={film.id}/>
        </div>
      </section>
    </>
  );
};

export {AddReview};
