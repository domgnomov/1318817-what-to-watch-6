import React from 'react';
import {useSelector} from "react-redux";

const PlayPause = () => {
  console.log(`PlayPause rerender`);
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

export default PlayPause;
