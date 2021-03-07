import React from 'react';
import {FilmValidation} from "../validation/validation";

const MiniPlayer = (props) => {
  const {film} = props;

  return (
    <>
      <video autoPlay={true} muted={true} controls width="280" height="175">
        <source src={film.previewVideoLink} type="video/mp4"/>
      </video>
    </>
  );
};

MiniPlayer.propTypes = FilmValidation;

export default MiniPlayer;
