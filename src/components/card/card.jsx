import React from 'react';

const Card = (props) => {
  const {film, setActiveId} = props;
  return (
    <>
      <article className="small-movie-card catalog__movies-card" >
        <div className="small-movie-card__image" onMouseEnter={() => setActiveId(film.id)}>
          <img src={film.posterImage} alt="We need to talk about Kevin" width="280" height="175"
          />
        </div>
        <h3 className="small-movie-card__title">
          <a className="small-movie-card__link" href="movie-page.html" >{film.name}</a>
        </h3>
      </article>
    </>
  );
};

export default Card;
