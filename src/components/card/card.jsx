import React, {useState, useEffect, useRef} from 'react';
import {FilmValidation} from "../validation/validation";
import VideoPlayer from "../video-player/video-player";
import Cover from "../cover/cover";

const Card = (props) => {
  const {film, setActiveId} = props;
  const ref = useRef();
  const [isPreviewPlaying, setIsPreviewPlaying] = useState(false);

  useEffect(() => {
    let isMounted = true;
    const delay = function (elem, callback) {
      let timeout = null;
      elem.onmouseover = function () {
        timeout = setTimeout(callback, 1000);
      };

      elem.onmouseout = function () {
        clearTimeout(timeout);
        if (isMounted) {
          setIsPreviewPlaying(false);
        }
      };
    };

    delay(ref.current, function () {
      if (isMounted) {
        setIsPreviewPlaying(true);
      }
    });

    return () => {
      ref.current.onmouseover = null;
      ref.current.onmouseout = null;
      isMounted = false;
    };
  }, []);

  const getFilmContainer = () => {
    if (isPreviewPlaying) {
      return <VideoPlayer film={film}/>;
    } else {
      return <Cover film={film}/>;
    }
  };
  return (
    <>
      <article className="small-movie-card catalog__movies-card" ref={ref} onMouseEnter={() => setActiveId(film.id)}>
        {getFilmContainer()}
      </article>
    </>
  );
};

Card.propTypes = FilmValidation;

export default Card;
