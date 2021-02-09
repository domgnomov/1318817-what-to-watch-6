import React, {Fragment} from 'react';

const Card = (props) => {
  const {film} = props;
  return (
    <Fragment>
      <article className="small-movie-card catalog__movies-card">
        <div className="small-movie-card__image">
          <img src={film.posterImage} alt="We need to talk about Kevin" width="280" height="175"/>
        </div>
        <h3 className="small-movie-card__title">
          <a className="small-movie-card__link" href="movie-page.html">{film.name}</a>
        </h3>
      </article>
    </Fragment>
  );
};

export default Card;
