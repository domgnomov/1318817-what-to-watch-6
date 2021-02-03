import React from 'react';

const Card = () => {
  return (
    <React.Fragment>
      <article className="small-movie-card catalog__movies-card">
        <div className="small-movie-card__image">
          <img src="img/we-need-to-talk-about-kevin.jpg" alt="We need to talk about Kevin" width="280" height="175"/>
        </div>
        <h3 className="small-movie-card__title">
          <a className="small-movie-card__link" href="movie-page.html">We need to talk about Kevin</a>
        </h3>
      </article>
    </React.Fragment>
  );
};

export default Card;
