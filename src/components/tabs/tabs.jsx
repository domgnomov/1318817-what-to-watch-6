import React from 'react';
import {FilmValidation} from "../validation/validation";
import FilmReviews from "../film-reviews/film-reviews";


const Tabs = (props) => {
  const {film} = props;

  const getTabContainer = () => {
    return <FilmReviews film={film} />;
  };

  return (
    <div className="movie-card__desc">
      <nav className="movie-nav movie-card__nav">
        <ul className="movie-nav__list">
          <li className="movie-nav__item movie-nav__item--active">
            <a href="#" className="movie-nav__link">Overview</a>
          </li>
          <li className="movie-nav__item">
            <a href="#" className="movie-nav__link">Details</a>
          </li>
          <li className="movie-nav__item">
            <a href="#" className="movie-nav__link">Reviews</a>
          </li>
        </ul>
      </nav>
      {getTabContainer()}
    </div>
  );
};

Tabs.propTypes = FilmValidation;

export default Tabs;
