import React from 'react';
import {FilmValidation} from "../validation/validation";
import {useSelector} from "react-redux";

const PlayPause = () => {
  const {playingStatus} = useSelector((state) => state.FILM);

  const getButtonPlayPauseButton = () => {
    if (playingStatus) {
      return (
        <>
          <svg viewBox="0 0 14 21" width="14" height="21">
            <use xlinkHref="#pause"/>
          </svg>
          <span>Pause</span>
        </>
      );
    } else {
      return (
        <>
          <svg viewBox="0 0 19 19" width={19} height={19}>
            <use xlinkHref="#play-s" />
          </svg>
          <span>Play</span>
        </>
      );
    }
  };

  return (
    <>
      {getButtonPlayPauseButton()}
    </>
  );
};

PlayPause.propTypes = FilmValidation;

export default PlayPause;
