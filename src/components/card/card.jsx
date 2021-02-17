import React, {useEffect, useRef} from 'react';
import {useHistory} from 'react-router-dom';
import {FilmValidation} from "../validation/validation";

const Card = (props) => {
  const {film, setActiveId} = props;

  const cardRef = useRef();

  const history = useHistory();

  useEffect(() => {
    const delay = function (elem, callback) {
      let timeout = null;
      elem.onmouseover = function () {
        timeout = setTimeout(callback, 1000);
      };

      elem.onmouseout = function () {
        clearTimeout(timeout);
      };
    };

    delay(cardRef.current, function () {
      console.log("Fired");
    });

    return () => {
      cardRef.current.onmouseover = null;
      cardRef.current.onmouseout = null;
    };
  }, []);

  return (
    <>
      <article className="small-movie-card catalog__movies-card" >
        <div className="small-movie-card__image" ref={cardRef} onMouseEnter={() => setActiveId(film.id)}>
          <img src={film.posterImage} alt={film.name} width="280" height="175"
          />
        </div>
        <h3 className="small-movie-card__title">
          <a className="small-movie-card__link" href="movie-page.html" onClick={(e) => {
            history.push(`/films/1`);
            e.preventDefault();
          }}>{film.name}</a>
        </h3>
      </article>
    </>
  );
};

Card.propTypes = FilmValidation;

export default Card;
