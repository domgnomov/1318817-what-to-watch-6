import React, {useState, useEffect, useRef} from 'react';
import {FilmValidation} from "../validation/validation";
import VideoPlayer from "../video-player/video-player";
import Cover from "../cover/cover";

const Card = (props) => {
  const {film, setActiveId} = props;
  const cardRef = useRef();
  const [isPreviewPlaying, setIsPreviewPlaying] = useState(false);

  useEffect(() => {
    const delay = function (elem, callback) {
      let timeout = null;
      elem.onmouseover = function () {
        timeout = setTimeout(callback, 1000);
      };

      elem.onmouseout = function () {
        clearTimeout(timeout);
        setIsPreviewPlaying(false);
      };
    };

    delay(cardRef.current, function () {
      setIsPreviewPlaying(true);
    });

    return () => {
      cardRef.current.onmouseover = null;
      cardRef.current.onmouseout = null;
    };
  }, []);

  const getCardContainer = () => {
    if (isPreviewPlaying) {
      return <VideoPlayer film={film}/>;
    } else {
      return <Cover film={film}/>;
    }
  };
  return (
    <>
      <article className="small-movie-card catalog__movies-card" ref={cardRef} onMouseEnter={() => setActiveId(film.id)}>
        {getCardContainer()}
      </article>
    </>
  );
};

Card.propTypes = FilmValidation;

export default Card;
